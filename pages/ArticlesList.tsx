import React, { useEffect, useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import styles from '../styles/article.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

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

  const [articleList, setArticleList] = useState<Array<Article>>()

  useEffect(() => {
    let list: Article[] = []
    const fetchData = async (time: number) => {
      try {
        const res = await fetch({
          variables: {
            id: time,
          },
        })
        return res
      } catch (error) {}
    }

    ;(async function () {
      for (let i = 1; i < 20; i++) {
        try {
          const result: any = await fetchData(i)
          if (result) {
            const item = result.data.item
            if (!list.find((existingItem) => existingItem.id === item.id)) {
              list.push(item)
            }
          }
        } catch (error) {}
      }
      setArticleList(list)
    })()
  }, [])

  console.log(articleList)

  return (
    <Container className={styles.container}>
      <Row>
        {articleList!.map((article) => (
          <div key={article.id}>{article.title}</div>
        ))}
      </Row>
    </Container>
  )
}

export default Articles
