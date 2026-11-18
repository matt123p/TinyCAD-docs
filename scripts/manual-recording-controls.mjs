// Presentation overlays and pacing for real Playwright actions. No app data is mocked.
export async function recordingPage(raw, actions, minimumMs = 4200) {
  await raw.addInitScript(() => {
    addEventListener('DOMContentLoaded', () => {
      const pointer = document.createElement('div');
      pointer.id = 'manual-pointer';
      pointer.style.cssText = 'position:fixed;left:0;top:0;width:26px;height:26px;border:3px solid #0078d4;border-radius:50%;background:#ffffff80;z-index:2147483646;pointer-events:none;transform:translate(-50%,-50%);display:none';
      const ring = document.createElement('div');
      ring.id = 'manual-click';
      ring.style.cssText = 'position:fixed;width:46px;height:46px;border:5px solid #e23c24;border-radius:50%;background:#ffda4480;box-shadow:0 0 0 4px #fff9;z-index:2147483647;pointer-events:none;transform:translate(-50%,-50%);display:none';
      document.body.append(pointer, ring);
      let timer;
      window.manualPoint = (x, y, click = false) => {
        pointer.style.display = 'block'; pointer.style.left = x + 'px'; pointer.style.top = y + 'px';
        if (click) {
          clearTimeout(timer); ring.style.left = x + 'px'; ring.style.top = y + 'px'; ring.style.display = 'block';
          timer = setTimeout(() => { ring.style.display = 'none'; }, 3000);
        }
      };
      document.addEventListener('mousemove', e => window.manualPoint(e.clientX, e.clientY), true);
      document.addEventListener('mousedown', e => window.manualPoint(e.clientX, e.clientY, true), true);
    });
  });
  const pause = ms => new Promise(resolve => setTimeout(resolve, ms));
  const methods = new Set(['click', 'dblclick', 'fill', 'selectOption', 'dragTo', 'hover', 'check', 'uncheck']);
  let previousEnd = 0;
  const paced = async (kind, target, args, invoke) => {
    await pause(Math.max(0, minimumMs - (Date.now() - previousEnd)));
    let point;
    if (target?.boundingBox) {
      await target.scrollIntoViewIfNeeded();
      const box = await target.boundingBox();
      if (box) {
        point = {x:box.x + box.width / 2, y:box.y + box.height / 2};
        await raw.mouse.move(point.x, point.y, {steps:16});
        await pause(450);
        await raw.evaluate(({x,y,click}) => window.manualPoint(x,y,click), {...point,click:kind!=='hover'});
      }
    } else if (kind.startsWith('mouse.')) {
      point={x:args[0],y:args[1]};
      await raw.mouse.move(point.x,point.y,{steps:16});
      await raw.evaluate(({x,y})=>window.manualPoint(x,y,true),point);
    }
    const event={kind,startedMs:Date.now(),target:target?.toString(),point};
    console.log('Action:',kind,event.target||'');
    await invoke();
    event.finishedMs=Date.now();previousEnd=event.finishedMs;actions.push(event);
    // Hold the resulting UI for at least four seconds after EVERY action,
    // including separate clicks grouped within one narrated step.
    await pause(minimumMs);
  };
  const locator = target => new Proxy(target, {get(target,key){
    const value=Reflect.get(target,key);
    if(typeof value!=='function')return value;
    return (...args)=>{
      if(methods.has(key))return paced(key,target,args,()=>value.apply(target,args));
      const result=value.apply(target,args);
      return /Locator$/.test(result?.constructor?.name||'')?locator(result):result;
    };
  }});
  return new Proxy(raw,{get(target,key){
    if(key==='mouse')return new Proxy(raw.mouse,{get(mouse,key){
      const value=mouse[key];if(typeof value!=='function')return value;
      return (...args)=>['click','dblclick'].includes(key)?paced('mouse.'+key,null,args,()=>value.apply(mouse,args)):value.apply(mouse,args);
    }});
    if(key==='keyboard')return new Proxy(raw.keyboard,{get(keyboard,key){
      const value=keyboard[key];if(typeof value!=='function')return value;
      return (...args)=>key==='type'?paced('type',null,args,()=>value.apply(keyboard,args)):key==='press'&&['Escape','Enter','ControlOrMeta+x','ControlOrMeta+v'].includes(args[0])?paced('key.'+args[0],null,args,()=>value.apply(keyboard,args)):value.apply(keyboard,args);
    }});
    const value=Reflect.get(target,key);if(typeof value!=='function')return value;
    return (...args)=>{const result=value.apply(target,args);return /Locator$/.test(result?.constructor?.name||'')?locator(result):result;};
  }});
}
