---
layout: default
---
# 自定义符号库
{: #custom-symbol-libraries}

本页介绍库级别的任务：将库添加到 TinyCAD、打开库进行编辑、创建新的库文件，以及执行简单的符号管理操作，例如添加、复制、重命名和删除。

有关浏览库并将符号放置到图纸中，请参阅[使用符号库
](../Using-Symbol-Libraries/)。有关绘制或更改符号本身（包括引脚和符号属性），请参阅[编辑符号
](../Editing-a-Symbol/)。

库文件使用 `.tclib` 扩展名，可以存储在计算机上，也可以通过 Google 集成存储在 Google Drive 上。桌面版 TinyCAD 与浏览器版之间的库文件可以相互兼容。

你也可以加载由 TinyCAD 旧版 v3 编写的库。

<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### 浏览器
{: #browser}

#### 从本地文件打开现有库
{: #open-an-existing-library-from-a-local-file}

1. 打开另一个 TinyCAD 网页标签页/窗口。
2. 使用  **打开 (Open)**  打开一个 `.tclib` 库文件。
3. 在使用库期间保持该标签页处于打开状态。

打开库后，你可以在该窗口中浏览符号，或将符号拖到图纸中；也可以编辑库中的符号定义。

#### 让 Google Drive 库可用
{: #make-a-google-drive-library-available}

如果你已经使用桌面版 TinyCAD 创建了库，请授予 TinyCAD 网页版访问每个库的权限：

1. 在 Google Drive 中，右键单击 `.tclib` 文件。
2. 选择  **使用以下方式打开 (Open with) -> TinyCAD** 。

<img src="/v4/images/media2/image1.png" alt="Google Drive context menu showing Open with TinyCAD for a library file" style="width: 6.26806in; height: 4.54514in;" />

对你希望能够使用的 **每个** 库重复此操作。

此操作会打开库以供编辑。如果你只需要访问权限，可以随后
关闭该标签页/窗口。

 **注意：** Google Drive 有时可能区分大小写。如果 `TinyCAD`
未显示在 **打开方式** （Open with）中，请确保 `.tclib` 为小写。

返回绘图会话：

1. 打开 **我的库** （My Libraries）。
2. 点击 **我的库** （My Libraries）旁边的 **刷新** （Refresh）。

<img src="/v4/images/media2/image2.png" alt="My Libraries panel with the Refresh button used to reload available libraries" />

刷新后，库会显示在列表中：

<img src="/v4/images/media2/image4.png" alt="My Libraries panel listing available custom symbol libraries"  />

展开库即可浏览其中的内容：

<img src="/v4/images/media2/image3.png" alt="Library browser showing symbol search results and a preview button"  />

#### 创建新库
{: #creating-a-new-library}

使用菜单项 **新建自定义库** （New Custom Library）：

<img src="/v4/images/media2/image5.png" alt="Menu with the New Custom Library command"/>

#### 编辑库
{: #edit-a-library}

点击库上的 **编辑** （Edit）按钮，即可在 TinyCAD Web 中打开并编辑现有库。

### 桌面应用
{: #desktop-app}

#### 添加或移除库
{: #add-or-remove-libraries}

在使用库中的任何符号之前，必须先将该库添加到
 **我的库** 下的库列表中。

![“我的库”侧边栏](/v4/images/media/image9.png)

要将库添加到此列表，请点击  **添加** 。此时会
出现文件选择对话框。请选择扩展名为 `.tclib` 的库文件。

要从列表中移除库，请点击该库上的编辑图标以打开
库对话框，然后点击  **移除** 。这不会删除文件；它
只会将该库从列表中移除。

#### 编辑库
{: #edit-a-library-1}

使用库编辑对话框选择该库，然后点击  **编辑** 。此时会打开一个新
窗口，其中显示该库的缩略图。

![显示符号缩略图的库编辑器](/v4/images/media/image10.png)

使用库编辑窗口可以：

- 查看库中符号的缩略图
- 向库中添加新符号
- 删除、复制和重命名库中的符号
- 编辑符号的图形、引脚、名称和属性
- 将符号从一个库移动到另一个库

点击符号即可选中它。选中后，可以在主窗口中编辑该符号，
也可以使用控件复制或删除它。

完成库的编辑后，使用常规的  **保存** 
或  **另存为**  命令保存。

对于符号级编辑工作流程，请参阅 [编辑符号](../Editing-a-Symbol/).

#### 创建新的符号库
{: #creating-a-new-symbol-library}

使用库面板上的  **新建**  按钮。将打开一个新的窗口，其中包含一个
空库。

</div>

- 返回 [符号与库](../Symbols-and-Libraries/)
- 返回 [v4 目录](../CONTENTS/)
