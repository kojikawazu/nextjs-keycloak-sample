'use client';

import { useEffect } from 'react';
import keycloak from '@/services/keycloak';

/**
 * ログインページ
 * @returns JSX.Element
 */
export default function SignInPage() {
    useEffect(() => {
        if (!keycloak.authenticated) {
            // 未ログインの場合は Keycloak へログイン
            keycloak.login({
                redirectUri: window.location.origin + '/home',
            });
        } else {
            // 既にログイン済みなら /home へリダイレクト
            window.location.href = '/home';
        }
    }, []);

    return <div>Redirecting to Keycloak login...</div>;
}
