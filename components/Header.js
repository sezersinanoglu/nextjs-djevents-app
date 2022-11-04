import Link from 'next/link'
import styles from '@/styles/Header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>
            <Link href='/'>
            Dj Events
            </Link>
        </div>

        <nav>
            <ul>
                <li>
                    <Link href='/events'>
                    Events
                    </Link>
                </li>
                {/* <li>
                    <Link href='/events'>
                        <a>Events</a>
                    </Link>
                </li>
                <li>
                    <Link href='/events'>
                        <a>Events</a>
                    </Link>
                </li> */}
            </ul>
        </nav>
    </header>
  )
}
