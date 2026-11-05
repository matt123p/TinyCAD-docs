---
layout: default
---
# 为 TinyCAD 手册做贡献
{: #contributing-to-the-tinycad-manual}

本手册通过 GitHub Pages 发布。如果您发现错误、缺失的步骤、含糊不清的
屏幕截图或过时的信息，可以通过拉取请求（PR）提出修正。

本指南介绍两种工作流程：

- **在浏览器中快速编辑**（适合小幅文字修正）
- **本地编辑并预览**（适合较大的更改）

## 开始之前
{: #before-you-start}

您需要：

- 一个 GitHub 帐户
- 本地编辑所需：Git、Node.js、Ruby 和 Bundler

仓库详情：

- **源代码仓库：** `https://github.com/matt123p/TinyCAD-docs`
- **已发布的网站：** 此仓库通过 GitHub Pages 发布的内容
- **文档源文件夹：** `docs/`
- **v4 页面：** `docs/v4/`

## 选项 A：在 GitHub 中快速编辑（无需本地配置）
{: #option-a-quick-edit-in-github-no-local-setup}

此方法适用于修正拼写错误、简短说明或更新链接。

### 1) 在 GitHub 上打开页面源文件
{: #open-the-page-source-on-github}

1. 前往 TinyCAD 文档仓库：
   `https://github.com/matt123p/TinyCAD-docs`
2. 在 `docs/v4/` 中找到您要编辑的页面。
3. 打开 Markdown 文件（例如 `Rulers.md`）。

### 2) 开始编辑
{: #start-editing}

1. 点击铅笔图标（**编辑此文件（Edit this file）**）。
2. 如果出现提示，GitHub 会帮助您自动创建一个分支仓库。
3. 使用 Markdown 进行修改。

### 3) 提交更改
{: #commit-your-change}

1. 向下滚动到**提交更改（Commit changes）**。
2. 使用清晰的提交说明，例如：
  `docs(v4): clarify ruler units in Rulers`
3. 选择**为此提交创建新分支（Create a new branch for this commit）**。
4. 点击**提出更改（Propose changes）**。

### 4) 创建拉取请求
{: #open-a-pull-request}

1. 点击**比较并创建拉取请求（Compare & pull request）**。
2. 将基础仓库设为 `matt123p/TinyCAD-docs`，并将基础分支设为 `main`。
3. 填写 PR 标题和说明（请参阅下方模板）。
4. 提交 PR。


## 选项 B：本地编辑并预览（较大改动建议使用）
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

如果您需要编辑多个文件、检查链接或预览格式，请使用此方法。

### 1) 创建分支仓库并克隆
{: #fork-and-clone}

1. 在 GitHub 上为 `matt123p/TinyCAD-docs` 创建分支仓库。
2. 克隆您的分支仓库：

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. 添加上游远程仓库：

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) 安装依赖项
{: #install-dependencies}

此仓库提供了 npm 脚本，可代您运行 Bundler 和 Jekyll：

```bash
npm install
npm run bundle:install
```

### 3) 为您的更改创建分支
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

分支命名示例：

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) 进行编辑
{: #make-your-edits}

大多数面向用户的页面位于：

- `docs/v4/*.md`（v4 手册页面）
- `docs/v3/*.md`（v3 手册页面）
- `docs/_data/navigation.yml`（左侧导航）

如果您添加了新页面，也请更新导航，以便用户找到该页面。

### 5) 在本地预览网站
{: #preview-site-locally}

```bash
npm run serve
```

然后打开终端中显示的本地 URL（通常为 `http://127.0.0.1:4000`）。

请检查：

- 标题层级清晰易读
- 内部链接有效
- 导航中包含新增或重命名的页面
- 图片能够正确加载

### 6) 提交并推送
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) 创建 PR
{: #create-the-pr}

1. 在 GitHub 上打开您的分支仓库。
2. 针对您的分支，点击**比较并创建拉取请求（Compare & pull request）**。
3. 将目标设为 `matt123p/TinyCAD-docs:main`。
4. 完成 PR 标题和说明，然后提交。

## 写作质量检查清单
{: #writing-quality-checklist}

创建 PR 前，请快速确认：

- 范围明确（每个 PR 聚焦一个主题或问题）
- 说明符合当前 TinyCAD 的实际行为
- 语言清晰简洁
- 链接目标有效
- 必要时已将页面添加到导航中
- 保留现有风格和术语

## 可复用的浏览器/桌面应用标签页组
{: #reusable-browserdesktop-tabsets}

如果页面需要分别说明如何在浏览器版 TinyCAD 和桌面应用中操作，请使用
共享的标签页组组件，而不是自行设计页面专用标记。

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

说明：

- `data-tabset` 是同步/存储键。请使用相同的值，以便同一页面上的多个
  标签页组保持同步。
- `data-default-tab` 用于设置首次访问时选中的标签页。
- 各标签页标题应使用相同的级别（上方示例中的 `###`）。

## 建议的 PR 模板
{: #suggested-pr-template}

将以下内容复制并粘贴到 PR 说明中：

```md
## Summary
-

## What changed
-

## Why
-

## Validation
- [ ] Previewed locally with `npm run serve`
- [ ] Checked navigation and links
- [ ] Confirmed formatting on rendered page

## Screenshots (if relevant)
-
```

## 使您的分支仓库保持最新
{: #keeping-your-fork-up-to-date}

如果您的 PR 挂起了一段时间，请将分支与最新的 `main` 同步：

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## 常见问题及修复方法
{: #common-issues-and-fixes}

- **PR 显示了无关的文件更改**
  - 从已更新的 `main` 创建一个全新分支，并只拣选您的提交。
- **缺少导航项**
  - 更新 `docs/_data/navigation.yml`，并确保 URL 与页面永久链接路径一致。
- **页面显示异常**
  - 检查标题级别、列表缩进以及围栏代码块标记。
- **本地链接有效，但在 Pages 上无效**
  - 优先使用此仓库中其他位置采用的相对链接，并保持页面名称一致。

## 提交之后
{: #after-submission}

维护者可能会要求您进行更新。请将后续提交添加到同一分支/PR；
PR 会自动更新。获批并合并后，GitHub Pages 重新构建完成时，您的更改
就会显示在已发布的手册中。

感谢您为改进 TinyCAD 文档所做的贡献。

- 返回 [v4 目录](../CONTENTS/)
