---
layout: default
---
# TinyCAD - 作図
{: #tinycad---drawing}

このセクションでは、最初の図面の設定、ラベル、バス、未接続、注釈、印刷など、作図の基本的なワークフローについて説明します。

既存の回路を配置し直す方法については、[レイアウトの整理](../Layout-Tidy-Up/)を参照してください。自動レイアウトの適用範囲、強度の設定、および［元に戻す］による結果の取り消しについて説明します。

## オブジェクトを一時的に非表示にする
{: #temporarily-hiding-objects}

図面の混み合った部分にあるオブジェクトの下に隠れているオブジェクトにアクセスするには、次の手順に従います。

1. 避けておきたいオブジェクトを選択します。
2. 作図領域のコンテキストメニューを開き（右クリック、またはタッチスクリーンで長押し）、
   **選択項目を非表示**を選択します。
3. 作業が終わったら、コンテキストメニューを開き、**非表示のオブジェクトをすべて表示**を選択して、現在のシート上の非表示オブジェクトをすべて再表示します。

非表示のオブジェクトは、非表示の間、キャンバス上で選択できません。非表示は一時的な表示設定であり、オブジェクトは削除されず、図面ファイルにも非表示フラグは保存されません。非表示のオブジェクトも電気的接続とネットリストに含まれ、印刷およびPDF出力にも表示されます。

タッチスクリーンのジェスチャーと正確な配置については、[タッチ操作](../Touch-controls/)を参照してください。

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

- [v4の目次に戻る](../CONTENTS/)
