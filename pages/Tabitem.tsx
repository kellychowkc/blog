import Link from 'next/link'
import styles from '../styles/tab.module.css'
import { TabitemInput } from './schema/type'

const TabItem = ({ text, href, active }: TabitemInput) => {
  return (
    <div className={`${active ? styles.active : ''} ${styles.tabitem}`}>
      <h1 className={styles.tabText}>{text}</h1>
    </div>
  )
}

export default TabItem
