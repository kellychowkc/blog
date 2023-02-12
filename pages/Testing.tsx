import { useState } from 'react'
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

function Testing() {
  const [urlPreview, setUrlPreview] = useState<Post>({})
  const [url, setUrl] = useState('')

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    const preview = await fetchUrlPreview(url)
    setUrlPreview(preview)
    console.log('Check', preview)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={url}
          onChange={(event) => setUrl(event.target.value)}
        />
        <button type="submit">Preview</button>
      </form>
      {urlPreview && (
        <div>
          <img src={urlPreview.ogImage} />
        </div>
      )}
    </div>
  )
}

export default Testing
