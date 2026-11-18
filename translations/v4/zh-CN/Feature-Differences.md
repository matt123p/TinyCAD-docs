---
layout: default
---
# 功能差异
{: #feature-differences}

本页概述 TinyCAD 网页版与桌面版之间的主要差异。

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 支持</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 不可用</span>
</div>

<div class="comparison-table-wrap">
	<table class="comparison-table">
		<colgroup>
			<col class="comparison-col-feature" />
			<col class="comparison-col-browser" />
			<col class="comparison-col-app" />
			<col class="comparison-col-v3" />
			<col class="comparison-col-notes" />
			</colgroup>
		<caption>TinyCAD 浏览器版、桌面应用和 TinyCAD v3 的功能对比。</caption>
		<thead>
			<tr>
				<th scope="col">功能</th>
				<th scope="col">TinyCAD（浏览器版）</th>
				<th scope="col">TinyCAD（应用）</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">备注</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">核心编辑与库</th>
			</tr>
			<tr>
				<th scope="row">AI 辅助的符号、库和电路编辑</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>仅限桌面应用；浏览器版不提供 AI 助手（聊天机器人）。通过 Chat 连接 AI 提供商，需使用 API 密钥、符合条件的 ChatGPT 帐户或本地 Ollama。请参阅 <a href="../AI-Assistant/">AI 助手设置与提示</a>.</td>
			</tr>
			<tr>
				<th scope="row">加载/保存 TinyCAD <code>.dsn</code> 文件</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td>TinyCAD 网页版旨在与桌面版实现完整的文件格式兼容。</td>
		</tr>
			<tr>
				<th scope="row">加载/保存压缩的 TinyCAD <code>.dzn</code> 文件</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>基于 ZIP 的绘图文件，包含仿真设置和可选结果。请参见 <a href="../Simulation/#dzn-simulation-drawings">仿真文件</a>。</td>
		</tr>
			<tr>
				<th scope="row">文本框中的 Markdown 格式</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>早期版本使用纯文本。请参见 <a href="../Text/#markdown-text-boxes">Markdown 文本框</a>。</td>
		</tr>
			<tr>
				<th scope="row">界面语言支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>请参见 <a href="../Language-translation/">语言翻译</a>。</td>
		</tr>
			<tr>
				<th scope="row">加载/编辑 TinyCAD 库 <code>.tclib</code> 文件</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td>请参见 <a href="../Custom-symbol-libraries/">自定义库</a>。</td>
		</tr>
			<tr>
				<th scope="row">内置设备/模型库和示例浏览器</th>
				<td>是</td>
				<td>是</td>
				<td>否</td>
				<td>请参见 <a href="../Bundled-Libraries/">内置库</a> 和 <a href="../Bundled-Examples/">示例</a>。</td>
		</tr>
			<tr>
				<th scope="row">从 TinyCAD.net 导入符号</th>
				<td><div class="feature-detail"><span class="feature-detail-title">内置搜索</span><span class="feature-detail-copy">在网页应用中搜索。也可以复制并粘贴。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">内置搜索</span><span class="feature-detail-copy">在桌面应用中搜索。也可以复制并粘贴。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">在线搜索</span><span class="feature-detail-copy">在 TinyCAD.net 上搜索，然后复制并粘贴到桌面应用中。</span></div></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">从 KiCAD 导入符号</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">多页图纸</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">标签</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">总线</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">图形和注释</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">搜索图纸</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">设计规则检查</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">生成网表</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">跨多个项目设置样式</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>网页应用支持多选注释项目，并为其应用统一的样式和填充。</td>
		</tr>
			<tr>
				<th scope="row">自动放置接点</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">撤销/重做</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">输出与集成</th>
		</tr>
		<tr>
				<th scope="row">打印</th>
				<td><div class="feature-detail"><span class="feature-detail-title">导出 PDF</span><span class="feature-detail-copy">通过浏览器或任何 PDF 查看器打印。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">直接打印</span><span class="feature-detail-copy">使用操作系统的打印机驱动程序。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">直接打印</span><span class="feature-detail-copy">使用操作系统的打印机驱动程序。</span></div></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">导出为图像</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">适用于浏览器和现代设计工具的矢量输出。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">适用于浏览器和现代设计工具的矢量输出。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">栅格导出格式。</span></div></td>
				<td>网上提供免费的 SVG 转 PNG 工具。</td>
		</tr>
			<tr>
				<th scope="row">导出为 PDF</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span></td>
				<td>在 TinyCAD v3 中使用“打印为 PDF”。</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">高级功能</th>
		</tr>
		<tr>
				<th scope="row">集成模拟 SPICE 仿真</th>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></span><span class="feature-detail-copy">WebAssembly ngspice</span></div></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></span><span class="feature-detail-copy">原生 ngspice</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>仿真图纸、图表、测量和探索<a href="../Simulation/">。</a>
		</td>
			</tr>
				<tr>事件驱动 XSPICE 仿真<th scope="row">
				</th><td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span><sup><a href="#xspice-browser-note">1</a></sup></td>
				<td><div class="feature-detail"><span><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></span><span class="feature-detail-copy">内置代码模型</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">虚拟仪器弹出窗口</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">SPICE 仿真文件输出</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">VHDL 文件输出</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td>仅限桌面应用。请参见 <a href="../VHDL-output/">VHDL 输出</a>。</td>
		</tr>
			<tr>
				<th scope="row">多文件分层图纸</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">平台与安装</th>
		</tr>
		<tr>
				<th scope="row">Windows 支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完整</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">原生应用</span><span class="feature-detail-copy">支持在 Windows 上安装桌面版。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完整</span></td>
				<td>Windows 上的首选安装方式：<a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>。</td>
		</tr>
			<tr>
				<th scope="row">Mac 支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完整</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">原生应用</span><span class="feature-detail-copy">可从 macOS 上的 App Store 获取。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span></td>
				<td>TinyCAD v3 在 macOS 上依赖 Wine 兼容层。</td>
		</tr>
			<tr>
				<th scope="row">Linux 支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完整</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">桌面版安装</span><span class="feature-detail-copy">可从 Snap 商店获取，或通过 .dep 软件包安装。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span></td>
				<td>TinyCAD v3 在 Linux 上依赖 Wine 兼容层。</td>
		</tr>
			<tr>
				<th scope="row">Chrome OS 支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">手机/平板支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>可以在浏览器中使用，但要流畅操作仍需鼠标或触控笔。</td>
		</tr>
			<tr>
				<th scope="row">需要安装</th>
				<td><div class="feature-detail"><span class="feature-detail-title">否</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">是</span><span class="feature-detail-copy">应用商店和安装程序包。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">是</span><span class="feature-detail-copy">需要安装程序包。</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

<p id="xspice-browser-note"><sup>1</sup> 浏览器版本可以打开包含先前保存的 XSPICE 结果的图纸以供查看。运行 XSPICE 需要 TinyCAD Desktop。</p>

- 返回[参考手册](../Reference/)
- 返回[v4 目录](../CONTENTS/)
