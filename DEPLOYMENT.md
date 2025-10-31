# Vercel デプロイガイド

このプロジェクトは Module Federation を使用したマイクロフロントエンド構成で、4つの独立したアプリケーション（shell、dashboard、products、settings）で構成されています。

## 📋 前提条件

- Vercel アカウント（無料プランで問題ありません）
- Vercel CLI: `npm install -g vercel` または `pnpm add -g vercel`
- Git リポジトリがセットアップされていること

## 🚀 デプロイ手順

### ステップ 1: Remote アプリケーションをデプロイ

Remote アプリケーション（dashboard、products、settings）を先にデプロイします。これらのURLが shell アプリケーションの環境変数として必要になります。

#### 1.1 Dashboard のデプロイ

```bash
cd packages/dashboard
vercel
```

デプロイ時の質問に答えます：
- **Set up and deploy**: Yes
- **Which scope**: 自分のアカウントを選択
- **Link to existing project**: No
- **Project name**: `mfe-dashboard` (または任意の名前)
- **Directory**: `./` (現在のディレクトリ)

デプロイが完了したら、表示されるURLをメモしておきます（例：`https://mfe-dashboard-xxx.vercel.app`）

#### 1.2 Products のデプロイ

```bash
cd ../products
vercel
```

同様にデプロイし、URLをメモします（例：`https://mfe-products-xxx.vercel.app`）

#### 1.3 Settings のデプロイ

```bash
cd ../settings
vercel
```

同様にデプロイし、URLをメモします（例：`https://mfe-settings-xxx.vercel.app`）

### ステップ 2: Shell アプリケーションに環境変数を設定

取得した3つのURLを使用して、shell アプリケーションをデプロイします。

#### 2.1 Shell のデプロイ

```bash
cd ../shell
vercel
```

#### 2.2 Vercel ダッシュボードで環境変数を設定

1. [Vercel ダッシュボード](https://vercel.com/dashboard) にアクセス
2. デプロイした shell プロジェクトを選択
3. **Settings** → **Environment Variables** に移動
4. 以下の環境変数を追加：

| 変数名 | 値 | 環境 |
|--------|-----|------|
| `VITE_DASHBOARD_URL` | `https://mfe-dashboard-xxx.vercel.app` | Production, Preview, Development |
| `VITE_PRODUCTS_URL` | `https://mfe-products-xxx.vercel.app` | Production, Preview, Development |
| `VITE_SETTINGS_URL` | `https://mfe-settings-xxx.vercel.app` | Production, Preview, Development |

#### 2.3 Shell を再デプロイ

環境変数を設定したら、再度デプロイして環境変数を適用します：

```bash
vercel --prod
```

### ステップ 3: 動作確認

Shell アプリケーションのURLにアクセスし、以下を確認します：

1. ✅ ページが正常に表示される
2. ✅ GlobalHeader が表示される
3. ✅ Dashboard、Products、Settings へのナビゲーションが動作する
4. ✅ 各サービス内のサブルーティングが動作する

ブラウザの開発者ツール（Network タブ）で `mf-manifest.json` が正しくロードされているか確認してください。

## 🔄 更新とデプロイ

### Remote アプリの更新

Remote アプリ（dashboard、products、settings）を更新する場合：

```bash
cd packages/dashboard  # または products, settings
vercel --prod
```

Shell アプリは自動的に最新の Remote を読み込みます（再デプロイ不要）。

### Shell アプリの更新

Shell アプリ自体を更新する場合：

```bash
cd packages/shell
vercel --prod
```

## 🌍 本番環境とプレビュー環境

Vercel は自動的に以下の環境を作成します：

- **Production**: `main` ブランチへのプッシュで自動デプロイ
- **Preview**: プルリクエストごとに独立した環境を作成

### プレビュー環境での環境変数

プレビュー環境でも本番の Remote URL を使用する場合は、環境変数の設定で "Preview" 環境も選択してください。

独立したプレビュー環境を構築する場合は、各 Remote アプリもプレビューデプロイし、そのURLを環境変数に設定します。

## 🐛 トラブルシューティング

### Remote が読み込めない

**症状**: Shell アプリで Remote が表示されない

**解決方法**:
1. Remote アプリが正常にデプロイされているか確認
2. Shell の環境変数が正しく設定されているか確認
3. CORS エラーがないかブラウザのコンソールを確認
4. Remote アプリの `vercel.json` で CORS ヘッダーが設定されているか確認

### ビルドエラー

**症状**: Vercel でビルドが失敗する

**解決方法**:
1. ローカルで `pnpm build:all` を実行してビルドが成功するか確認
2. `vercel.json` の `buildCommand` が正しいか確認
3. Vercel のビルドログを確認してエラーの詳細を特定

### 環境変数が反映されない

**症状**: 環境変数を設定したのに反映されない

**解決方法**:
1. 環境変数を設定した後、必ず再デプロイが必要です
2. 環境変数名が `VITE_` で始まっているか確認（Vite の要件）
3. Vercel ダッシュボードで正しい環境（Production/Preview/Development）に設定されているか確認

### モノレポでのビルド失敗

**症状**: `pnpm` や共有パッケージが見つからない

**解決方法**:
1. `vercel.json` の `buildCommand` がルートディレクトリから実行されているか確認
2. `installCommand` が正しく設定されているか確認
3. ビルド順序を確認（shared → remote → shell）

## 📊 コスト

Vercel の無料プランで以下が利用可能です：

- ✅ 無制限のプロジェクト数（4つのMFEアプリをすべてデプロイ可能）
- ✅ 100GB/月の帯域幅
- ✅ 無制限のプレビューデプロイ
- ✅ カスタムドメイン（独自ドメインを設定可能）

無料プランで十分に運用できます。

## 🔐 セキュリティ

### CORS設定

Remote アプリ（dashboard、products、settings）の `vercel.json` には CORS ヘッダーが設定されています：

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Access-Control-Allow-Origin",
          "value": "*"
        }
      ]
    }
  ]
}
```

本番環境では、セキュリティ向上のため `"*"` を特定のドメインに変更することを推奨します：

```json
{
  "key": "Access-Control-Allow-Origin",
  "value": "https://your-shell-app.vercel.app"
}
```

## 🔗 便利なコマンド

### すべてのアプリを一括デプロイ（本番環境）

```bash
# Root ディレクトリから
cd packages/dashboard && vercel --prod && \
cd ../products && vercel --prod && \
cd ../settings && vercel --prod && \
cd ../shell && vercel --prod
```

### ローカルプレビュー

Vercel でのビルドをローカルで確認：

```bash
vercel build
vercel dev
```

## 📚 参考リソース

- [Vercel Documentation](https://vercel.com/docs)
- [Module Federation](https://module-federation.io/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)
- [pnpm Workspaces](https://pnpm.io/workspaces)

## 🎉 デプロイ完了

デプロイが完了したら、以下のURLで確認できます：

- **Shell (Host)**: `https://your-shell-app.vercel.app`
- **Dashboard**: `https://your-shell-app.vercel.app/dashboard`
- **Products**: `https://your-shell-app.vercel.app/products`
- **Settings**: `https://your-shell-app.vercel.app/settings`

各 Remote アプリも独立してアクセス可能です：

- `https://mfe-dashboard-xxx.vercel.app`
- `https://mfe-products-xxx.vercel.app`
- `https://mfe-settings-xxx.vercel.app`

