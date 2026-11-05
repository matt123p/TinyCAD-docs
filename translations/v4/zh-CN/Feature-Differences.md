---
layout: default
---
# 功能差异
{: #feature-differences}

本页概述 TinyCAD 网页版与桌面版之间的主要差异。

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 支持</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 部分支持</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 不支持</span>
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
			<caption>TinyCAD 浏览器版、桌面应用和 TinyCAD v3 的功能比较。</caption>
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
				<th scope="row">加载/保存 TinyCAD <code>.dsn</code> 文件</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td>TinyCAD 网页版力求与桌面版实现完整的文件格式兼容。</td>
		</tr>
		<tr>
				<th scope="row">界面语言支持</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>参见 <a href="../Language-translation/">语言翻译</a>。</td>
		</tr>
		<tr>
				<th scope="row">加载/编辑 TinyCAD 库 <code>.tclib</code> 文件</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td>参见 <a href="../Custom-symbol-libraries/">自定义库</a>。</td>
		</tr>
		<tr>
				<th scope="row">从 TinyCAD.net 导入符号</th>
				<td><div class="feature-detail"><span class="feature-detail-title">内置搜索</span><span class="feature-detail-copy">在网页应用中搜索。也可以复制并粘贴。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">内置搜索</span><span class="feature-detail-copy">在桌面应用中搜索。也可以复制并粘贴。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">在线搜索</span><span class="feature-detail-copy">在 TinyCAD.net 上搜索，然后复制并粘贴到桌面版。</span></div></td>
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
				<th scope="row">形状与注释</th>
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
				<th scope="row">为多个项目设置样式</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 是</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td>网页版支持同时选择多个注释项目，并应用统一的样式和填充。</td>
		</tr>
		<tr>
				<th scope="row">自动放置连接点</th>
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
				<td><div class="feature-detail"><span class="feature-detail-title">PDF 导出</span><span class="feature-detail-copy">可通过浏览器或任何 PDF 查看器打印。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">使用操作系统的打印机驱动程序。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">Direct printing</span><span class="feature-detail-copy">使用操作系统的打印机驱动程序。</span></div></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">导出为图像</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">适用于浏览器和现代设计工具的矢量输出。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">适用于浏览器和现代设计工具的矢量输出。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">栅格导出格式。</span></div></td>
				<td>网上提供免费的 SVG 转 PNG 转换器。</td>
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
				<td>仅桌面应用支持。参见 <a href="../VHDL-output/">VHDL 输出</a>。</td>
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
				<td><div class="feature-detail"><span class="feature-detail-title">桌面版安装</span><span class="feature-detail-copy">可从 Snap 商店或通过 .dep 软件包获取。</span></div></td>
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
				<td>可以通过浏览器使用，但要流畅操作仍需要鼠标或触控笔。</td>
		</tr>
		<tr>
				<th scope="row">是否需要安装</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 否</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">是</span><span class="feature-detail-copy">应用商店和安装程序包。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">是</span><span class="feature-detail-copy">需要安装程序包。</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

- 返回[参考手册](../Reference/)
- 返回[v4 目录](../CONTENTS/)
