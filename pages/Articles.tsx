import React, { useEffect, useState } from 'react'
import { useQuery, useLazyQuery, gql } from '@apollo/client'

const query = gql`
  query GetArticleByID($id: ID) {
    item(id: $id) @rest(type: "story", path: "/{args.id}.json") {
      id
      title
      by
      time
      score
      url
    }
  }
`
type Article = {
  id: number
  deleted?: boolean
  type?: string
  by?: string
  time?: number
  dead?: boolean
  kids?: [number]
  descendants?: number
  score?: number
  title?: string
  url?: string
}

function Articles() {
  const [fetch] = useLazyQuery(query)
  const [articleList, setArticleList] = useState<Array<Article>>([])

  useEffect(() => {
    let list: Article[] = []
    const fetchData = async (time: number) => {
      const res = await fetch({
        variables: {
          id: time,
        },
      })
      return res
    }

    ;(async function () {
      for (let i = 1; i < 50; i++) {
        const result: any = await fetchData(i)
        //                     ^^^^^
        if (result) {
          list.push(result.data.item)
          continue
        }
      }
      setArticleList(list)
    })()
  }, [])

  return (
    <div>
      <h1>Articles</h1>
      <div>
        {articleList.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </div>
    </div>
  )
}

export default Articles
