import MetaTags from 'react-meta-tags'
import styles from '../styles/article.module.css'
import React, { useEffect, useState } from 'react'
import ogs from 'open-graph-scraper'

interface Props {
  url: string
  title: string
  by?: string
  children?: React.ReactNode
}

function URLPreview() {
  try {
    const options = { url: 'https://www.ycombinator.com/' }
    console.log(options)
    // ogs(options)
  } catch (err) {
    console.log(err)
  }

  return <div></div>
}

export default URLPreview
