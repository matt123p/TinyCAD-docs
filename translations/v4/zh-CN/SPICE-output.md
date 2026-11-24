---
layout: default
---
# SPICE 模型与网表输出
{: #spice-models-and-netlist-output}

TinyCAD 支持 [集成式 ngspice 仿真](../Simulation/) 和导出 SPICE 网表供外部仿真器使用。两者都依赖元件的 SPICE 模板和引脚映射。符号的外观本身并不能描述其电气行为。

若要选择 TinyCAD 中已包含的模型，请从 [捆绑的 SPICE 模型](../Bundled-SPICE-Models/) 开始。

## 模型、模板与引脚顺序
{: #models-templates-and-pin-order}

电阻可以使用原生 SPICE 元件。晶体管可能需要一个 `.model`；更复杂的器件可以使用 `.subckt`。已放置符号的 SPICE 设置会将其物理引脚编号连接到模型所需的端子。检查符号属性中的 **SPICE** 选项卡；实例属性可以覆盖符号默认值。

模板使用：

- **`%(pin)`** 表示指定 TinyCAD 引脚编号所连接的网络。
- **`$(attribute)`** 表示元件属性。
- **`refnum`** 表示一种经过特殊处理的参考标号后缀，以保留模板的 SPICE 器件前缀。

例如，电阻模板可以是：

```text
R$(refnum) %(1) %(2) $(Value)
```

对于参考标号 R3、网络 7 和 9，以及值 `10k`，它会生成：

```spice
R3 7 9 10k
```

底层模型模板属性为 **`$$SPICE`**；前导文本为 **`$$SPICE_PROLOG`**。模板可以重新排列引脚：不要假设原理图引脚 1 就是 SPICE 的第一个端子。BJT 元件要求端子顺序为 **集电极、基极、发射极**。如果符号将基极编号为 1、发射极编号为 2、集电极编号为 3，则模板必须按该顺序替换为 `%(3) %(1) %(2)`。子电路使用其 `.subckt` 行中声明的顺序，这可能与器件封装的引脚顺序不同。

请结合实际符号和模型进行检查。电源引脚、隐藏引脚、晶体管变体和运算放大器模型都是常见的不匹配来源。通用的 741 风格行为模型并不是完整且经制造商认证的 741 宏模型。

## 在集成仿真中使用模型
{: #use-a-model-in-integrated-simulation}

1. 从一个[捆绑模型](../Bundled-SPICE-Models/) 开始，或为符号添加适当的 Custom 模板。确认引脚映射与模型的端子顺序相符。
2. TinyCAD 会自动解析已链接的捆绑模型。如果 Custom 模型需要外部文本，请使用 **Setup → SPICE models** 将其附加，并采用 `part.lib`、`part.cir` 或 `part.mod` 这类逻辑文件名。
3. 通过这些附件解析 `.include` 和 `.lib` 依赖项。保存图纸，以便将所需定义与图纸一同保留。
4. 连接地 **0**，在 **Setup** 中设置分析，然后运行并检查诊断信息。

托管引擎不会从网站获取模型，也不会读取计算机上的任意绝对路径。请显式提供依赖项。它也不会执行任意 shell 命令、`.control` 脚本、启动文件、外部提供的原生模块或基于文件的器件依赖项。使用仿真器专用语法的厂商模型可能需要调整；“兼容 SPICE”并不保证方言完全相同。

TinyCAD 的集成式 Simulation sheet 负责分析命令和最终的 `.end`。**不需要旧版 RUN 符号。** 将旧分析设置移至 Setup；改造面向导出的图纸时，删除旧版 RUN 符号。从剩余的元件属性中移除分析语句和 `.end`；集成式元件模板路径不接受这些命令。

重新分发厂商模型前，请检查其许可证。检查其文档中说明的引脚顺序、单位、模型假设和支持的仿真器。将制造商文档与建模笔记一同保存。

## 检查并导出 SPICE 网表
{: #inspect-and-export-a-spice-netlist}

网表是对器件及其连接节点的文本描述。地的名称为 `0`。典型内容包括模型/设置定义、元件行、分析指令以及最终的 `.end`。可进行以下检查：

- 每个元件是否引用了预期的模型和值？
- 相连的引脚是否具有预期的相同网络名称？
- 电源/回路网络是否存在，包括 0？
- 半导体或子电路的端子顺序是否正确？
- 所选引擎所需的所有模型定义和包含文本是否可用？

对于集成式设置，请打开 **Simulation sheet → Diagnostics → Generate circuit text**，检查展开后的电路文本，然后选择 **Export circuit** 以保存 `simulation.cir`。此操作会包含托管分析，并可能通过 `.include` 引用单独的模型文件。外部仿真器需要在指定位置放置这些文件的副本。

对于旧版基于模板的导出，请使用浏览器 File 菜单或 Desktop Tools 菜单中的独立 **Generate Spice NetList** 命令。它与面向 PCB 的 [Generate Netlist](../Generate-Netlist/) 对话框不同。此命令会嵌入所引用的捆绑定义。请提供 Custom 模板使用的任何外部依赖项，并检查分析和运行指令是否适用于外部引擎。也可以直接检查配套教程 `.cir` 文件。**在 TinyCAD 中打开 `.dzn` 图纸；`.cir` 网表不是 TinyCAD 图纸文件。**

### 旧版导出模板
{: #legacy-export-templates}

面向导出的模板系统支持按实例设置模型主体，以及按符号设置前导文本和尾随文本。相同的前导文本/尾随文本会去重。优先级范围为 0 到 9：前导文本按优先级从低到高执行；尾随文本按优先级排列，其中优先级 0 最后执行。

较旧的图纸可能使用无引脚的 **RUN** 符号，其前导文本/尾随文本会为导出的电路文本提供分析和结束指令。这是一种导出约定，并不表示要在集成式 Simulation sheet 中添加 RUN。请检查这些语句，再在单独的仿真器中运行导出的文件。

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

条件可以嵌套。请检查展开后的电路文本，而不要只根据源文本判断复杂模板。

## 数值表示法与可移植性
{: #numerical-notation-and-portability}

在 SPICE 文本中，**`M` 表示毫**，与 `m` 相同；兆请使用 **`Meg`**。`1k`、`100n` 和 `10u` 是常见值。请使用明确的模型参数和引用，而不要依赖仿真器未明确规定的默认值。

外部 ngspice 命令行文档涵盖的环境范围比 TinyCAD 的集成引擎更广。有关完整的元件语法、模型、分析和兼容性说明，请参阅官方的 [ngspice 文档](https://ngspice.sourceforge.io/docs.html) 和[用户手册](https://ngspice.sourceforge.io/docs/ngspice-manual.pdf)。继续阅读[ TinyCAD 如何实现 SPICE](../SPICE-Tutorial-11/)，了解引擎、符号和网表的详细说明。
