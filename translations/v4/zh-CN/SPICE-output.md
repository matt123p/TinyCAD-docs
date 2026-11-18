---
layout: default
---
# SPICE 模型和网表输出
{: #spice-models-and-netlist-output}

TinyCAD 同时支持 [集成 ngspice 仿真](../Simulation/) 和将 SPICE 网表导出到外部仿真器。这两种方式都依赖于元件的 SPICE 模板和引脚映射。符号的外观本身并不能描述其电气行为。

## 模型、模板和引脚顺序
{: #models-templates-and-pin-order}

电阻可以使用原生 SPICE 元件。晶体管可能需要 `.model`；更复杂的器件可以使用 `.subckt`。已放置符号的 SPICE 设置会将其物理引脚编号连接到模型所需的端子。请检查符号属性中的 **SPICE** 选项卡；实例属性可以覆盖符号默认值。

模板使用：

- **`%(pin)`** 表示指定 TinyCAD 引脚编号所连接的网络。
- **`$(attribute)`** 表示元件属性。
- **`refnum`** 表示经过特殊处理的参考标号后缀，以便保留模板中的 SPICE 器件前缀。

例如，电阻模板可以是：

```text
R$(refnum) %(1) %(2) $(NAME)
```

对于参考标号 R3、网络 7 和 9，以及 NAME `10k`，它会生成：

```spice
R3 7 9 10k
```

底层模型模板属性为 **`$$SPICE`**；前导文本为 **`$$SPICE_PROLOG`**。模板可以重新排列引脚：不要假定原理图引脚 1 就是 SPICE 的第一个端子。BJT 元件要求的顺序是 **集电极、基极、发射极**。如果符号将基极编号为 1、发射极编号为 2、集电极编号为 3，则模板必须按此顺序替换为 `%(3) %(1) %(2)`。子电路使用其 `.subckt` 行中声明的顺序，该顺序可能与器件封装不同。

请结合实际符号和模型进行检查。电源引脚、隐藏引脚、晶体管变体和运放模型都是常见的不匹配来源。通用的 741 风格行为模型并不是完整的、经过制造商认证的 741 宏模型。

## 在集成仿真中使用模型
{: #use-a-model-in-integrated-simulation}

1. 从[捆绑的仿真库](../Bundled-Libraries/#libraries-with-simulation-models)中选择带模型的符号开始，或向自定义符号添加合适的 SPICE 模板。
2. 确认每个模板引用的属性均已存在，并且引脚正确。
3. 在 Simulation 图纸上附加所需的模型**文本**，并为附件指定有意义的文件名。常见文本文件扩展名包括 `.lib`、`.cir` 和 `.mod`。
4. 通过这些附件解析 `.include` 和 `.lib` 依赖项。将所需定义与图纸一同保存。
5. 连接地 **0**，在 **Setup** 中设置分析，然后运行并检查诊断信息。

受管理的引擎不会从网站获取模型，也不会读取计算机上的任意绝对路径。请显式提供依赖项。它也不会执行任意 shell 命令、`.control` 脚本、启动文件、外部提供的原生模块或基于文件的器件依赖项。使用特定仿真器语法的厂商模型可能需要调整；“兼容 SPICE”并不意味着不同方言完全相同。

TinyCAD 的集成 Simulation 图纸负责分析命令和最终的 `.end`。**不需要旧式 RUN 符号。** 将旧的分析设置移至 Setup，并在调整面向导出的图纸时删除旧式 RUN 符号。从仍在使用的元件属性中移除分析语句和 `.end`；集成元件模板流程会拒绝这些命令。

重新分发厂商模型前，请检查其许可证。查看文档中说明的引脚顺序、单位、模型假设和支持的仿真器。将制造商文档与建模笔记一同保存。

## 检查并导出 SPICE 网表
{: #inspect-and-export-a-spice-netlist}

网表是对器件及其连接节点的文本描述。地的名称为 `0`。典型内容包括模型/设置定义、元件行、分析指令以及结尾的 `.end`。可检查以下内容：

- 每个元件是否引用了预期的模型和值？
- 已连接的引脚是否共享预期的网络名称？
- 电源/回流网络是否存在，包括 0？
- 半导体或子电路的端子顺序是否正确？
- 所有模型定义和包含的文本是否都可供所选引擎使用？

对于集成设置，请打开 **Simulation sheet → Diagnostics → Generate circuit text**，检查展开后的电路描述，然后选择 **Export circuit** 以保存 `simulation.cir`。这会包含受管理的分析设置。

对于旧式基于模板的导出，请使用浏览器 File 菜单或 Desktop Tools 菜单中的独立 **Generate Spice NetList** 命令。它与面向 PCB 的 [Generate Netlist](../Generate-Netlist/) 对话框相互独立。导出的分析/运行指令必须适用于外部引擎。也可以直接检查配套教程中的 `.cir` 文件。**请在 TinyCAD 中打开 `.dzn` 图纸；`.cir` 网表不是 TinyCAD 图纸文件。**

### 旧式导出模板
{: #legacy-export-templates}

面向导出的模板系统支持按实例设置模型主体，并按符号设置前导文本和尾随文本。相同的前导文本/尾随文本会去重。优先级范围为 0 到 9：前导文本按优先级从低到高执行；尾随文本按优先级排列，其中优先级 0 最后执行。

较旧的图纸可能会使用无引脚的 **RUN** 符号，其前导文本/尾随文本用于为导出的电路描述提供分析和结束指令。这是导出惯例，并不表示要在集成 Simulation 图纸中添加 RUN。请先检查这些语句，再在单独的仿真器中运行导出的文件。

### 条件模板
{: #conditional-templates}

对于面向导出/自定义的模板，支持的条件形式包括：

```text
?( defined(attribute), true text, false text )
?( not_defined(attribute), true text, false text )
?( empty(attribute), true text, false text )
?( not_empty(attribute), true text, false text )
?( connected(pin), true text, false text )
?( not_connected(pin), true text, false text )
```

条件可以嵌套。请检查展开后的电路描述，而不要仅根据源文本判断复杂模板。

## 数值表示法和可移植性
{: #numerical-notation-and-portability}

在 SPICE 文本中，**`M` 表示毫**，与 `m` 相同；兆应使用 **`Meg`**。`1k`、`100n` 和 `10u` 是常见数值。请使用明确的模型参数和参考值，不要依赖仿真器未指定的默认值。

外部 ngspice 命令行文档涵盖的环境范围比 TinyCAD 的集成引擎更广。有关完整的元件语法、模型、分析和兼容性说明，请参阅官方 [ngspice 文档](https://ngspice.sourceforge.io/docs.html) 和[用户手册](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf)。接下来阅读[ TinyCAD 如何实现 SPICE](../SPICE-Tutorial-11/)]，了解关于引擎、符号和网表的详细说明。
