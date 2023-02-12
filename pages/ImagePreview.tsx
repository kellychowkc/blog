import { useEffect, useState } from 'react'
import { Article, ImagePreviewProps, Post } from './schema/type'
import styles from '../styles/article.module.css'
import { fetchUrlPreview } from './api/fetchPreview'

function ImagePreview({ article }: ImagePreviewProps) {
  const [urlPreview, setUrlPreview] = useState<Post>({})
  const [defaultPic, setDefaultPic] = useState(false)

  if (article.id === 14) {
    article.image
  }
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
        console.log(error)
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
