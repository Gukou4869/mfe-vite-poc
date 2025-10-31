# Module Federation POC with Vite

このプロジェクトは、Vite + Module Federationを使用したマイクロフロントエンドのProof of Concept（概念実証）です。

## 🏗 プロジェクト構成

```
mfe-vite-poc/
├── packages/
│   ├── shell/          # Host アプリケーション (Port: 5000)
│   ├── dashboard/      # Remote: Dashboard サービス (Port: 5001)
│   ├── products/       # Remote: Products サービス (Port: 5002)
│   ├── settings/       # Remote: Settings サービス (Port: 5003)
│   └── shared/         # 共通コンポーネント・テーマ
```

## 🎯 主な機能

- ✅ **Module Federation**: Viteを使用した複数のマイクロフロントエンドの統合
- ✅ **モノレポ構成**: pnpm workspacesによる効率的な依存関係管理
- ✅ **共通UIテーマ**: Chakra UIを使用した統一感のあるデザイン
- ✅ **グローバルヘッダー**: 全サービスで共有されるナビゲーション
- ✅ **サブルーティング**: 各サービス内での独立したルーティング
- ✅ **スタンドアロン実行**: 各Remoteサービスは独立して起動・開発可能

## 📋 前提条件

- Node.js v18以上
- pnpm v8以上

## 🚀 セットアップ

### 1. 依存関係のインストール

```bash
pnpm install
```

### 2. 各サービスの起動

#### すべてのサービスを同時に起動

```bash
pnpm dev:all
```

#### 個別に起動する場合

**Shell (Host)** - http://localhost:5000
```bash
pnpm dev:shell
```

**Dashboard** - http://localhost:5001
```bash
pnpm dev:dashboard
```

**Products** - http://localhost:5002
```bash
pnpm dev:products
```

**Settings** - http://localhost:5003
```bash
pnpm dev:settings
```

> **重要**: Module Federationを正しく動作させるには、Shellと使用したいRemoteサービスの両方を起動する必要があります。

## 🧪 動作確認手順

### 1. すべてのサービスを起動

```bash
pnpm dev:all
```

### 2. Shellアプリケーションにアクセス

ブラウザで http://localhost:5000 を開きます。

### 3. サービス間の遷移を確認

- **Home** → メインページ（Shell）
- **Dashboard** → Dashboard サービス（Remote）
  - `/dashboard` - ダッシュボードホーム
  - `/dashboard/overview` - 概要ページ
  - `/dashboard/analytics` - 分析ページ
- **Products** → Products サービス（Remote）
  - `/products` - 商品ホーム
  - `/products/list` - 商品一覧
  - `/products/detail/:id` - 商品詳細（動的ルーティング）
- **Settings** → Settings サービス（Remote）
  - `/settings` - 設定ホーム
  - `/settings/profile` - プロフィール設定
  - `/settings/account` - アカウント設定

### 4. サブルーティングの確認

各サービス内のナビゲーションボタンをクリックして、サブルート間の遷移を確認します。

### 5. スタンドアロン実行の確認

個々のRemoteサービスも独立して起動・表示できることを確認します：

```bash
# Dashboardのみを起動
pnpm dev:dashboard
# http://localhost:5001/dashboard にアクセス
```

## 🏗 ビルド

### すべてのサービスをビルド

```bash
pnpm build:all
```

ビルドは以下の順序で実行されます：
1. shared（共通パッケージ）
2. dashboard, products, settings（Remoteサービス）
3. shell（Host）

### プレビュー

```bash
pnpm preview:shell
```

## 📦 技術スタック

- **モノレポ**: pnpm workspaces
- **ビルドツール**: Vite 5
- **Module Federation**: @originjs/vite-plugin-federation
- **フレームワーク**: React 18
- **言語**: TypeScript 5
- **ルーティング**: React Router DOM v6
- **UIライブラリ**: Chakra UI v2
- **スタイリング**: Chakra UI (Emotion / CSS-in-JS)

## 📚 Module Federationの動作

### Host (Shell)

`packages/shell/vite.config.ts` でRemoteサービスを設定：

```typescript
federation({
  name: 'shell',
  remotes: {
    dashboard: 'http://localhost:5001/assets/remoteEntry.js',
    products: 'http://localhost:5002/assets/remoteEntry.js',
    settings: 'http://localhost:5003/assets/remoteEntry.js',
  },
  shared: ['react', 'react-dom', 'react-router-dom', '@chakra-ui/react', ...],
})
```

### Remote (各サービス)

各Remoteサービスは自身のルーターを公開：

```typescript
federation({
  name: 'dashboard', // or 'products', 'settings'
  filename: 'remoteEntry.js',
  exposes: {
    './Router': './src/router/index.tsx',
  },
  shared: ['react', 'react-dom', 'react-router-dom', '@chakra-ui/react', ...],
})
```

### 共有依存関係

以下のパッケージは全サービスで共有されます：
- react
- react-dom
- react-router-dom
- @chakra-ui/react
- @emotion/react
- @emotion/styled
- framer-motion

これにより、重複する依存関係のロードを回避し、パフォーマンスを最適化しています。

## 🎨 共通テーマ

`packages/shared` パッケージで定義されたChakra UIテーマが全サービスで使用されます：

- カスタムカラーパレット
- 統一されたフォント設定
- 共通のコンポーネントスタイル
- レスポンシブ対応

## 🔍 トラブルシューティング

### Remoteサービスが読み込めない

- すべての必要なサービスが起動しているか確認
- ポート（5000-5003）が他のプロセスで使用されていないか確認
- ブラウザのコンソールでエラーメッセージを確認

### 型エラーが出る

```bash
# TypeScriptのビルドを実行
pnpm build:all
```

### 依存関係の問題

```bash
# node_modulesを削除して再インストール
rm -rf node_modules packages/*/node_modules
pnpm install
```

## 📝 開発のベストプラクティス

1. **新しいRemoteサービスの追加**: 既存のRemote（dashboard, products, settings）の構造を参考に
2. **共通コンポーネント**: `packages/shared` に追加して全サービスで再利用
3. **テーマのカスタマイズ**: `packages/shared/src/theme` で一元管理
4. **ルーティング**: 各サービスは `/service-name/*` パターンに従う

## 📄 ライセンス

ISC

## 👥 作成者

MFE POC Team

