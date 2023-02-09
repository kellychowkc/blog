import Link from 'next/link'
import React, { useState } from 'react'
import NavItem from './Navitem'
import styles from '../../styles/navbar.module.css'
import { RxCross2 } from 'react-icons/rx'
import { AiOutlineRight } from 'react-icons/ai'

const MenuList = [
  {
    text: 'Explore treatments',
    href: '/',
    subtext: 'Proven treatments for dozens of conditions',
  },
  {
    text: 'Shop products',
    href: '/',
    subtext: 'Trusted prescription and over-the-counter options',
  },
  {
    text: 'Meet Hims',
    href: '/',
    subtext: 'What we do, how we do it, and who we do it for',
  },
]
const Navbar = () => {
  const [navActive, setNavActive] = useState<Boolean>()
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <div className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoBox}>
          <Link href={'/'} className={styles.link}>
            <h1 className={styles.title}>hims</h1>
          </Link>
        </div>
        <div
          onClick={() => setNavActive(!navActive)}
          className={styles.navMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div
          className={`${navActive ? styles.active : ''} ${styles.navMenulist}`}
        >
          <div className={styles.menuListHead}>
            <div className={styles.signinBox}>Sign in</div>
            <div
              className={styles.buttonBox}
              onClick={() => {
                setNavActive(!navActive)
              }}
            >
              <RxCross2 className={styles.cross} />
            </div>
          </div>
          {MenuList.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
              className={styles.navitem}
            >
              <NavItem active={activeIdx === idx} {...menu} />
              <AiOutlineRight className={styles.right} />
            </div>
          ))}
        </div>
      </nav>
    </div>
  )
}

export default Navbar
