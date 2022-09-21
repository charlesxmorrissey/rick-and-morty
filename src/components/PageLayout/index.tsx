import Link from 'next/link'

import styles from './PageLayout.module.css'

interface Props {
  children: React.ReactNode
}

const PageLayout: React.FC<Props> = ({ children }) => (
  <main className={styles.pageWrapper}>
    <header className={styles.pageHeader}>
      <Link href='/'>
        <a>Rick and Morty</a>
      </Link>
    </header>

    <section className={styles.pageContainer}>
      <div className={styles.pageContent}>{children}</div>
    </section>

    <footer className={styles.pageFooter}>
      <div className={styles.pageHeaderContainer}>
        Rick and Morty @{new Date().getFullYear()}
      </div>
    </footer>
  </main>
)

export default PageLayout
