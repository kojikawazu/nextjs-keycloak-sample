# マニュアル

## 0. 前提条件

```bash
# 以下のコマンドを実行して、prettier をインストール
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
```

- .eslintrc.json, .prettierrc を作成
- package.json に以下のコマンドを追加

```json
"format": "prettier --write \"**/*.{ts,tsx}\""
```

```bash
# フォーマットを実行
npm run format
# コードチェック
npm run lint
```

## 1. keycloak-js のインストール

```bash
# npm または yarn でインストール
npm install keycloak-js
# あるいは
yarn add keycloak-js
```
