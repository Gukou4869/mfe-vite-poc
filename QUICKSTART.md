# クイックスタートガイド

## 🚀 5 分で始める Module Federation POC

### ステップ 1: 依存関係のインストール

```bash
pnpm install
```

### ステップ 2: すべてのサービスを起動

```bash
pnpm dev:all
```

このコマンドで以下のサービスが同時に起動します：

- **Shell (Host)**: http://localhost:5000
- **Dashboard**: http://localhost:5001
- **Products**: http://localhost:5002
- **Settings**: http://localhost:5003

### ステップ 3: ブラウザでアクセス

http://localhost:5000 を開きます。

### ステップ 4: Module Federation の動作を確認

1. **GlobalHeader**をクリックしてサービス間を移動

   - Home → Shell のホームページ
   - Dashboard → Dashboard Remote
   - Products → Products Remote
   - Settings → Settings Remote

2. **各サービスのサブルート**を確認

   #### Dashboard サービス

   - Dashboard Home: http://localhost:5000/dashboard
   - Overview: http://localhost:5000/dashboard/overview
   - Analytics: http://localhost:5000/dashboard/analytics

   #### Products サービス

   - Products Home: http://localhost:5000/products
   - Product List: http://localhost:5000/products/list
   - Product Detail: http://localhost:5000/products/detail/1

   #### Settings サービス

   - Settings Home: http://localhost:5000/settings
   - Profile: http://localhost:5000/settings/profile
   - Account: http://localhost:5000/settings/account

3. **スタンドアロン実行**を確認

   各 Remote サービスは独立して動作できます：

   ```bash
   # 別のターミナルで
   pnpm dev:dashboard
   # http://localhost:5001/dashboard にアクセス
   ```

## ✅ 動作確認のポイント

### Module Federation が正しく動作している証拠

1. **ページリロードなしの遷移**: サービス間の移動でページ全体がリロードされない
2. **共通テーマ**: すべてのサービスで同じ Chakra UI テーマが適用されている
3. **GlobalHeader**: すべてのページで共通のヘッダーが表示される
4. **独立したルーティング**: 各サービスが自身のサブルートを管理
5. **動的ロード**: ブラウザの開発者ツール（Network）で `remoteEntry.js` の読み込みを確認

### 開発者ツールでの確認

1. ブラウザの開発者ツールを開く（F12）
2. **Network**タブを開く
3. Dashboard リンクをクリック
4. `remoteEntry.js` が読み込まれることを確認
5. **Console**タブで React Router のナビゲーションログを確認

## 🔧 トラブルシューティング

### ポートが既に使用されている

```bash
# 使用中のポートを確認
lsof -i :5000
lsof -i :5001
lsof -i :5002
lsof -i :5003

# プロセスを終了
kill -9 [PID]
```

### Remote が読み込めない

1. すべてのサービスが起動しているか確認

   ```bash
   # 各ターミナルでログを確認
   ```

2. ブラウザのコンソールでエラーを確認

3. キャッシュをクリア
   - ブラウザの開発者ツール → Network → Disable cache にチェック
   - ページをリロード

### TypeScript エラー

```bash
# 型定義を再生成
pnpm install
```

## 📊 POC で確認できる機能

### ✅ 実装済み

- [x] Module Federation による複数サービスの統合
- [x] pnpm workspaces によるモノレポ管理
- [x] 共通 UI テーマ（Chakra UI）
- [x] GlobalHeader コンポーネントの共有
- [x] サービス間のルーティング
- [x] 各サービス内のサブルーティング
- [x] 動的ルーティング（`/products/detail/:id`）
- [x] 独立した Remote 実行
- [x] 共有依存関係の最適化
- [x] TypeScript 完全対応

### 📝 今後の拡張案

- [ ] 状態管理の共有（Redux/Zustand）
- [ ] 認証・認可の統合
- [ ] エラーバウンダリーの実装
- [ ] ローディング状態の改善
- [ ] E2E テストの追加
- [ ] CI パイプラインの構築
- [ ] プロダクションビルドの最適化

## 🎓 学習ポイント

この POC を通じて以下を学ぶことができます：

1. **Module Federation の基本**: Remote と Host の関係
2. **共有依存関係**: `shared` 設定の重要性
3. **ルーティング統合**: React Router との組み合わせ
4. **コンポーネント共有**: 共通 UI ライブラリの活用
5. **モノレポ管理**: pnpm workspaces の使い方
6. **TypeScript 統合**: 型安全なマイクロフロントエンド

## 🔗 次のステップ

1. **コードを読む**: 各サービスの `vite.config.ts` を確認
2. **新しい Remote を追加**: 既存のパターンを参考に
3. **共通コンポーネントを作る**: `packages/shared` に追加
4. **テーマをカスタマイズ**: `packages/shared/src/theme` を編集
5. **プロダクションビルド**: `pnpm build:all` を実行

詳細は [README.md](./README.md) を参照してください。
