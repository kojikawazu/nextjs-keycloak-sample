# Node.jsベースイメージを指定 (バージョンは任意)
FROM node:20

# コンテナ内の作業ディレクトリ
WORKDIR /usr/src/app

# package.json / yarn.lockを先にコピー
COPY package.json package-lock.json ./

# 依存関係をインストール
RUN npm install

# ソースコードをコピー
COPY . .

# Next.jsで開発サーバを起動 (docker-compose.yml の command で実行)
CMD ["npm", "run", "dev"]