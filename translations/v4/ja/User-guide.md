---
layout: default
---
# TinyCAD v4 - 作図
{: #tinycad-v4---drawing}

このセクションでは、初回の作図設定、ラベル、バス、未接続マーク、注釈、印刷など、基本的な作図手順について説明します。

## オブジェクトを一時的に非表示にする
{: #temporarily-hiding-objects}

図面の込み合った部分の下にあるオブジェクトにアクセスするには、次の手順を行います。

1. 邪魔にならないように移動したいオブジェクトを選択します。
2. 作図コンテキストメニューを開き（右クリック、またはタッチスクリーンで長押し）、
   **選択項目を非表示 (Hide selected)** を選択します。
3. 作業が終わったら、コンテキストメニューを開き、**非表示のオブジェクトをすべて表示 (Show all hidden objects)** を選択して、現在のシート上の非表示オブジェクトをすべて再表示します。

非表示のオブジェクトは、非表示の間、キャンバス上で選択できません。非表示は一時的な表示設定です。オブジェクトは削除されず、図面ファイルに非表示フラグが保存されることもありません。非表示のオブジェクトも電気的接続とネットリストに含まれ、印刷およびPDF出力にも表示されます。

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

- [v4 の目次に戻る](../CONTENTS/)
