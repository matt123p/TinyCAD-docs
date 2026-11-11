---
layout: default
---
# TinyCADマニュアルへの貢献
{: #contributing-to-the-tinycad-manual}

このマニュアルはGitHub Pagesで公開されています。誤り、手順の不足、分かりにくいスクリーンショット、または古い情報を見つけた場合は、プルリクエスト（PR）で修正を提案できます。

このガイドでは、次の2つの方法を説明します。

- **ブラウザーで手早く編集**（小さなテキスト修正に最適）
- **ローカルで編集してプレビュー**（大きな変更に最適）

## 始める前に
{: #before-you-start}

必要なもの：

- GitHubアカウント
- ローカルで編集する場合：Git、Node.js、Ruby、Bundler

リポジトリの詳細：

- **ソースリポジトリ：** `https://github.com/matt123p/TinyCAD-docs`
- **公開サイト：** このリポジトリから生成されるGitHub Pages
- **ドキュメントのソースフォルダー：** `docs/`
- **v4ページ：** `docs/v4/`

## 方法A：GitHubで手早く編集（ローカル環境の準備不要）
{: #option-a-quick-edit-in-github-no-local-setup}

誤字の修正、簡単な説明の追加、リンクの更新には、この方法を使います。

### 1) GitHubでページのソースを開く
{: #open-the-page-source-on-github}

1. TinyCADドキュメントのリポジトリに移動します：
   `https://github.com/matt123p/TinyCAD-docs`
2. `docs/v4/`で編集したいページを探します。
3. Markdownファイルを開きます（例：`Rulers.md`）。

### 2) 編集を開始する
{: #start-editing}

1. 鉛筆アイコン（**このファイルを編集**）をクリックします。
2. 表示された場合、GitHubがフォークの作成を自動で案内します。
3. Markdownで変更を加えます。

### 3) 変更をコミットする
{: #commit-your-change}

1. **変更をコミット**までスクロールします。
2. 明確なコミットメッセージを入力します。例：
  `docs(v4): clarify ruler units in Rulers`
3. **このコミット用に新しいブランチを作成**を選択します。
4. **変更を提案**をクリックします。

### 4) プルリクエストを作成する
{: #open-a-pull-request}

1. **比較してプルリクエストを作成**をクリックします。
2. ベースリポジトリに`matt123p/TinyCAD-docs`、ベースブランチに`main`を設定します。
3. PRのタイトルと説明を入力します（下のテンプレートを参照）。
4. PRを送信します。


## 方法B：ローカルで編集してプレビュー（大きな変更におすすめ）
{: #option-b-local-edit--preview-recommended-for-bigger-changes}

複数のファイルを編集する場合、リンクを確認する場合、または書式をプレビューする場合は、この方法を使います。

### 1) フォークしてクローンする
{: #fork-and-clone}

1. GitHubで`matt123p/TinyCAD-docs`をフォークします。
2. フォークをクローンします：

```bash
git clone https://github.com/<your-username>/TinyCAD-docs.git
cd TinyCAD-docs
```

3. upstreamリモートを追加します：

```bash
git remote add upstream https://github.com/matt123p/TinyCAD-docs.git
```

### 2) 依存関係をインストールする
{: #install-dependencies}

このリポジトリには、BundlerとJekyllを実行するnpmスクリプトが用意されています：

```bash
npm install
npm run bundle:install
```

### 3) 変更用のブランチを作成する
{: #create-a-branch-for-your-change}

```bash
git checkout -b docs/v4-fix-rulers
```

ブランチ名の例：

- `docs/fix-typo-...`
- `docs/v4-update-...`
- `docs/add-...`

### 4) 編集する
{: #make-your-edits}

ユーザー向けページの多くは次の場所にあります：

- `docs/v4/*.md`（v4マニュアルのページ）
- `docs/v3/*.md`（v3マニュアルのページ）
- `docs/_data/navigation.yml`（左側のナビゲーション）

新しいページを追加した場合は、ユーザーが見つけられるようナビゲーションも更新してください。

### 5) サイトをローカルでプレビューする
{: #preview-site-locally}

```bash
npm run serve
```

次に、ターミナルに表示されたローカルURLを開きます（通常は`http://127.0.0.1:4000`）。

確認事項：

- 見出しの構成が読みやすい
- 内部リンクが機能する
- ナビゲーションに新規ページや名称変更したページが含まれている
- 画像が正しく読み込まれる

### 6) コミットしてプッシュする
{: #commit-and-push}

```bash
git add .
git commit -m "docs(v4): improve Rulers instructions"
git push -u origin docs/v4-fix-rulers
```

### 7) PRを作成する
{: #create-the-pr}

1. GitHubで自分のフォークを開きます。
2. ブランチの**比較してプルリクエストを作成**をクリックします。
3. マージ先に`matt123p/TinyCAD-docs:main`を指定します。
4. PRのタイトルと説明を入力して送信します。

## 文章の品質チェックリスト
{: #writing-quality-checklist}

PRを作成する前に、次の点を簡単に確認してください：

- 変更範囲が絞られている（1つのPRにつき1つのトピック／課題）
- 手順が現在のTinyCADの動作に即している
- 表現が明確で簡潔である
- リンク先が有効である
- 必要に応じてページがナビゲーションからリンクされている
- 既存のスタイルと用語が維持されている

## 再利用可能なブラウザー／デスクトップのタブセット
{: #reusable-browserdesktop-tabsets}

ページでTinyCADのブラウザー版とデスクトップアプリ版の異なる手順を示す必要がある場合は、ページ固有のマークアップを独自に作成せず、共通のタブセットコンポーネントを使用してください。

```md
<div class="manual-tabset" data-tabset="product-mode" data-tabset-label="Choose your TinyCAD product" data-default-tab="Browser" markdown="1">

### Browser

Browser-specific content.

### Desktop App

Desktop-specific content.

</div>
```

注意事項：

- `data-tabset`は同期／保存用のキーです。同じページ上の複数のタブセットを同期させるには、同じ値を再利用します。
- `data-default-tab`は初回訪問時に選択されるタブを指定します。
- 各タブの見出しは同じレベルにします（上の例では`###`）。

## PRテンプレートの例
{: #suggested-pr-template}

次の内容をPRの説明にコピーして貼り付けてください：

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

## フォークを最新の状態に保つ
{: #keeping-your-fork-up-to-date}

PRがしばらくオープンのままの場合は、ブランチを最新の`main`に同期してください：

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main

git checkout docs/v4-fix-rulers
git merge main
git push
```

## よくある問題と対処法
{: #common-issues-and-fixes}

- **PRに無関係なファイル変更が表示される**
  - 更新済みの`main`から新しいブランチを作成し、自分のコミットだけをcherry-pickします。
- **ナビゲーション項目が見つからない**
  - `docs/_data/navigation.yml`を更新し、URLがページのパーマリンクパスと一致していることを確認します。
- **ページの表示がおかしい**
  - 見出しレベル、リストのインデント、フェンス付きコードブロックのマーカーを確認します。
- **ローカルではリンクが機能するが、Pagesでは機能しない**
  - このリポジトリ内で使用されている相対リンクを優先し、ページ名の一貫性を保ちます。

## 提出後
{: #after-submission}

メンテナーから修正を依頼される場合があります。追加のコミットは同じブランチ／PRに加えてください。PRは自動的に更新されます。承認されてマージされると、GitHub Pagesの再ビルド後に変更が公開マニュアルに反映されます。

TinyCADドキュメントの改善にご協力いただき、ありがとうございます。

- [v4の目次](../CONTENTS/)に戻る
