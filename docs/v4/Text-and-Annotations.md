---
layout: default
---

# Text & Annotations

Text and annotation tools are for documentation and visual clarity.

These objects are **not electrical** and are ignored by netlisting and design
rule checks.

## Text vs labels

- Use **Text** for notes, callouts, titles, and manufacturing instructions.
- Use **Labels** for electrically active net names.

If you use text where a label is required, the net will not connect.

## What is Markdown?
{: #what-is-markdown}

Markdown adds formatting to plain text using simple typed markers. TinyCAD reads those markers and displays headings, bold text and lists.

| What you type | What it means |
|---|---|
| `# Power supply` | A heading |
| `**Check polarity**` | Bold text |
| `*Optional*` | Italic text |
| `- R1: 10 kΩ` | A bulleted list item |
| `` `R1` `` | Inline code |

Put a space after `#` or `-` when they start a line. Leave a blank line between paragraphs.

For several lines of code, put `~~~` on its own line before and after the code. The complete note example below shows this.

## Markdown text boxes
{: #markdown-text-boxes}

Markdown text boxes are available in [TinyCAD v4.0.11](../Changelog/#v4011).

1. Choose Text (or press T) and drag a box on the drawing.
2. Click inside the box and enter Markdown. Formatting appears while you type.
3. Click elsewhere to see the formatted note without the Markdown markers. Resize the box if the content is clipped.

![SVG-rendered Markdown note with a heading, component list, task list and code block.](../images/markdown-preview.png)

### Editable Markdown source
{: #editable-markdown-source}

Headings, bold, italic and strikethrough show their formatting while their markers remain visible and editable. The caret, selection and word wrapping follow the styled text. Fenced and indented code stays literal; syntax colouring is not applied.

Your chosen font family, size, bold and italic settings form the base style. Headings scale relative to that size; code also uses the chosen family. Undo, copy/paste and saving preserve the Markdown source.

![Editing the same note with visible heading, bold, list, task-list and code-fence markers.](../images/markdown-source-editor.png)

### Supported formatting
{: #supported-formatting}

Supported formatting is headings, bold, italic, strikethrough, quotations, numbered and bulleted lists, task lists, horizontal rules, inline code and fenced or indented code blocks. Ordinary line breaks are retained. Tables, links, images and HTML are displayed as literal text, without special formatting or remote image loading.

For example, enter this source to make the illustrated note:

````markdown
# RC filter
**Time constant:** τ = R × C

- R1: 10 kΩ
- C1: 100 nF

- [x] Draw the circuit
- [ ] Measure the response

~~~python
tau = 10_000 * 100e-9
~~~
````

## Annotation objects

TinyCAD supports common annotation shapes, including:

- text,
- lines,
- rectangles,
- ellipses,
- arcs,
- polygons.

Use these to group blocks, highlight areas, and add explanatory notes without
changing circuit connectivity.


## Drawing lines & polygons

You can draw a collection of lines.  To end drawing right-click.

You can convert this to a polygon by selecting "Close Polygon" in the context menu.  Once converted
to a polygon you can change the fill.

{% include video-player.html
	src="/v4/images/video/Video 7.mp4"
	width=1620
	height=924
	caption="Video walkthrough showing how to draw and edit a polygon."
%}


- Back to [Drawing](../User-guide/)
- Back to [v4 contents](../CONTENTS/)
