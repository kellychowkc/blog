import Link from 'next/link'
import styles from '../../styles/navbar.module.css'

export type NavitemInput = {
  text: string
  href?: string
  subtext?: string
  active: Boolean
}

const NavItem = ({ text, subtext, href, active }: NavitemInput) => {
  return (
    <div className={styles.navlink}>
      <h1 className={styles.linkText}>{text}</h1>
      <h6 className={styles.linkSubtext}>{subtext}</h6>
    </div>
  )
}

export default NavItem
