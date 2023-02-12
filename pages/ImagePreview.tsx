import { useEffect, useState } from 'react'
import { Post } from './schema/type'

async function fetchUrlPreview(url: string) {
  const response = await fetch(`/api/urlPreview?url=${encodeURIComponent(url)}`)
  const { ogImage, ogTitle, ogDescription } = await response.json()

  return {
    url,
    ogImage,
    ogTitle,
    ogDescription,
  }
}

type ImageLink = {
  imagelink: string
}

function ImagePreview(imagelink: ImageLink) {
  const [urlPreview, setUrlPreview] = useState<Post>({})
  const [url, setUrl] = useState('')

  useEffect(() => {
    async function fetchPreview() {
      try {
        let link = imagelink.imagelink
        setUrl(link)
        const preview = await fetchUrlPreview(url)
        setUrlPreview(preview)
        console.log('Check', preview)
      } catch (error) {}
    }

    fetchPreview()
  }, [])

  return (
    <div>
      {urlPreview && (
        <div>
          <img src={urlPreview.ogImage} />
        </div>
      )}
    </div>
  )
}

export default ImagePreview
