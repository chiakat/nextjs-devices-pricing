import Link from 'next/link';

import styles from '../styles/Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-device">
                        <a>Add device</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}