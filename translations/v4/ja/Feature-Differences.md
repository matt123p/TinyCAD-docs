---
layout: default
---
# 機能の違い
{: #feature-differences}

このページでは、TinyCADのWeb版とデスクトップ版の主な違いをまとめています。

<div class="comparison-legend" aria-label="Feature status legend">
	<span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 対応</span>
	<span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 一部対応</span>
	<span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> 非対応</span>
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
			<caption>TinyCADブラウザー版、デスクトップアプリ、TinyCAD v3の機能比較。</caption>
		<thead>
			<tr>
				<th scope="col">機能</th>
				<th scope="col">TinyCAD（ブラウザー）</th>
				<th scope="col">TinyCAD（アプリ）</th>
				<th scope="col">TinyCAD v3</th>
				<th scope="col">備考</th>
				</tr>
		</thead>
		<tbody>
			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">基本的な編集とライブラリ</th>
				</tr>
			<tr>
				<th scope="row">TinyCAD <code>.dsn</code>ファイルの読み込み／保存</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td>TinyCAD Web版は、デスクトップ版との完全なファイル形式互換性を目指しています。</td>
		</tr>
		<tr>
				<th scope="row">インターフェース言語のサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td>「<a href="../Language-translation/">言語翻訳</a>」を参照してください。</td>
		</tr>
		<tr>
				<th scope="row">TinyCADライブラリ<code>.tclib</code>ファイルの読み込み／編集</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td>「<a href="../Custom-symbol-libraries/">カスタムライブラリ</a>」を参照してください。</td>
		</tr>
		<tr>
				<th scope="row">TinyCAD.netからシンボルをインポート</th>
				<td><div class="feature-detail"><span class="feature-detail-title">内蔵検索</span><span class="feature-detail-copy">Webアプリ内で検索します。コピー＆ペーストも利用できます。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">内蔵検索</span><span class="feature-detail-copy">デスクトップアプリ内で検索します。コピー＆ペーストも利用できます。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">オンライン検索</span><span class="feature-detail-copy">TinyCAD.netで検索し、デスクトップ版にコピー＆ペーストします。</span></div></td>
				<td></td>
		</tr>
			<tr>
				<th scope="row">KiCADからシンボルをインポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td></td>
		</tr>
		<tr>
			<th scope="row">複数シートの図面</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">ラベル</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">バス</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">図形と注釈</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">図面を検索</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">設計ルールチェック</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">ネットリストを生成</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">複数の項目にスタイルを設定</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td>Webアプリでは複数の注釈項目を選択し、共通のスタイルと塗りつぶしを適用できます。</td>
		</tr>
		<tr>
				<th scope="row">接合点の自動配置</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">元に戻す／やり直し</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">出力と連携</th>
		</tr>
		<tr>
				<th scope="row">印刷</th>
				<td><div class="feature-detail"><span class="feature-detail-title">PDFエクスポート</span><span class="feature-detail-copy">ブラウザーまたは任意のPDFビューアーから印刷できます。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">直接印刷</span><span class="feature-detail-copy">オペレーティングシステムのプリンタードライバーを使用します。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">直接印刷</span><span class="feature-detail-copy">オペレーティングシステムのプリンタードライバーを使用します。</span></div></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">画像にエクスポート</th>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">ブラウザーや最新の設計ツール向けのベクター出力です。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">SVG</span><span class="feature-detail-copy">ブラウザーや最新の設計ツール向けのベクター出力です。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">PNG</span><span class="feature-detail-copy">ラスター形式のエクスポートです。</span></div></td>
				<td>オンラインで利用できる無料のSVGからPNGへの変換ツールがあります。</td>
		</tr>
		<tr>
				<th scope="row">PDFにエクスポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 一部対応</span></td>
				<td>TinyCAD v3では「PDFに印刷」を使用してください。</td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">高度な機能</th>
		</tr>
		<tr>
				<th scope="row">SPICEシミュレーションファイルの出力</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">VHDLファイルの出力</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td>デスクトップアプリのみ。<a href="../VHDL-output/">VHDL出力</a>を参照してください。</td>
		</tr>
		<tr>
				<th scope="row">複数ファイルの階層図面</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td></td>
		</tr>

			<tr class="comparison-table-section">
				<th scope="rowgroup" colspan="5">プラットフォームとインストール</th>
		</tr>
		<tr>
				<th scope="row">Windowsのサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完全対応</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">ネイティブアプリ</span><span class="feature-detail-copy">Windowsへのデスクトップ版のインストールに対応しています。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完全対応</span></td>
				<td>Windowsでの推奨インストール方法：<a href="https://apps.microsoft.com/detail/9NZQ1M56NM3V">Microsoft Store</a>。</td>
		</tr>
		<tr>
				<th scope="row">Macのサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完全対応</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">ネイティブアプリ</span><span class="feature-detail-copy">macOSのApp Storeから入手できます。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 一部対応</span></td>
				<td>TinyCAD v3はmacOS上でWineの互換機能を利用します。</td>
		</tr>
		<tr>
				<th scope="row">Linuxのサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> 完全対応</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">デスクトップ版のインストール</span><span class="feature-detail-copy">Snapストアまたは.debパッケージから入手できます。</span></div></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 一部対応</span></td>
				<td>TinyCAD v3はLinux上でWineの互換機能を利用します。</td>
		</tr>
		<tr>
				<th scope="row">Chrome OSのサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--yes"><span aria-hidden="true">&#10003;</span> はい</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td></td>
		</tr>
		<tr>
				<th scope="row">スマートフォン／タブレットのサポート</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--partial"><span aria-hidden="true">!</span> 一部対応</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td>ブラウザーで使用できますが、快適に作業するにはマウスまたはペンが必要です。</td>
		</tr>
		<tr>
				<th scope="row">インストールが必要</th>
				<td class="feature-status-cell"><span class="feature-pill feature-pill--no"><span aria-hidden="true">&#10005;</span> いいえ</span></td>
				<td><div class="feature-detail"><span class="feature-detail-title">はい</span><span class="feature-detail-copy">アプリストアおよびインストーラーパッケージ。</span></div></td>
				<td><div class="feature-detail"><span class="feature-detail-title">はい</span><span class="feature-detail-copy">インストーラーパッケージが必要です。</span></div></td>
				<td></td>
		</tr>
		</tbody>
	</table>
</div>

- [リファレンス](../Reference/)]に戻る
- [v4の目次](../CONTENTS/)]に戻る
