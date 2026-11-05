---
layout: default
---
# 使用符号库
{: #using-symbol-libraries}

## 什么是符号库？
{: #what-is-a-symbol-library}

在电路设计中，**符号库**是存储在单个文件中的原理图符号集合。每个符号都以具有定义电气连接点的标准化图形表示一个电子元件，例如电阻器、电容器、IC、连接器、晶体管或任何其他部件。

TinyCAD 符号库使用 `.tclib` 文件格式。单个库文件可以包含数十或数百个相关符号，通常按类别或用途分组。例如，您可以为无源元件、逻辑 IC 和连接器分别建立一个库。

## 符号库有什么用途？
{: #what-are-symbol-libraries-used-for}

符号库在原理图绘制中有几个重要用途：

- **在设计间重复使用。** 在库中定义符号后，就可以将其放置到任何原理图中，而无需重新创建。这既节省时间，也能确保各项目间的一致性。
- **标准化表示。** 库为每种元件规定了统一的视觉样式和引脚配置。每个 555 定时器或运算放大器实例的外观和引脚定义都相同，从而减少误解。
- **电气正确性。** 每个符号都包含引脚信息——引脚名称、编号和电气类型（输入、输出、电源、无源等）。这些数据用于生成网表、执行设计规则检查以及导出到 PCB 布局工具等后续流程。
- **组织管理。** 按功能、制造商或项目将符号分组到库中，便于查找合适的部件。TinyCAD 允许您仅加载当前设计所需的库。
- **共享与协作。** 库文件可以在团队成员之间共享，也可以从社区下载，这样所有人都能使用经过验证的相同符号定义。

## 内置库和自定义库
{: #built-in-and-custom-libraries}

TinyCAD 附带了一组涵盖常见元件系列的内置库。对于未包含的部件，您可以：

- 创建自己的[自定义符号库](../Custom-symbol-libraries/)
- [从 KiCAD](../Importing-Symbols-from-KiCAD/) 库导入符号
- 从 TinyCAD.net 网站下载其他库

## 典型工作流程
{: #typical-workflow}

实际使用符号库时，通常会遵循以下步骤：

1. 加载或添加要在当前 TinyCAD 会话中使用的库。
2. 浏览、搜索并预览这些库中的符号。
3. 将符号放置到图纸中。
4. 如果需要更改符号定义，请编辑库，而不是编辑已放置的实例。

本页介绍步骤 1 至 3。有关库文件管理，请参阅[自定义符号库](../Custom-symbol-libraries/)。有关更改符号定义本身，请参阅[编辑符号](../Editing-a-Symbol/)。

## 加载库
{: #loading-libraries}

放置符号之前，必须先让 TinyCAD 能够访问其所在的库。

- 内置库是 TinyCAD 的组成部分，可直接使用。
- 自定义库必须先添加或打开，才能浏览。
- TinyCAD Web 与桌面应用程序的具体操作步骤有所不同。

有关添加、打开、刷新、创建和编辑库文件的特定产品步骤，请参阅[自定义符号库](../Custom-symbol-libraries/)。

## 浏览、搜索和预览
{: #browsing-searching-and-previewing}

要使用库中的符号，必须先在 TinyCAD 会话中加载该库。加载后：

1. 打开符号选择器。
2. 展开库以浏览其内容，或使用搜索框按名称或描述查找符号。
3. 单击符号以预览。
4. 选择符号，使其成为当前放置工具，然后在图纸中单击以放置实例。

有关选中符号后的放置和配置方法，请参阅[符号](../Symbols/)。

## 调整库面板大小
{: #resizing-the-library-panel}

拖动库面板的右边缘可调整其宽度。加宽面板
有助于查看较长的符号名称和描述。如果本地存储可用，TinyCAD 会在此设备上记住面板宽度。

## 符号排序
{: #sorting-symbols}

在**我的库**中，使用库控件旁的排序按钮，在**库顺序**、**A 到 Z**和**Z 到 A**之间循环切换。按钮工具提示会显示当前模式。
排序会应用于库中的符号和搜索结果，包括在线结果；它不会重新排列您的库文件或文件夹。如果本地存储可用，TinyCAD 会在此设备上记住排序模式。

浏览器文件系统版本仅显示在线搜索，不提供**我的库**排序按钮。

## 在图纸中放置符号
{: #placing-symbols-in-a-drawing}

在库浏览器中选择符号后，它会成为当前放置工具。

有关实际放置流程，包括选中后符号的行为，请参阅[符号](../Symbols/)。

请记住，在图纸中放置符号**不会**编辑库定义。如果您需要更改图形、引脚或属性以供今后使用，请改为编辑其库中的符号。请参阅[编辑符号](../Editing-a-Symbol/)。

## 相关任务
{: #related-tasks}

- 使用[自定义符号库](../Custom-symbol-libraries/)添加、打开、创建和管理 `.tclib` 文件。
- 使用[编辑符号](../Editing-a-Symbol/)更改符号的图形、引脚和属性。
- 使用[符号](../Symbols/)查看选定符号后的放置详情。

## 页面
{: #pages}

{% assign current_version = page.url | split: '/' | slice: 1, 1 | first -%}
{% assign section = nil -%}
{% for entry in site.data.navigation[current_version] -%}
    {% if entry.url == page.url -%}
        {% assign section = entry -%}
        {% break -%}
    {% endif -%}
{% endfor -%}
{% if section and section.children %}
{% for child in section.children -%}
- [{{ child.title }}]({{ child.url | relative_url }})
{% endfor %}
{% endif %}

- 返回 [v4 内容目录](../CONTENTS/)
