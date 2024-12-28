import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import KeycloakProvider from '@/provider/KeycloakProvider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

/**
 * メタデータ
 */
export const metadata: Metadata = {
    title: 'Next.js Keycloak Sample',
    description: 'Next.js Keycloak Sample',
};

/**
 * ルートレイアウト
 * @param children 子要素
 * @returns JSX.Element
 */
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className={inter.className}>
                <KeycloakProvider>{children}</KeycloakProvider>
            </body>
        </html>
    );
}
