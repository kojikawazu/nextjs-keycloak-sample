import Link from 'next/link';

/**
 * ホームページ
 * @returns JSX.Element
 */
export default function IndexPage() {
    return (
        <div style={{ padding: 20 }}>
            <h1>Next.js + Keycloak Sample</h1>
            <p>
                <Link href="/auth/signin">Login</Link> | 
                <Link href="/home">Protected Page</Link> |
                <Link href="/auth/signout">Logout</Link>
            </p>
        </div>
    );
}
