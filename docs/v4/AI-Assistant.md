---
layout: default
---

# AI assistant

TinyCAD's AI assistant turns written instructions, datasheets and circuit images into editable symbols and drawings. It works alongside the normal editor: you can ask it to create a circuit, add parts to the drawing already open, build a symbol library, or explain an existing connection.

**Desktop only:** The AI assistant (chatbot) is only available in the TinyCAD Desktop App. It is not available in the browser build.

Open **Chat** on the toolbar in the Desktop App to use it. Connect an AI provider before sending your first message; the connection choices are explained below.

## What it can do

| Task | How the assistant helps |
| --- | --- |
| **Create a component symbol** | Generate editable artwork, physical pin numbers, pin names and electrical types from a specified component and package. Attach the manufacturer's datasheet when the pinout matters. |
| **Create or extend a symbol library** | Add several reusable components to the `.tclib` library open for editing, including names, descriptions and pin mappings. Larger collections can be built in successive batches. |
| **Draw a circuit** | Find suitable symbols, place parts, set values and references, connect pins with wires and labels, and add explanatory notes. |
| **Extend an existing drawing** | Add a connector, decoupling capacitor, sensor, driver or another functional block while keeping the rest of the drawing. |
| **Explain or inspect a circuit** | Read the current drawing and netlist, describe signal paths, identify the pins on a net, and investigate connectivity or design-rule errors. |
| **Reconstruct a drawing from a document** | Read an attached PDF or circuit image and create an editable starting point, asking about unclear parts or connections. |
| **Tidy up a layout** | Rearrange a whole sheet or a specified part of it, using TinyCAD's layout and connection checks. |
| **Export a result** | Produce a downloadable drawing or symbol library when you explicitly ask for a file. |

The results are TinyCAD objects that you can select, edit, wire and save. In a drawing, newly created symbols are placed ready to connect. In a library, new components become entries in that library. You do not have to copy XML from the conversation or configure a separate MCP server.

The assistant looks in the [bundled libraries](../Bundled-Libraries/) first, then searches the public TinyCAD.net collection if needed. It can search bundled collections that are not currently selected in the library picker. Public symbol search needs an internet connection, including when you use a local AI model.

For reusable parts, first [create or open a custom library for editing](../Custom-symbol-libraries/), then open Chat in that library window. For a circuit, keep the intended drawing window active. Tell the assistant which sheet, component references or functional block you mean. Current AI symbol retrieval and placement supports **single-unit symbols**; use the normal symbol editor for multi-unit parts that the assistant cannot import.

{% include video-player.html src="/v4/videos/ai-assistant/ai-assistant-demo.mp4" poster="/v4/images/ai-assistant/chat-open-desktop.png" caption="Create a symbol from a datasheet in TinyCAD Desktop. AI processing waits are shown at 12× speed and marked on screen; interaction and results are shown at normal speed." %}

## Set up a connection

### 1. Choose a provider

1. Open **Chat** on the toolbar.
2. Click **Click here to Sign in to use AI**, or the **AI settings** gear in the panel header.
3. In **Step 1 — Choose provider**, select a provider, then click **Next**.

![AI settings showing the Provider step](../images/ai-assistant/setup-provider.png)

You can connect one provider at a time.

| Provider in TinyCAD | What you need |
| --- | --- |
| **ChatGPT** | Either an eligible paid ChatGPT account using **Sign In with ChatGPT**, or an OpenAI API key using **Use API Key**. Account sign-in is available in the Desktop App. |
| **Anthropic Claude** | An API key from the [Claude Console](https://platform.claude.com/settings/keys), with API access and billing for the models you use. |
| **Google Gemini** | An API key from [Google AI Studio](https://aistudio.google.com/apikey). Some models have a limited free API tier; availability and quotas apply. |
| **OpenAI compatible** | The service's API key, API base URL and a model that supports tool calling. |
| **Ollama (hosted locally)** | A running local Ollama server and an installed model with tool support. Local models do not require an API key. |

A subscription to a provider's normal chat website does not automatically provide API billing or an API key. ChatGPT's explicit account-sign-in option is a separate connection method. For Gemini, the wizard uses an API key; signing into TinyCAD's Google Drive storage does not connect its AI assistant.

### 2. Connect an account or API key

#### Use a ChatGPT account

In TinyCAD Desktop, choose **ChatGPT**, then **Sign In with ChatGPT** on step 2.

1. Click **Sign in with ChatGPT**. Complete sign-in in the external browser.
2. Approve use of your ChatGPT plan when prompted. Signing in without enabling plan usage is not enough to send AI requests.
3. Return to TinyCAD and choose a model when the wizard advances to step 3.

If an account is remembered, the screen offers **Continue as …** or **Sign in with a different account**. TinyCAD retains one account at a time. After connection, **Using ChatGPT plan** and **Manage usage** appear above the message box. The first-use message explains that requests use your plan allowance or available credits.

![Desktop AI settings offering Sign In with ChatGPT or Use API Key](../images/ai-assistant/setup-chatgpt-desktop.png)

ChatGPT sign-in requires an eligible paid account; account, workspace and app limits still apply. It does not silently switch to API-key billing when a request is refused. See OpenAI's [Sign in with ChatGPT documentation](https://developers.openai.com/siwc/token-sharing-open-source) for the account-plan connection.

#### Use an API key

1. Create a key using the provider link shown on step 2. Check that the project or account has access to the models you intend to use.
2. For **ChatGPT**, select **Use API Key**. Other hosted providers show their key-entry page directly.
3. Paste the key into **API key**. It is masked; **Show API key** reveals it while you type if required.
4. For **OpenAI compatible**, also enter the service's **API base URL**.
5. Click **Next**. TinyCAD checks the connection and retrieves the available models automatically.

![ChatGPT API-key entry with a masked-key field and provider instructions](../images/ai-assistant/setup-api-key.png)

If an endpoint cannot list models, TinyCAD asks for a **Model ID** on step 2. Enter the provider's exact identifier and click **Next** again; a short greeting checks it. These checks can use provider quota. A failed connection stays on step 2 and displays the error.

For Gemini, create or select a project in Google AI Studio and copy its API key into TinyCAD. Google's [Gemini API pricing page](https://ai.google.dev/gemini-api/docs/pricing) explains which models and usage qualify for the free tier. Paid models or higher usage may require billing.

![Google Gemini setup with the Google AI Studio key link](../images/ai-assistant/setup-gemini.png)

### 3. Pick a model and thinking level

After a successful connection, choose a model in **Step 3 — Pick Model**, adjust **Thinking**, then click **Finish**.

![Model selection and Thinking slider in the final setup step](../images/ai-assistant/setup-model.png)

The model list in this illustration is an example; your list depends on the provider, endpoint and account. ChatGPT shows supported Sol, Luna and Astra models returned by your connection. Newest versions are shown first, with older choices under **More models** and up to six recent choices remembered.

Choose a model that supports **tools** so it can inspect and edit TinyCAD documents. To interpret circuit images or datasheets containing diagrams, choose a model that also supports **vision**. A general text-chat endpoint is not sufficient for every task.

**Thinking** runs from **Minimal** to **Max**, starting at **Medium**. The available levels depend on the provider. Higher settings can take longer and use more allowance; Max means that provider's highest supported setting. You can change the model and thinking level between replies using the model icon beside the message box.

### Alternative: use local Ollama

1. [Install Ollama](https://ollama.com/download) and start its server.
2. Download a model with [tool-calling support](https://docs.ollama.com/capabilities/tool-calling), using `ollama pull MODEL_NAME` with the model's actual name. For image/PDF tasks, also check its vision support and context capacity.
3. In TinyCAD's provider step, choose **Ollama (hosted locally)**.
4. Use **Ollama API URL**, normally `http://localhost:11434/v1`, then click **Next** to list installed models.
5. Choose a model and thinking level, then **Finish**.

![Ollama setup showing the local API URL and browser-origin guidance](../images/ai-assistant/setup-ollama.png)

The Ollama connection accepts localhost/loopback URLs. For a remote server, choose **OpenAI compatible** instead. Give a local model sufficient context for the conversation and TinyCAD tools; see [Ollama's context configuration](https://docs.ollama.com/api/openai-compatibility#setting-the-local-context-size).

Requests to local Ollama go directly to the local server. Choose a locally running model for local inference: cloud models configured through an Ollama server can still use a cloud service.

## Use the assistant while drawing

Type a request in the message box and click **Send**, or press **Enter**. Use **Shift+Enter** for another line. Start with a bounded task, inspect the result, then ask for the next change.

![Connected chat panel with an example request ready to send](../images/ai-assistant/chat-ready.png)

Be specific about the target sheet, references, values and connections. “Connect the top of R2 to OUT on the Control sheet” is easier to check than “fix the wire”. State what should remain unchanged when extending an existing circuit.

The assistant can inspect unsaved editor contents. Save the drawing or library normally after reviewing its work. Drawings embed their symbols; save reusable definitions in a custom library when you want to use them again in other projects.

**Working** groups tool activity and intermediate updates into a collapsible row. Open it for progress details, tool results and any images the model inspected. The final answer appears separately. When a connection supports it, the assistant can show provider-supplied thinking summaries; this is not a setting that reveals every internal reasoning step.

Use **Stop** to cancel the current request. Changes already applied remain in the document. **Undo** and **Redo** work with AI edits as with normal editing; a multi-step request can create several undoable changes. If you edit the drawing while the assistant works, a later write may be rejected because its source is out of date. Ask it to reread the drawing and continue.

The header's **New chat** icon clears the conversation, draft and attachments. It does not undo changes to the drawing. Switching models keeps the conversation; connecting another provider or key starts a new chat.

### Attach datasheets and circuit images

Use **Import PDF/image** beside the message controls to attach PDF, PNG, JPEG or WebP files. You can attach up to **six files totalling 10 MiB**; provider limits also apply. Ask for the exact component variant, package and relevant PDF pages, and point out whether a pin diagram is a top or bottom view.

For compatible endpoints and Ollama, **PDF pages** selects pages to render locally, for example `1-4,12`; leave it blank for all pages within the 20-page conversion limit. Choose fewer pages if the converted images exceed 10 MiB. ChatGPT/OpenAI, Claude and Gemini receive PDFs directly. Diagram-reading capability still depends on the chosen model.

Search of TinyCAD's public symbol library is available independently of general web browsing. Native web research is available to eligible **Sign in with ChatGPT** connections when the model/account policy permits it; citations appear as links in the response. API-key connections and the other providers do not currently gain general web search through TinyCAD. Attach the datasheet or relevant image when the assistant cannot open a manufacturer's website.

## Example prompts

Use these as starting points. Replace the component, package, pin numbers and supply requirements with those for your project.

### Create a symbol from a datasheet

Open the intended drawing and attach the datasheet:

> Create a compact symbol for the NE555P in the 8-pin PDIP package from this datasheet. Verify every physical pin number, name and electrical type. Search existing symbols first. Put supply pins at the top and ground at the bottom, validate the symbol, and place it in this drawing ready to wire. Identify anything you cannot verify.

For a physical module rather than a conventional IC outline:

> Using the attached pin diagram for this exact sensor-board revision, create an editable symbol showing the PCB outline and labelled header contacts in their physical order. Keep it compact enough for an A4 wiring plan. Put connection points on the header pads and use a small temperature icon to identify its function.

### Build a reusable library

First create or open a custom `.tclib` for editing:

> Add a small library of single-unit interface components: a PC817 in DIP-4, a ULN2003A in DIP-16, and a 4-way 2.54 mm terminal connector. Use the attached datasheets for the IC pin maps. Give each component a clear name, description and reference prefix, validate it, and add it to this open library. Preserve the symbol I am currently editing.

Continue with another batch after checking the first. Save the `.tclib` normally, or explicitly request a downloadable library if that is the result you need.

### Create a complete circuit

> On the current sheet, draw a 5 V NE555 astable oscillator using the PDIP-8 part. Aim for about 1 Hz. Include the timing resistors and capacitor, reset connection, control-pin capacitor, supply decoupling and an output LED with a current-limiting resistor. Explain the calculated timing, check the physical pin connections, and tidy the layout. List assumptions and any unresolved design-rule issues.

This asks for an editable design and calculations. To establish simulated behaviour, review the models and use [Simulation](../Simulation/) yourself; a confident AI explanation is not a recorded simulator run.

### Add parts without redrawing the circuit

> Add a 100 nF decoupling capacitor between U1's supply and ground, close to U1. Identify its actual supply pins before wiring. Keep the rest of the circuit, references and values unchanged, then check the affected nets.

> Add a labelled 4-pin connector for +3V3, GND, SDA and SCL on the Sensors sheet. Connect SDA and SCL to the existing labelled nets. Use the existing pull-ups if present and tell me if additional pull-ups are needed before adding any.

### Reconstruct an attached diagram

> Recreate the circuit on page 3 of the attached PDF as editable TinyCAD components and wires on a new sheet. Preserve the shown values and labels. Ask about unreadable values or ambiguous wire crossings instead of guessing. Compare the reconstructed nets with the image and tidy the finished sheet.

### Explain, inspect or improve an existing drawing

> Explain the signal path from J1 to U2 and list the parts and physical pins connected to OUT. Do not change the drawing.

> Check the current drawing for unconnected required pins, conflicting outputs and inconsistent power labels. Report the sheet and reference for each issue, and propose changes before applying them.

> Tidy only the motor-driver block around U3 and J4. Keep its connections and values unchanged and leave the power-input block where it is.

## Settings, privacy and saving

The **AI settings** gear shows the current provider and connection method, with model/thinking controls and **Save**. For a key connection it offers **Clear API key**; for a ChatGPT account it offers **Sign out**; for local Ollama it offers **Disconnect Ollama**. Disconnect first to set up another provider. **Cancel** keeps the existing connection and saved settings.

![AI settings for an existing API-key connection](../images/ai-assistant/connection-settings.png)

API keys and conversation history stay in application memory; keys are not saved with preferences or drawings. You need to re-enter an API key after reloading/restarting. Non-secret provider, endpoint, model and thinking preferences can be remembered. ChatGPT account authorization is managed separately by the local runtime and can survive restarts; Desktop uses secure OS encryption when available.

For hosted AI, messages, attachments and the document content or previews requested by its tools are sent to the selected provider. Hosted API-key connections send requests directly to the selected endpoint; TinyCAD does not provide a provider relay. Compatible services must permit browser access (CORS) and normally use HTTPS; localhost is the exception. For a wholly local workflow, use a local Ollama model and supplied local reference documents, and avoid online symbol searches or cloud models.

Generated parts and circuits still need engineering review. Check exact package pinouts, power ratings, supply voltage, logic levels and operating limits against the real datasheets. TinyCAD's structural validation, design-rule checks and layout connection checks help find errors; they do not prove the circuit works, replace simulation or establish that hardware has been tested.

## Troubleshooting

| Symptom | What to check |
| --- | --- |
| **Chat is unavailable or missing** | Use a current TinyCAD v4 build. Open the intended drawing or library and look for Chat on its toolbar. |
| **ChatGPT account sign-in is unavailable** | Use Desktop, or a locally hosted build with the account runtime. On the public hosted app, choose Use API Key. Allow the external sign-in window and enable ChatGPT plan usage during consent. |
| **Step 2 will not advance** | Read its connection error. Check the key, model access, API billing/quota, endpoint URL and internet connection. TinyCAD performs this check on Next. |
| **No models appear** | Check provider access. For endpoints without model discovery, enter the requested Model ID. Install a tool-capable model before connecting Ollama. |
| **Local Ollama cannot connect** | Start the server, check the local API URL, allow TinyCAD's exact origin through OLLAMA_ORIGINS, restart Ollama and allow browser local-network access if requested. |
| **The assistant replies but cannot edit or read images** | Check model tool/vision support. Attach a readable crop or fewer PDF pages. |
| **A tool reports that the drawing changed** | Let the assistant reread the current state and retry. Previously applied changes remain available through Undo. |
| **A reply stops at a provider limit** | Try a smaller task or lower thinking level. TinyCAD can retry incomplete replies automatically; retries may use extra allowance. Completed edits remain undoable. |

Continue with [custom symbol libraries](../Custom-symbol-libraries/), [editing symbols](../Editing-a-Symbol/), [layout tidy-up](../Layout-Tidy-Up/) or [simulation](../Simulation/).
