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
          <Link href="/devices/view">
            <a>View Devices</a>
          </Link>
        </li>
        <li>
          <Link href="/devices/add">
            <a>Add Device</a>
          </Link>
        </li>
        <li>
          <Link href="/devices/edit">
            <a>Edit</a>
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
