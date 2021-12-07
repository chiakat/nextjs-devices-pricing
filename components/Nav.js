import Link from 'next/link';
import styles from '../styles/nav.module.css';

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
          <Link href="/view-devices">
            <a>View Devices</a>
          </Link>
        </li>
        <li>
          <Link href="/add-device">
            <a>Add Device</a>
          </Link>
        </li>
        <li>
          <Link href="/update-device">
            <a>Update/Delete</a>
          </Link>
        </li>
        <li>
          <Link href="/pricing">
            <a>Pricing</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
