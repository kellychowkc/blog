import React, { useState } from 'react'
import styles from '../styles/tab.module.css'
import TabItem from './Tabitem'

const TabList = [
  {
    text: 'Everyday Health',
    href: '/everyday-health',
  },
  {
    text: 'All',
    href: '/blog',
  },
  {
    text: 'Hair',
    href: '/hair',
  },
  {
    text: 'Lifestyle',
    href: '/lifestyle',
  },
  {
    text: 'Mental Health',
    href: '/mental-health',
  },
  {
    text: 'Sex',
    href: '/sex',
  },
  {
    text: 'Skin',
    href: '/skin',
  },
]

function Tab() {
  const [navActive, setNavActive] = useState<Boolean>()
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <div className={styles.tabContainer}>
      {TabList.map((tab, idx) => (
        <div
          onClick={() => {
            setActiveIdx(idx)
            setNavActive(true)
          }}
          key={tab.text}
          className={styles.tabitem}
        >
          <TabItem active={activeIdx === idx} {...tab} />
        </div>
      ))}
    </div>
  )
}

export default Tab
