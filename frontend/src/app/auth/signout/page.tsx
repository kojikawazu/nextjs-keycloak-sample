'use client';

import { useEffect } from 'react';
import keycloak from '@/services/keycloak';

/**
 * ログアウトページ
 * @returns JSX.Element
 */
export default function LogoutPage() {
    useEffect(() => {
        // Keycloak へログアウト
        keycloak.logout();
        // ログアウト後は /auth/signin へリダイレクト
        window.location.href = '/auth/signin';
    }, []);

    return <div>Logging out...</div>;
}
