---
layout: default
---
# インストール手順
{: #installation-instructions}

このページでは、TinyCAD のインストール方法について説明します。

## Windows へのインストール
{: #install-on-windows}

Windows では、TinyCAD v4 をインストールする方法として、
[Microsoft Store](https://apps.microsoft.com/detail/9NZQ1M56NM3V) からのインストールを推奨します。

Windows をお使いの場合、別の方法でインストールする特別な理由がなければ、Microsoft Store 版をお使いください。

[GitHub のリリース](https://github.com/matt123p/TinyCADv4/releases) にも、
Windows 用インストーラーが含まれています。

## macOS へのインストール
{: #install-on-macos}

macOS では、
[GitHub のリリース](https://github.com/matt123p/TinyCADv4/releases) から TinyCAD v4 をダウンロードしてください。
macOS のディスクイメージ (`.dmg`) は、Apple Silicon (ARM64) 向けにビルドされています。

## Linux へのインストール
{: #install-on-linux}

TinyCAD は、Ubuntu、Kubuntu、KDE Neon、Pop!_OS、elementary OS、
Debian、Fedora、openSUSE、Manjaro、Arch Linux、CentOS、Red Hat Enterprise
Linux など、Snap に対応した主要な Linux ディストリビューション向けに、[Snap Store](https://snapcraft.io/tinycad) から入手できます。

Ubuntu および多くの Ubuntu ベースのディストリビューションでは、Snap のサポートがすでに有効になっています。
その場合は、次のコマンドで TinyCAD を直接インストールできます。

```bash
sudo snap install tinycad
```
If this doesn't work then the TinyCAD page on the [Snap Store](https://snapcraft.io/tinycad) には、サポート対象の各 Linux ディストリビューションに固有のセットアップ手順へのリンクがあります。

[GitHub のリリース](https://github.com/matt123p/TinyCADv4/releases) には、x64 および ARM64 用の Linux `.deb` パッケージも含まれています。Snap パッケージは x64 向けにビルドされています。現在の Electron ランタイムがそのアーキテクチャをサポートしていないため、Linux ARMv7 (32-bit ARM) 用パッケージの提供は終了しました。

## ChromeOS および Chromebook での使用
{: #use-on-chromeos-and-chromebooks}

ChromeOS では、デスクトップアプリケーションをインストールする代わりに、
[TinyCAD Web](../TinyCAD-Web-overview-and-quick-start/) をお使いください。


## 関連ページ
{: #related-pages}

- [機能の違い](../Feature-Differences/)
- [はじめに](../Getting-started/)

- [はじめに](../Getting-started/) に戻る
- [v4 の目次](../CONTENTS/) に戻る
