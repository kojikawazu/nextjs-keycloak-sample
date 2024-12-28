'use client';

import { ReactNode, useEffect, useState } from 'react';
import keycloak from '@/services/keycloak';

/**
 * KeycloakProvider
 * @param children 子要素
 * @returns JSX.Element
 */
export default function KeycloakProvider({ children }: { children: ReactNode }) {
    // 初期化呼び出し済みかどうか
    const [initStarted, setInitStarted] = useState(false);
    // 初期化処理が完了したかどうか (認証済みとは別)
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        // まだ init() を呼んでいない場合のみ実行
        if (!initStarted) {
            setInitStarted(true);

            // ここで初回の init() を呼び出す
            console.log('Keycloak init start');
            keycloak
                .init({ onLoad: 'check-sso' })
                .then((auth) => {
                    console.log('Keycloak init done, authenticated=', auth);
                    setInitialized(true);
                })
                .catch((err) => console.error('Keycloak init error:', err));
        }
    }, [initStarted]);

    // initialized = true になったらアプリを表示するなどの制御も可能
    if (!initialized) {
        return <div>Loading Keycloak...</div>;
    }

    return <>{children}</>;
}
