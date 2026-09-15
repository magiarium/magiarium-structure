# 『まぎありうむ』共通定義

個人ブログ『まぎありうむ』のクライアントおよびバックエンドで使用する共通の型定義・定数などをまとめたリポジトリです。

## 開発環境の構築

1. リポジトリをクローンする

```bash
git clone XXX
```

2. インストール

```bash
npm install
```

3. 必要に応じて、IDEに以下の拡張機能をインストールする(下記はVSCodeの場合)

| 拡張機能名                | 用途                       |
| ------------------------- | -------------------------- |
| ESLint                    | ESLintによるコードチェック |
| Prettier - Code formatter | コードフォーマット         |

4. 型定義を修正する場合は `src` 配下を修正し、下記ビルドコマンドを実行して `dist` に反映する。

```bash
npm run build
```

> **注意**  
> 本パッケージはGitHubリポジトリから直接インストールするため、利用側ではビルド済みの dist が必要です。  
> そのためコミット・プッシュには dist の変更内容も含めてください。

## インストール

1.本リポジトリを利用する場合、下記コマンドでインストールできます。

```bash
npm install github:magiarium/magiarium-structure
```

※型定義のみを利用（実行時に本パッケージを参照しない場合）は下記

```bash
npm install -D github:magiarium/magiarium-structure
```

## 使い方

インストール後、パッケージ名を指定して定義を利用できます。

```typescript
import type { ItemData } from '@magiarium/structure';
import { ITEM_TYPES } from '@magiarium/structure';
```
