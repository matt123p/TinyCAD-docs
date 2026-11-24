---
layout: default
---
# AI 助手
{: #ai-assistant}

TinyCAD 的 AI 助手可将书面指令、数据手册和电路图像转换为可编辑的符号和图纸。它与常规编辑器协同工作：你可以要求它创建电路、向当前打开的图纸添加元件、构建符号库，或解释现有连接。

**仅限桌面版：** AI 助手（聊天机器人）仅在 TinyCAD Desktop App 中提供。浏览器版不可用。

在 Desktop App 工具栏上打开 **Chat** 即可使用。发送第一条消息前，请先连接 AI 提供商；下文将介绍连接选项。

## 功能
{: #what-it-can-do}

| 任务 | 助手的帮助方式 |
| --- | --- |
| **创建元件符号** | 根据指定的元件和封装生成可编辑图形、物理引脚编号、引脚名称和电气类型。若引脚排列至关重要，请附上制造商的数据手册。 |
| **创建或扩展符号库** | 向当前打开以供编辑的 `.tclib` 库添加多个可复用元件，包括名称、说明和引脚映射。较大的元件集合可分批逐步构建。 |
| **绘制电路** | 查找合适的符号、放置元件、设置数值和参考标号、用导线和标签连接引脚，并添加说明性注释。 |
| **扩展现有图纸** | 添加连接器、去耦电容、传感器、驱动器或其他功能模块，同时保留图纸的其余部分。 |
| **解释或检查电路** | 读取当前图纸和网表，描述信号路径，识别网络上的引脚，并检查连接情况或设计规则错误。 |
| **根据文档重建图纸** | 读取附加的 PDF 或电路图像并创建可编辑的初稿；遇到不清楚的元件或连接时会询问。 |
| **整理布局** | 使用 TinyCAD 的布局和连接检查功能，重新排列整张图纸或指定区域。 |
| **导出结果** | 仅在你明确要求文件时，生成可下载的图纸或符号库。 |

生成的结果是 TinyCAD 对象，你可以选择、编辑、布线并保存。在图纸中，新建的符号会放置在适合连接的位置。在库中，新元件会成为该库中的条目。你无需从对话中复制 XML，也无需配置单独的 MCP 服务器。

助手会先搜索[内置库](../Bundled-Libraries/)，如果需要，再搜索 TinyCAD.net 公共资源集合。即使未在库选择器中选中，助手也可以搜索内置集合。搜索公共符号需要互联网连接，即使使用本地 AI 模型也是如此。

若要创建可复用元件，请先[创建或打开自定义库以供编辑](../Custom-symbol-libraries/)，然后在该库窗口中打开 Chat。若要绘制电路，请保持目标图纸窗口处于活动状态。告诉助手你指的是哪个图纸页、元件参考标号或功能模块。目前 AI 符号检索和放置支持**单单元符号**；对于助手无法导入的多单元元件，请使用常规符号编辑器。

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="在 TinyCAD Desktop 中根据数据手册创建符号。AI 处理等待时间会以 12 倍速显示并在屏幕上标注；交互和结果以正常速度显示。" %}

## 设置连接
{: #set-up-a-connection}

### 1. 选择提供商
{: #choose-a-provider}

1. 在工具栏上打开 **Chat**。
2. 点击 **Click here to Sign in to use AI**，或点击面板标题栏中的 **AI settings** 齿轮。
3. 在 **Step 1 — Choose provider** 中选择提供商，然后点击 **Next**。

![显示提供商步骤的 AI 设置](../images/ai-assistant/setup-provider.png)

一次只能连接一个提供商。

| TinyCAD 中的提供商 | 所需条件 |
| --- | --- |
| **ChatGPT** | 通过 **Sign In with ChatGPT** 使用符合条件的付费 ChatGPT 账户，或通过 **Use API Key** 使用 OpenAI API 密钥。账户登录仅在 Desktop App 中提供。 |
| **Anthropic Claude** | 从 [Claude Console](https://platform.claude.com/settings/keys) 获取 API 密钥，并为所用模型启用 API 访问和计费。 |
| **Google Gemini** | 从 [Google AI Studio](https://aistudio.google.com/apikey) 获取 API 密钥。某些模型提供有限的免费 API 额度；具体可用性和配额有所不同。 |
| **OpenAI 兼容** | 服务的 API 密钥、API 基础 URL，以及支持工具调用的模型。 |
| **Ollama（本地托管）** | 正在运行的本地 Ollama 服务器，以及已安装并支持工具调用的模型。本地模型不需要 API 密钥。 |

订阅提供商常规聊天网站的服务，并不会自动获得 API 计费或 API 密钥。ChatGPT 明确提供的账户登录是另一种连接方式。Gemini 设置向导使用 API 密钥；登录 TinyCAD 的 Google Drive 存储并不会连接其 AI 助手。

### 2. 连接账户或 API 密钥
{: #connect-an-account-or-api-key}

#### 使用 ChatGPT 账户
{: #use-a-chatgpt-account}

在 TinyCAD Desktop 中选择 **ChatGPT**，然后在第 2 步选择 **Sign In with ChatGPT**。

1. 点击 **Sign in with ChatGPT**。在外部浏览器中完成登录。
2. 按提示批准使用你的 ChatGPT 套餐。仅登录而未启用套餐使用权限，仍无法发送 AI 请求。
3. 返回 TinyCAD；向导进入第 3 步后，选择模型。

如果系统记住了某个账户，屏幕会显示 **Continue as …** 或 **Sign in with a different account**。TinyCAD 一次只保留一个账户。连接后，消息框上方会显示 **Using ChatGPT plan** 和 **Manage usage**。首次使用时会提示，请求将使用你的套餐额度或可用点数。

![提供 Sign In with ChatGPT 或 Use API Key 选项的桌面版 AI 设置](../images/ai-assistant/setup-chatgpt-desktop.png)

ChatGPT 登录需要符合条件的付费账户；账户、工作区和应用限制仍然适用。如果请求被拒绝，它不会悄悄切换为 API 密钥计费。有关账户套餐连接方式，请参阅 OpenAI 的[使用 ChatGPT 登录文档](https://developers.openai.com/siwc/token-sharing-open-source)。

#### 使用 API 密钥
{: #use-an-api-key}

1. 使用第 2 步显示的提供商链接创建密钥。确认项目或账户有权访问你计划使用的模型。
2. 对于 **ChatGPT**，选择 **Use API Key**。其他托管提供商会直接显示密钥输入页。
3. 将密钥粘贴到 **API key** 中。密钥默认隐藏；如有需要，可在输入时点击 **Show API key** 显示密钥。
4. 对于 **OpenAI compatible**，还需输入服务的 **API base URL**。
5. 点击 **Next**。TinyCAD 会检查连接并自动获取可用模型。

![ChatGPT API 密钥输入页，包含隐藏密钥的输入框和提供商说明](../images/ai-assistant/setup-api-key.png)

如果端点无法列出模型，TinyCAD 会在第 2 步要求输入 **Model ID**。输入提供商提供的准确标识符，然后再次点击 **Next**；系统会发送简短问候语以检查连接。这些检查可能会消耗提供商配额。连接失败时会停留在第 2 步并显示错误。

对于 Gemini，请在 Google AI Studio 中创建或选择项目，并将其 API 密钥复制到 TinyCAD。Google 的 [Gemini API 定价页面](https://ai.google.dev/gemini-api/docs/pricing) 说明了哪些模型和用量符合免费层级的条件。付费模型或更高用量可能需要启用计费。

![Google Gemini 设置，其中包含 Google AI Studio 密钥链接](../images/ai-assistant/setup-gemini.png)

### 3. 选择模型和思考级别
{: #pick-a-model-and-thinking-level}

成功连接后，在 **Step 3 — Pick Model** 中选择模型，调整 **Thinking**，然后点击 **Finish**。

![最终设置步骤中的模型选择和 Thinking 滑块](../images/ai-assistant/setup-model.png)

此示例中的模型列表仅供参考；你看到的列表取决于提供商、端点和账户。ChatGPT 会显示连接返回的受支持 Sol、Luna 和 Astra 模型。最新版本显示在前面，较旧的选项位于 **More models** 下，并会记住最多六个最近选择。

请选择支持**工具**的模型，以便它检查和编辑 TinyCAD 文档。若要解读包含图表的数据手册或电路图像，请选择同时支持**视觉**的模型。通用文本聊天端点无法胜任所有任务。

**Thinking** 的范围从 **Minimal** 到 **Max**，默认值为 **Medium**。可用级别取决于提供商。较高设置可能耗时更长并消耗更多额度；Max 表示该提供商支持的最高设置。你可以在不同回复之间通过消息框旁的模型图标更改模型和思考级别。

### 其他方式：使用本地 Ollama
{: #alternative-use-local-ollama}

1. [安装 Ollama](https://ollama.com/download) 并启动其服务器。
2. 下载支持[工具调用](https://docs.ollama.com/capabilities/tool-calling) 的模型，使用 `ollama pull MODEL_NAME` 替换为模型的实际名称。对于图像/PDF 任务，还应检查其视觉支持和上下文容量。
3. 在 TinyCAD 的提供商步骤中选择 **Ollama (hosted locally)**。
4. 使用 **Ollama API URL**，通常为 `http://localhost:11434/v1`，然后点击 **Next** 列出已安装的模型。
5. 选择模型和思考级别，然后点击 **Finish**。

![Ollama 设置，显示本地 API URL 和浏览器来源说明](../images/ai-assistant/setup-ollama.png)

Ollama 连接接受 localhost/loopback URL。若使用远程服务器，请改选 **OpenAI compatible**。为本地模型提供足够的上下文容量，以容纳对话和 TinyCAD 工具；请参阅 [Ollama 的上下文配置](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size)。

发往本地 Ollama 的请求会直接发送到本地服务器。若要在本地进行推理，请选择正在本地运行的模型：通过 Ollama 服务器配置的云模型仍可能使用云服务。

## 绘图时使用助手
{: #use-the-assistant-while-drawing}

在消息框中输入请求并点击 **Send**，或按 **Enter**。使用 **Shift+Enter** 换行。先提出范围明确的任务，检查结果后再要求进行下一项更改。

![已连接的聊天面板，其中有一条准备发送的示例请求](../images/ai-assistant/chat-ready.png)

请明确指出目标图纸页、参考标号、数值和连接方式。“将 R2 的上端连接到 Control 图纸页上的 OUT”比“修好导线”更容易检查。扩展现有电路时，请说明哪些内容应保持不变。

助手可以检查尚未保存的编辑器内容。检查其工作后，请像往常一样保存图纸或库。图纸会嵌入其符号；如果想在其他项目中再次使用可复用定义，请将其保存到自定义库。

**Working** 会将工具活动和中间更新汇总到可折叠行中。展开后可查看进度详情、工具结果以及模型检查过的图像。最终答复会单独显示。在连接支持的情况下，助手可以显示由提供商生成的思考摘要；这不是用于展示每一步内部推理的设置。

使用 **Stop** 取消当前请求。已经应用的更改仍会保留在文档中。**Undo** 和 **Redo** 对 AI 编辑同样有效；多步骤请求可能产生多个可撤销的更改。如果助手工作期间你编辑了图纸，后续写入可能因源内容过期而被拒绝。请让助手重新读取图纸并继续。

标题栏中的 **New chat** 图标会清除对话、草稿和附件，但不会撤销对图纸所做的更改。切换模型会保留对话；连接其他提供商或密钥则会开始新对话。

### 附加数据手册和电路图像
{: #attach-datasheets-and-circuit-images}

使用消息控件旁的 **Import PDF/image** 附加 PDF、PNG、JPEG 或 WebP 文件。最多可附加 **六个文件，总计 10 MiB**；提供商限制也适用。请指出确切的元件型号、封装和相关 PDF 页码，并说明引脚图是顶视图还是底视图。

对于兼容端点和 Ollama，**PDF pages** 可选择在本地渲染的页面，例如 `1-4,12`；留空则转换所有页面，但最多转换 20 页。如果转换后的图像超过 10 MiB，请减少页数。ChatGPT/OpenAI、Claude 和 Gemini 会直接接收 PDF。能否读取图表仍取决于所选模型。

TinyCAD 公共符号库搜索功能独立于常规网页浏览。符合条件的 **Sign in with ChatGPT** 连接可使用原生网页研究功能，前提是模型/账户策略允许；引用内容会以链接形式显示在回复中。API 密钥连接和其他提供商目前无法通过 TinyCAD 使用通用网页搜索。如果助手无法打开制造商的网站，请附上数据手册或相关图像。

## 示例提示词
{: #example-prompts}

可以将以下内容作为起点。请根据你的项目替换元件、封装、引脚编号和电源要求。

### 根据数据手册创建符号
{: #create-a-symbol-from-a-datasheet}

打开目标图纸并附加数据手册：

> 根据这份数据手册，为 8 引脚 PDIP 封装的 NE555P 创建一个紧凑的符号。核实每个物理引脚编号、名称和电气类型。先搜索现有符号。将电源引脚放在顶部，接地引脚放在底部，验证符号，然后将其放置在此图纸中以便布线。指出所有无法核实的内容。

若要创建实体模块而非传统 IC 外形：

> 使用附加的、适用于此确切传感器板修订版的引脚图，创建可编辑符号，显示 PCB 外形和按实际顺序标注的排针触点。使其足够紧凑，以适用于 A4 接线图。将连接点放在排针焊盘上，并使用小型温度图标标明其功能。

### 构建可复用库
{: #build-a-reusable-library}

先创建或打开自定义 `.tclib` 以供编辑：

> 添加一个包含以下单单元接口元件的小型库：DIP-4 封装的 PC817、DIP-16 封装的 ULN2003A，以及一个 4 路 2.54 mm 接线端子。使用附加的数据手册确定 IC 引脚图。为每个元件指定清晰的名称、说明和参考前缀，验证后将其添加到当前打开的库中。保留我正在编辑的符号。

检查第一批后，可继续添加另一批。像往常一样保存 `.tclib`；如果你需要可下载的库，也可以明确提出。

### 创建完整电路
{: #create-a-complete-circuit}

> 在当前图纸页上，使用 PDIP-8 元件绘制一个 5 V NE555 无稳态振荡器。目标频率约为 1 Hz。包括定时电阻和电容、复位连接、控制引脚电容、电源去耦，以及带限流电阻的输出 LED。说明计算出的定时参数，检查物理引脚连接，并整理布局。列出假设和任何尚未解决的设计规则问题。

这是在要求生成可编辑设计和计算结果。若要确认仿真行为，请自行查看模型并使用 [Simulation](../Simulation/)；AI 给出的自信解释并不代表实际运行过仿真。

### 查找或附加 SPICE 模型
{: #find-or-attach-a-spice-model}

明确要求提供 SPICE 或仿真支持。助手无需网络搜索即可查找[内置 SPICE 模型](../Bundled-SPICE-Models/)，并检查其来源、假设和端子顺序。如果没有准确的模型，请让它评估有文档记录的兼容替代模型或通用近似模型。请独立确认封装引脚排列。

> 为 Q1 查找内置 SPICE 模型，并告诉我其端子如何映射到符号。在我检查来源和假设之前，请保持图纸不变。

检查引脚映射后，你可以要求助手将模型附加到图纸。如果要求它创建带 SPICE 支持的可复用库元件，它可以为后续放置设置内置或自定义定义。

### 添加元件而不重画电路
{: #add-parts-without-redrawing-the-circuit}

> 在 U1 的电源和接地之间添加一个 100 nF 去耦电容，并将其放置在 U1 附近。布线前先确认实际电源引脚。保持电路的其余部分、参考标号和数值不变，然后检查受影响的网络。

> 在 Sensors 图纸页上添加一个标注了 +3V3、GND、SDA 和 SCL 的 4 引脚连接器。将 SDA 和 SCL 连接到现有的标记网络。如果已有上拉电阻，请使用它们；添加任何上拉电阻前，请告诉我是否需要额外的上拉电阻。

### 重建附加的图表
{: #reconstruct-an-attached-diagram}

> 在新图纸页上，将附加 PDF 第 3 页中的电路重建为可编辑的 TinyCAD 元件和导线。保留图中显示的数值和标签。遇到无法辨认的数值或含义不明确的交叉导线时，请先询问，不要猜测。将重建的网络与图像进行比较，并整理完成后的图纸页。

### 解释、检查或改进现有图纸
{: #explain-inspect-or-improve-an-existing-drawing}

> 解释从 J1 到 U2 的信号路径，并列出连接到 OUT 的元件和物理引脚。不要更改图纸。

> 检查当前图纸是否存在未连接的必需引脚、输出冲突和电源标签不一致。报告每个问题所在的图纸页和参考标号，并在应用更改前提出建议。

> 仅整理 U3 和 J4 周围的电机驱动模块。保持其连接和数值不变，并保持电源输入模块的位置不变。

## 设置、隐私和保存
{: #settings-privacy-and-saving}

**AI settings** 齿轮会显示当前提供商和连接方式，并提供模型/思考控制项和 **Save**。对于密钥连接，可选择 **Clear API key**；对于 ChatGPT 账户，可选择 **Sign out**；对于本地 Ollama，可选择 **Disconnect Ollama**。如需设置其他提供商，请先断开当前连接。**Cancel** 会保留现有连接和已保存的设置。

![现有 API 密钥连接的 AI 设置](../images/ai-assistant/connection-settings.png)

API 密钥和对话历史保留在应用程序内存中；密钥不会与首选项或图纸一起保存。重新加载/重启后需要重新输入 API 密钥。非机密的提供商、端点、模型和思考偏好可以记住。ChatGPT 账户授权由本地运行时单独管理，重启后可能仍然有效；若操作系统支持，Desktop 会使用安全的 OS 加密。

对于托管式 AI，消息、附件以及其工具请求的文档内容或预览都会发送给所选提供商。使用 API 密钥连接托管服务时，请求会直接发送到所选端点；TinyCAD 不提供提供商中继服务。兼容服务必须允许浏览器访问（CORS），且通常需要使用 HTTPS；localhost 除外。若要完全本地化工作流，请使用本地 Ollama 模型和提供的本地参考文档，并避免在线搜索符号或使用云模型。

生成的元件和电路仍需经过工程审核。请根据实际数据手册检查准确的封装引脚排列、功率额定值、电源电压、逻辑电平和工作限制。TinyCAD 的结构验证、设计规则检查和布局连接检查有助于发现错误；但它们不能证明电路可正常工作，不能取代仿真，也不能证明硬件已经过测试。

## 故障排除
{: #troubleshooting}

| 症状 | 检查内容 |
| --- | --- |
| **Chat 不可用或未显示** | 使用当前的 TinyCAD v4 版本。打开目标图纸或库，并在其工具栏上查找 Chat。 |
| **无法使用 ChatGPT 账户登录** | 使用 Desktop，或使用带有账户运行时的本地托管版本。在公共托管应用中，请选择 Use API Key。允许打开外部登录窗口，并在授权时启用 ChatGPT 套餐使用权限。 |
| **无法继续第 2 步** | 查看连接错误。检查密钥、模型访问权限、API 计费/配额、端点 URL 和互联网连接。TinyCAD 会在点击 Next 时执行此检查。 |
| **未显示任何模型** | 检查提供商访问权限。对于无法自动发现模型的端点，请输入要求的 Model ID。连接 Ollama 前，请先安装支持工具调用的模型。 |
| **本地 Ollama 无法连接** | 启动服务器，检查本地 API URL，允许 TinyCAD 的确切来源通过 OLLAMA_ORIGINS，重启 Ollama，并在浏览器请求时允许本地网络访问。 |
| **助手有回复，但无法编辑或读取图像** | 检查模型是否支持工具/视觉。附加清晰可读的裁剪图像或减少 PDF 页数。 |
| **工具提示图纸已更改** | 让助手重新读取当前状态并重试。之前应用的更改仍可通过 Undo 撤销。 |
| **回复因提供商限制而中断** | 尝试缩小任务范围或降低思考级别。TinyCAD 可以自动重试未完成的回复；重试可能会额外消耗额度。已完成的编辑仍可撤销。 |

继续阅读[自定义符号库](../Custom-symbol-libraries/)、[编辑符号](../Editing-a-Symbol/)、[布局整理](../Layout-Tidy-Up/)或[仿真](../Simulation/)。
