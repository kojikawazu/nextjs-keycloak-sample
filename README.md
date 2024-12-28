# Cloak を使った認証系

## Summary

- Cloak を使った認証系をどうやって Next.js で実装するかを調査した。その記録を記す。
- 開発用の為、データベースは Keycloak のメモリ上に保存される。

## KeyCloakについて

[Keycloak について、こちらを参照してください。](./frontend/manuals/keycloak.md)

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)
![Keycloak](https://img.shields.io/badge/Keycloak-000000?style=for-the-badge&logo=keycloak&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-000000?style=for-the-badge&logo=tailwindcss&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-000000?style=for-the-badge&logo=typescript&logoColor=white)
![NGINX](https://img.shields.io/badge/NGINX-000000?style=for-the-badge&logo=nginx&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-000000?style=for-the-badge&logo=docker&logoColor=white)

## ディレクトリ構造

```bash
.
├── README.md
├── docker-compose.yml
├── frontend
│   ├── Dockerfile
│   └── (Next.jsプロジェクト)
└── nginx
    └── default.conf
```

## 実行方法

```bash
docker compose up -d
```

## 参考URL

- [Keycloak](https://www.keycloak.org/)
- [Next.js](https://nextjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [NGINX](https://www.nginx.com/)
- [Docker](https://www.docker.com/)