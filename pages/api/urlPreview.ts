import cheerio from 'cheerio'
import { NextApiRequest, NextApiResponse } from 'next'
import fetch from 'node-fetch'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { url } = req.query
  const response = await fetch(url as string)
  const html = await response.text()

  const $ = cheerio.load(html)
  const ogImage = $('meta[property="og:image"]').attr('content')
  const ogTitle = $('meta[property="og:title"]').attr('content')
  const ogDescription = $('meta[property="og:description"]').attr('content')

  res.status(200).json({ ogImage, ogTitle, ogDescription })
}
