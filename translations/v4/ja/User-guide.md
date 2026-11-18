---
layout: default
---
# TinyCAD - 作図
{: #tinycad---drawing}

[AI アシスタント](../AI-Assistant/)は、文章による指示から回路を作成したり、開いている図面に部品を追加したりできます。編集内容は引き続き編集可能で、Undo に対応しています。

このセクションでは、最初の図面の設定、ラベル、バス、非接続マーク、注釈、印刷など、作図の基本的なワークフローを説明します。

既存の回路の配置を変更する方法については、[レイアウトの整理](../Layout-Tidy-Up/)を参照してください。自動レイアウトの適用範囲、強さの設定、Undo による結果の取り消しについて説明します。

ロゴ、参照画像、スキャンした図面については、[画像](../Images/)を参照してください。コピーと貼り付け、ファイルの読み込み、サイズ変更、縦横比の固定、ピクセルのクリッピングについて説明します。

## オブジェクトを一時的に非表示にする
{: #temporarily-hiding-objects}

図面内の混み合った部分の下にあるオブジェクトにアクセスするには、次の手順を実行します。

1. 邪魔にならないように移動したいオブジェクトを選択します。
2. 図面のコンテキストメニューを開き（右クリック、またはタッチスクリーンでは長押し）、
   **選択項目を非表示（Hide selected）** を選択します。
3. 作業が終わったら、コンテキストメニューを開き、**非表示のオブジェクトをすべて表示（Show all hidden objects）**
   を選択して、現在のシート上のすべての非表示オブジェクトを再表示します。

非表示のオブジェクトは、非表示の間はキャンバス上で選択できません。非表示設定は
一時的な表示設定です。オブジェクトは削除されず、図面ファイルにも非表示フラグは
保存されません。非表示のオブジェクトも電気的な接続とネットリストに反映され、
印刷および PDF 出力にも表示されます。

タッチスクリーンでのジェスチャーや正確な配置については、[タッチ操作](../Touch-controls/)を参照してください。

## ページ
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

- [v4 の目次](../CONTENTS/)に戻る
