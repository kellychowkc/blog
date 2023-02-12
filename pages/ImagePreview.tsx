import { useEffect, useState } from 'react'

import styles from '../styles/article.module.css'
import { fetchUrlPreview } from './api/fetchPreview'
import { Article } from './ArticlesList'

export type Post = {
  ogTitle?: string
  ogImage?: any
  ogDescription?: any
}

export interface ImagePreviewProps {
  article: Article
}

function ImagePreview({ article }: ImagePreviewProps) {
  const [urlPreview, setUrlPreview] = useState<Post>({})
  const [defaultPic, setDefaultPic] = useState(false)

  useEffect(() => {
    if (!article.url) {
      setDefaultPic(true)
      return
    }
    async function fetchPreview() {
      try {
        let link = article.url
        const preview = await fetchUrlPreview(link)
        setUrlPreview(preview!)

        if (!urlPreview.ogImage) {
          setDefaultPic(true)
        } else {
          setDefaultPic(false)
        }
      } catch (error) {
        setDefaultPic(true)
      }
    }

    fetchPreview()
  }, [defaultPic])

  return (
    <>
      {defaultPic ? (
        <div className={styles.imageBox}>
          <img src={article.image} alt="image" className={styles.image}></img>
        </div>
      ) : (
        <div className={styles.imageBox}>
          <img src={urlPreview.ogImage} alt="image" className={styles.image} />
        </div>
      )}
    </>
  )
}

export default ImagePreview
