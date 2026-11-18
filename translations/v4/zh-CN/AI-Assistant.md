---
layout: default
---
# AI 助手
{: #ai-assistant}

TinyCAD 的 AI 助手可以将书面指令、数据手册和电路图像转换为可编辑的符号和图纸。它与常规编辑器协同工作：你可以让它创建电路、向当前打开的图纸添加元件、构建符号库，或解释现有连接。

**仅限桌面版：** AI 助手（聊天机器人）仅可在 TinyCAD Desktop App 中使用。浏览器版本不提供此功能。

在 Desktop App 的工具栏上打开 **Chat** 即可使用。发送第一条消息前，请先连接 AI 提供商；下文将介绍连接选项。

## 可执行的任务
{: #what-it-can-do}

| 任务 | 助手如何提供帮助 |
| --- | --- |
| **创建元件符号** | 根据指定的元件和封装生成可编辑的图形、物理引脚编号、引脚名称和电气类型。如果引脚排列很重要，请附上制造商的数据手册。 |
| **创建或扩展符号库** | 向正在编辑的 `.tclib` 库中添加多个可重复使用的元件，包括名称、说明和引脚映射。较大的集合可以分批连续构建。 |
| **绘制电路** | 查找合适的符号、放置元件、设置数值和位号、用导线和标签连接引脚，并添加说明性注释。 |
| **扩展现有图纸** | 添加连接器、去耦电容、传感器、驱动器或其他功能模块，同时保留图纸的其余部分。 |
| **解释或检查电路** | 读取当前图纸和网表，说明信号路径，识别网络上的引脚，并检查连通性或设计规则错误。 |
| **根据文档重建图纸** | 读取附加的 PDF 或电路图像，并创建可编辑的初稿；遇到不清楚的元件或连接时会询问你。 |
| **整理布局** | 使用 TinyCAD 的布局和连接检查功能，重新排列整张图纸或指定部分。 |
| **导出结果** | 仅当你明确要求生成文件时，才生成可下载的图纸或符号库。 |

生成的结果是 TinyCAD 对象，你可以选择、编辑、连线并保存。在图纸中，新建的符号会放置在图纸上，等待连接。在库中，新元件会成为该库中的条目。你无需从对话中复制 XML，也不必配置单独的 MCP 服务器。

助手会先在[捆绑库](../Bundled-Libraries/)中查找，必要时再搜索 TinyCAD.net 的公共集合。它可以搜索库选择器中当前未选中的捆绑集合。公共符号搜索需要互联网连接，即使你使用的是本地 AI 模型也不例外。

如需重复使用元件，请先[创建或打开一个自定义库进行编辑](../Custom-symbol-libraries/)，然后在该库窗口中打开 Chat。如需绘制电路，请保持目标图纸窗口处于活动状态。请告诉助手你指的是哪个工作表、元件位号或功能模块。目前，AI 符号检索和放置支持**单单元符号**；对于助手无法导入的多单元元件，请使用常规符号编辑器。

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="在 TinyCAD Desktop 中根据数据手册创建符号。AI 处理等待过程以 12 倍速显示，并在屏幕上标注；交互和结果则以正常速度显示。" %}

## 设置连接
{: #set-up-a-connection}

### 1. 选择提供商
{: #choose-a-provider}

1. 在工具栏上打开 **Chat**。
2. 点击 **Click here to Sign in to use AI**，或点击面板标题栏中的 **AI settings** 齿轮图标。
3. 在 **Step 1 — Choose provider** 中选择提供商，然后点击 **Next**。

![显示 Provider 步骤的 AI 设置](../images/ai-assistant/setup-provider.png)

一次只能连接一个提供商。

| TinyCAD 中的提供商 | 所需条件 |
| --- | --- |
| **ChatGPT** | 使用 **Sign In with ChatGPT** 登录符合条件的付费 ChatGPT 账户，或者使用 **Use API Key** 输入 OpenAI API 密钥。账户登录仅在 Desktop App 中提供。 |
| **Anthropic Claude** | 从 [Claude Console](https://platform.claude.com/settings/keys) 获取 API 密钥，并确保你使用的模型已开通 API 访问权限和计费。 |
| **Google Gemini** | 从 [Google AI Studio](https://aistudio.google.com/apikey) 获取 API 密钥。部分模型有免费 API 使用额度；具体可用情况和配额均有限制。 |
| **OpenAI compatible** | 该服务的 API 密钥、API 基础 URL，以及支持工具调用的模型。 |
| **Ollama (hosted locally)** | 正在运行的本地 Ollama 服务器，以及已安装且支持工具调用的模型。本地模型无需 API 密钥。 |

订阅提供商的常规聊天网站服务，并不会自动提供 API 计费或 API 密钥。ChatGPT 明确提供的账户登录是另一种独立的连接方式。对于 Gemini，向导使用 API 密钥；登录 TinyCAD 的 Google Drive 存储服务并不会连接其 AI 助手。

### 2. 连接账户或 API 密钥
{: #connect-an-account-or-api-key}

#### 使用 ChatGPT 账户
{: #use-a-chatgpt-account}

在 TinyCAD Desktop 中选择 **ChatGPT**，然后在步骤 2 中选择 **Sign In with ChatGPT**。

1. 点击 **Sign in with ChatGPT**。在外部浏览器中完成登录。
2. 在出现提示时，批准使用你的 ChatGPT 方案。仅登录但未启用方案使用权限，不足以发送 AI 请求。
3. 返回 TinyCAD；向导进入步骤 3 后，选择一个模型。

如果系统记住了一个账户，界面会提供 **Continue as …** 或 **Sign in with a different account**。TinyCAD 一次只保留一个账户。连接后，消息框上方会显示 **Using ChatGPT plan** 和 **Manage usage**。首次使用时会显示提示，说明请求将使用你的方案额度或可用点数。

![提供 Sign In with ChatGPT 或 Use API Key 选项的 Desktop AI 设置](../images/ai-assistant/setup-chatgpt-desktop.png)

ChatGPT 登录需要符合条件的付费账户；账户、工作区和应用的限制仍然适用。如果请求被拒绝，系统不会悄悄切换到 API 密钥计费。有关账户方案连接方式，请参阅 OpenAI 的 [Sign in with ChatGPT 文档](https://developers.openai.com/siwc/token-sharing-open-source)。

#### 使用 API 密钥
{: #use-an-api-key}

1. 使用步骤 2 中显示的提供商链接创建密钥。请确认项目或账户有权访问你打算使用的模型。
2. 对于 **ChatGPT**，请选择 **Use API Key**。其他托管提供商会直接显示密钥输入页面。
3. 将密钥粘贴到 **API key** 中。密钥默认隐藏；如有需要，输入时点击 **Show API key** 即可显示。
4. 对于 **OpenAI compatible**，还需输入该服务的 **API base URL**。
5. 点击 **Next**。TinyCAD 会检查连接并自动检索可用模型。

![ChatGPT API 密钥输入界面，含隐藏密钥字段和提供商说明](../images/ai-assistant/setup-api-key.png)

如果端点无法列出模型，TinyCAD 会在步骤 2 中要求输入 **Model ID**。输入提供商的准确标识符，然后再次点击 **Next**；系统会通过简短问候语进行检查。这些检查可能会占用提供商的配额。连接失败时，界面会停留在步骤 2 并显示错误。

对于 Gemini，请在 Google AI Studio 中创建或选择项目，并将其 API 密钥复制到 TinyCAD。Google 的 [Gemini API 定价页面](https://ai.google.dev/gemini-api/docs/pricing) 说明了哪些模型和使用情况符合免费层级的条件。付费模型或较高用量可能需要启用计费。

![Google Gemini 设置界面，含 Google AI Studio 密钥链接](../images/ai-assistant/setup-gemini.png)

### 3. 选择模型和思考级别
{: #pick-a-model-and-thinking-level}

连接成功后，在 **Step 3 — Pick Model** 中选择模型，调整 **Thinking**，然后点击 **Finish**。

![最终设置步骤中的模型选择和 Thinking 滑块](../images/ai-assistant/setup-model.png)

此插图中的模型列表仅为示例；你的列表取决于提供商、端点和账户。ChatGPT 会显示连接返回的、受支持的 Sol、Luna 和 Astra 模型。最新版本显示在最前面，较旧的选项位于 **More models** 下，并会记住最近使用的最多六个选项。

选择支持**工具**的模型，使其能够检查和编辑 TinyCAD 文档。若要解读电路图像或包含示意图的数据手册，请选择同时支持**视觉**的模型。通用文本聊天端点并不足以完成所有任务。

**Thinking** 的范围从 **Minimal** 到 **Max**，默认从 **Medium** 开始。可用级别取决于提供商。较高的设置可能需要更长时间并消耗更多额度；Max 表示该提供商支持的最高设置。你可以在不同回复之间使用消息框旁的模型图标更改模型和思考级别。

### 替代方案：使用本地 Ollama
{: #alternative-use-local-ollama}

1. [安装 Ollama](https://ollama.com/download) 并启动其服务器。
2. 下载支持[工具调用](https://docs.ollama.com/capabilities/tool-calling)的模型，并将 `ollama pull MODEL_NAME` 替换为模型的实际名称。对于图像/PDF 任务，还要检查其视觉支持和上下文容量。
3. 在 TinyCAD 的提供商步骤中选择 **Ollama (hosted locally)**。
4. 使用 **Ollama API URL**，通常为 `http://localhost:11434/v1`，然后点击 **Next** 列出已安装的模型。
5. 选择模型和思考级别，然后点击 **Finish**。

![Ollama 设置界面，显示本地 API URL 和浏览器来源说明](../images/ai-assistant/setup-ollama.png)

Ollama 连接接受 localhost/loopback URL。对于远程服务器，请改选 **OpenAI compatible**。请为本地模型提供足够的上下文，以处理对话和 TinyCAD 工具；参阅 [Ollama 的上下文配置](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size)。

发送到本地 Ollama 的请求会直接传送到本地服务器。若要在本地进行推理，请选择在本地运行的模型：通过 Ollama 服务器配置的云模型仍可能使用云服务。

## 绘图时使用助手
{: #use-the-assistant-while-drawing}

在消息框中输入请求，然后点击 **Send**，或按 **Enter**。使用 **Shift+Enter** 换行。先从范围明确的任务开始，检查结果后再提出下一项更改。

![已连接的聊天面板，其中准备发送一条示例请求](../images/ai-assistant/chat-ready.png)

请明确指定目标工作表、位号、数值和连接方式。“将 R2 的顶部连接到 Control 工作表上的 OUT”比“修好这条线”更容易核查。扩展现有电路时，请说明哪些内容应保持不变。

助手可以检查编辑器中尚未保存的内容。检查其工作后，请像往常一样保存图纸或库。图纸会嵌入其中的符号；如果要在其他项目中再次使用符号定义，请将其保存在自定义库中。

**Working** 会将工具活动和中间更新归入可折叠的行中。展开该行可查看进度详情、工具结果以及模型检查过的图像。最终答复会单独显示。在连接支持的情况下，助手可以显示由提供商提供的思考摘要；这项功能并不能显示所有内部推理步骤。

使用 **Stop** 取消当前请求。已应用的更改仍会保留在文档中。**Undo** 和 **Redo** 对 AI 编辑的操作方式与常规编辑相同；一个多步骤请求可能产生多项可撤销的更改。如果助手工作期间你编辑了图纸，后续写入可能会因源内容过时而被拒绝。请让助手重新读取图纸并继续。

标题栏中的 **New chat** 图标会清除对话、草稿和附件，但不会撤销对图纸所做的更改。切换模型会保留对话；连接其他提供商或密钥则会开始新聊天。

### 附加数据手册和电路图像
{: #attach-datasheets-and-circuit-images}

使用消息控件旁的 **Import PDF/image** 附加 PDF、PNG、JPEG 或 WebP 文件。最多可附加 **六个文件，总大小为 10 MiB**；提供商的限制也同样适用。请指出确切的元件型号、封装和相关 PDF 页码，并说明引脚图是俯视图还是仰视图。

对于兼容端点和 Ollama，**PDF pages** 可以选择在本地渲染的页面，例如 `1-4,12`；留空则会处理所有页面，但受 20 页转换上限限制。如果转换后的图像超过 10 MiB，请减少页数。ChatGPT/OpenAI、Claude 和 Gemini 会直接接收 PDF。图表识读能力仍取决于所选模型。

TinyCAD 公共符号库搜索独立于常规网页浏览功能。符合条件的 **Sign in with ChatGPT** 连接，在模型/账户策略允许时可使用原生网页研究功能；回复中会以链接形式显示引用。通过 API 密钥连接的方式和其他提供商目前无法通过 TinyCAD 使用常规网页搜索。如果助手无法打开制造商网站，请附上数据手册或相关图像。

## 示例提示词
{: #example-prompts}

请将以下内容作为起点。根据你的项目替换元件、封装、引脚编号和电源要求。

### 根据数据手册创建符号
{: #create-a-symbol-from-a-datasheet}

打开目标图纸并附上数据手册：

> 根据这份数据手册，为 PDIP 封装的 8 引脚 NE555P 创建一个紧凑符号。核实每个物理引脚的编号、名称和电气类型。先搜索现有符号。将电源引脚放在顶部，接地引脚放在底部，验证该符号，然后将其放入此图纸，准备好连线。指出所有无法核实的信息。

如需创建物理模块而非常规 IC 轮廓：

> 根据所附的此传感器板确切版本的引脚图，创建一个可编辑符号，显示 PCB 轮廓和按物理顺序标注的排针触点。使其紧凑到足以用于 A4 接线图。在排针焊盘上放置连接点，并用一个小型温度图标标明其功能。

### 构建可重复使用的库
{: #build-a-reusable-library}

首先创建或打开一个自定义 `.tclib` 进行编辑：

> 添加一个包含单单元接口元件的小型库：DIP-4 封装的 PC817、DIP-16 封装的 ULN2003A，以及一个 4 位 2.54 mm 接线端子连接器。使用所附数据手册确定 IC 引脚映射。为每个元件提供清晰的名称、说明和位号前缀，验证元件，并将其添加到当前打开的库中。保留我当前正在编辑的符号。

检查第一批后，再继续添加下一批。像往常一样保存 `.tclib`，或者明确要求生成可下载的库文件（如果这是你需要的结果）。

### 创建完整电路
{: #create-a-complete-circuit}

> 在当前工作表上，使用 PDIP-8 元件绘制一个 5 V NE555 无稳态振荡器。目标频率约为 1 Hz。包含定时电阻和电容、复位连接、控制引脚电容、电源去耦，以及带限流电阻的输出 LED。说明计算出的定时参数，检查物理引脚连接，并整理布局。列出假设和任何尚未解决的设计规则问题。

这会要求助手提供可编辑设计和计算结果。如需确认仿真行为，请自行检查模型并使用 [Simulation](../Simulation/)；AI 给出的肯定解释并不代表已记录的仿真运行结果。

### 添加元件而不重画电路
{: #add-parts-without-redrawing-the-circuit}

> 在 U1 的电源和地之间添加一个 100 nF 去耦电容，并放在 U1 附近。连线前先确认实际电源引脚。保持电路其余部分、位号和数值不变，然后检查受影响的网络。

> 在 Sensors 工作表上添加一个标有 +3V3、GND、SDA 和 SCL 的 4 引脚连接器。将 SDA 和 SCL 连接到现有的带标签网络。如果已有上拉电阻，请使用现有电阻；添加任何上拉电阻之前，先告诉我是否需要额外的上拉电阻。

### 根据附加图重建电路
{: #reconstruct-an-attached-diagram}

> 将所附 PDF 第 3 页上的电路重建为新工作表上的可编辑 TinyCAD 元件和导线。保留图中显示的数值和标签。对于无法辨认的数值或含义不明确的导线交叉，请先询问，不要猜测。将重建的网络与图像进行比较，并整理完成后的工作表。

### 解释、检查或改进现有图纸
{: #explain-inspect-or-improve-an-existing-drawing}

> 说明从 J1 到 U2 的信号路径，并列出连接到 OUT 的元件和物理引脚。不要更改图纸。

> 检查当前图纸是否存在未连接的必需引脚、互相冲突的输出以及不一致的电源标签。逐项报告工作表和位号，并在应用更改前提出建议。

> 仅整理 U3 和 J4 周围的电机驱动器模块。保持其连接和数值不变，并保留电源输入模块的原位置。

## 设置、隐私与保存
{: #settings-privacy-and-saving}

**AI settings** 齿轮会显示当前提供商和连接方式，并提供模型/思考控制项和 **Save**。对于密钥连接，它提供 **Clear API key**；对于 ChatGPT 账户，它提供 **Sign out**；对于本地 Ollama，它提供 **Disconnect Ollama**。若要设置其他提供商，请先断开当前连接。**Cancel** 会保留现有连接和已保存的设置。

![现有 API 密钥连接的 AI 设置](../images/ai-assistant/connection-settings.png)

API 密钥和对话历史保存在应用程序内存中；密钥不会与首选项或图纸一起保存。重新加载/重启后，你需要重新输入 API 密钥。非机密的提供商、端点、模型和思考首选项可以被记住。ChatGPT 账户授权由本地运行时单独管理，重启后可能仍然有效；在可用时，Desktop 会使用操作系统的安全加密。

对于托管式 AI，消息、附件以及其工具请求的文档内容或预览会发送到所选提供商。使用 API 密钥连接托管服务时，请求会直接发送到所选端点；TinyCAD 不提供提供商中继。兼容服务必须允许浏览器访问（CORS），且通常需要使用 HTTPS；localhost 是例外。如需完全本地化的工作流程，请使用本地 Ollama 模型和提供的本地参考文档，并避免在线符号搜索或云模型。

生成的元件和电路仍需经过工程审核。请根据实际数据手册核对确切的封装引脚排列、功率额定值、电源电压、逻辑电平和工作限制。TinyCAD 的结构验证、设计规则检查和布局连接检查有助于发现错误，但不能证明电路能够正常工作，不能替代仿真，也不能证明硬件已经过测试。

## 故障排除
{: #troubleshooting}

| 症状 | 检查内容 |
| --- | --- |
| **Chat 不可用或未显示** | 使用当前版本的 TinyCAD v4。打开目标图纸或库，并在其工具栏上查找 Chat。 |
| **无法使用 ChatGPT 账户登录** | 使用 Desktop，或使用具有账户运行时的本地托管版本。在公共托管应用中，请选择 Use API Key。允许打开外部登录窗口，并在授权时启用 ChatGPT 方案使用权限。 |
| **步骤 2 无法继续** | 查看连接错误信息。检查密钥、模型访问权限、API 计费/配额、端点 URL 和互联网连接。TinyCAD 会在点击 Next 时执行此项检查。 |
| **没有显示模型** | 检查提供商访问权限。对于不支持模型发现的端点，请输入要求的 Model ID。连接 Ollama 前，请先安装支持工具调用的模型。 |
| **本地 Ollama 无法连接** | 启动服务器，检查本地 API URL，通过 OLLAMA_ORIGINS 允许 TinyCAD 的确切来源，然后重启 Ollama；如果系统提示，请允许浏览器访问本地网络。 |
| **助手能回复，但无法编辑或读取图像** | 检查模型是否支持工具/视觉功能。附上清晰可读的裁剪图像或减少 PDF 页数。 |
| **工具报告图纸已更改** | 让助手重新读取当前状态后再试。先前已应用的更改仍可通过 Undo 撤销。 |
| **回复因提供商限制而中断** | 尝试缩小任务范围或降低思考级别。TinyCAD 可以自动重试未完成的回复；重试可能会额外消耗额度。已完成的编辑仍可撤销。 |

继续阅读[自定义符号库](../Custom-symbol-libraries/)、[编辑符号](../Editing-a-Symbol/)、[布局整理](../Layout-Tidy-Up/)或[仿真](../Simulation/)。
