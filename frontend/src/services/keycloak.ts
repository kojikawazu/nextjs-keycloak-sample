import Keycloak from 'keycloak-js';

// 例: http://localhost:8080/realms/<REALM_NAME>
const keycloak = new Keycloak({
    url: 'http://localhost:8080', // Keycloakのエンドポイント (末尾に /auth が不要なバージョンが多い)
    realm: 'myrealm', // Realm名
    clientId: 'myclient', // Keycloak側で作成したクライアントID
});

export default keycloak;
