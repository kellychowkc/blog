import Link from 'next/link'
import styles from '../styles/tab.module.css'

export type TabitemInput = {
  text: string
  href?: string
  active: Boolean
}

const TabItem = ({ text, href, active }: TabitemInput) => {
  return (
    <div className={`${active ? styles.active : ''} ${styles.tabitem}`}>
      <h1 className={styles.tabText}>{text}</h1>
    </div>
  )
}

export default TabItem
