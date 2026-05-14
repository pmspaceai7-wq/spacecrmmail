<div align="center">
  <a name="readme-top"></a>
  <img src="https://mail.spacecrm.net/static/image/logo.ee11f2b3.png" alt="SpaceCRM Mail" width="180"/>
  <h1><a href="https://spacecrm.net/" target="_blank">SpaceCRM Mail 📧</a></h1>

## スマートなキャンペーンのためのオープンソースメールサーバー／メールマガジン／Eメールマーケティングソリューション

[![][license-shield]][license-link] [![][docs-shield]][docs-link] [![][github-release-shield]][github-release-link] [![][github-stars-shield]][github-stars-link]

[English](README.md) | [简体中文](README-zh_CN.md) | 日本語 | [Türkçe](README-tr.md)
</div>
<br/>

## SpaceCRM Mail とは？

SpaceCRM Mail は、ビジネスや個人がメールキャンペーンを簡単に管理できるよう設計された**強力なオープンソースのメールサーバー兼Eメールマーケティングプラットフォーム**です。ニュースレター、プロモーションメール、取引通知などを送信する際に、メールマーケティングのすべてを**完全にコントロール**できます。**高度な分析機能**や**顧客管理機能**を活用し、プロフェッショナルのようにメールを作成、送信、トラッキングできます。

![SpaceCRM Mail](https://mail.spacecrm.net/static/image/logo.ee11f2b3.png)

# たった3ステップでメールを大規模に送信！
**強力なメールマーケティング。あらゆるビジネスに。セルフホスト。**

### Step 1️⃣ SpaceCRM Mail のインストール
✅ インストールから**8分**で**✅ メール送信成功**まで完了します
```shell
cd /opt && git clone https://github.com/pmspaceai7-wq/spacecrmmail && cd spacecrmmail && bash install.sh
```

### Step 2️⃣ ドメインを接続する

* 送信ドメインを追加
* DNSレコードを検証
* 無料SSLを自動有効化

### Step 3️⃣ キャンペーンを構築する

* メールを作成または貼り付け
* リストとタグを選択
* 送信日時を設定または今すぐ送信


## Dockerインストール

**Docker**（Dockerとdocker-compose-pluginを手動でインストールし、.envファイルを編集してください）

```shell
cd /opt && git clone https://github.com/pmspaceai7-wq/spacecrmmail && cd spacecrmmail && cp env_init .env && docker compose up -d || docker-compose up -d
```

## 管理スクリプト

* 管理ヘルプ

  `bm help`

* デフォルトログイン情報を表示

  `bm default`

* ドメインのDNSレコードを表示

  `bm show-record`

* SpaceCRM Mail を更新

  `bm update`

## Webメール

SpaceCRM Mail には**RoundCube**が統合されており、`/roundcube/`からWebメールにアクセスできます。

## なぜ SpaceCRM Mail を選ぶのか？

ほとんどのEメールマーケティングプラットフォームは**高価**、**クローズドソース**、または**基本機能が不足**しています。SpaceCRM Mail はこれらと異なります：

✅ **完全オープンソース** – 隠れたコストなし、ベンダーロックインなし。
📊 **高度な分析機能** – メール配信、開封率、クリック率などを追跡。
📧 **送信数無制限** – 送信メール数に制限なし。
🎨 **カスタマイズ可能なテンプレート** – プロフェッショナルなマーケティングテンプレートを再利用可能。
🔒 **プライバシーファースト** – データは自分のサーバーにあり、サードパーティによる追跡なし。
🚀 **セルフホスト** – 自分のサーバーで実行し、完全にコントロール可能。

## どうすれば貢献できるか 🌟

SpaceCRM Mail は**コミュニティ主導のプロジェクト**であり、皆さんのサポートが必要です！以下の方法でご参加ください：

1. **このリポジトリにスターを付ける**：スターを付けて関心を示しましょう。
2. **情報を拡散する**：開発者、マーケター、オープンソース愛好家に SpaceCRM Mail を紹介しましょう。
3. **フィードバックを共有する**：Issueを立てるかディスカッションに参加して、どんな機能がほしいか教えてください。
4. **コントリビュートする**：コミュニティからの貢献を歓迎します。オープンなIssueを確認して始めましょう！

---

📧 **SpaceCRM Mail – オープンソースEメールマーケティングの未来。**

## Issues

問題が発生したり機能リクエストがある場合は、[Issueを作成](https://github.com/pmspaceai7-wq/spacecrmmail/issues)してください。以下を含めると助かります：

* 問題またはリクエストの明確な説明
* 再現手順（該当する場合）
* スクリーンショットやエラーログ（該当する場合）

## 今すぐインストール

✅ インストールから**8分**で**メール送信成功**まで完了します

```shell
cd /opt && git clone https://github.com/pmspaceai7-wq/spacecrmmail && cd spacecrmmail && bash install.sh
```

**Dockerでインストール:**（Dockerとdocker-compose-pluginを手動でインストールし、.envファイルを編集してください）

```shell
cd /opt && git clone https://github.com/pmspaceai7-wq/spacecrmmail && cd spacecrmmail && cp env_init .env && docker compose up -d || docker-compose up -d
```

## ライセンス

SpaceCRM Mail は**AGPLv3ライセンス**のもとで公開されています。これにより以下が可能です：

✅ ソフトウェアを無料で使用する
✅ コードを改変・再配布する
✅ プライベート利用に制限なし

詳細は[LICENSE](LICENSE)ファイルをご覧ください。

---

<!-- SpaceCRM Mail official link -->
[docs-link]: https://spacecrm.net/

<!-- SpaceCRM Mail Other links -->
[license-link]: https://www.gnu.org/licenses/agpl-3.0.html
[github-release-link]: https://github.com/pmspaceai7-wq/spacecrmmail/releases/latest
[github-stars-link]: https://github.com/pmspaceai7-wq/spacecrmmail
[github-issues-link]: https://github.com/pmspaceai7-wq/spacecrmmail/issues

<!-- Shield links -->
[docs-shield]: https://img.shields.io/badge/documentation-148F76
[github-release-shield]: https://img.shields.io/github/v/release/pmspaceai7-wq/spacecrmmail
[github-stars-shield]: https://img.shields.io/github/stars/pmspaceai7-wq/spacecrmmail?color=%231890FF&style=flat-square
[license-shield]: https://img.shields.io/github/license/pmspaceai7-wq/spacecrmmail
