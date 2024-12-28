'use client';

import { useEffect } from 'react';
import keycloak from '@/services/keycloak';

/**
 * 保護されたページ
 * @returns JSX.Element
 */
export default function Home() {
    useEffect(() => {
        const cloak = () => {
            if (!keycloak.authenticated) {
                // 未ログインの場合は login ページへリダイレクトなど
                if (typeof window !== 'undefined') {
                    window.location.href = '/';
                }
                return null;
            }
        };

        cloak();
    }, []);

    return (
        <div style={{ padding: 20 }}>
            <h1>Protected Page (Only logged-in users can see this)</h1>
            <p>Welcome, {keycloak.tokenParsed?.preferred_username}!</p>
            <button
                onClick={() => {
                    keycloak.logout();
                }}
            >
                Sign Out
            </button>
        </div>
    );
}
