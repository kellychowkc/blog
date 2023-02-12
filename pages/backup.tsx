import React, { useEffect, useState } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import styles from '../styles/article.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { RxCross2 } from 'react-icons/rx'
import { BiAddToQueue } from 'react-icons/bi'
import { fetchPreview } from './api/fetchPreview'

export interface Article {
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
  url: string
  image?: string | any | null
  description?: string
  new?: Boolean
  defaultPic?: Boolean
}

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

function Articles() {
  const [fetch] = useLazyQuery(query)
  const [postActive, setPostActive] = useState<Boolean>()
  const [articleList, setArticleList] = useState<Array<Article>>()
  const [imageStore, setImageStore] = useState('')
  const [state, setState] = useState({
    id: 0,
    title: '',
    url: '',
    description: '',
    image: null,
    new: true,
  })

  function handleChange(e: any) {
    let id = articleList!.length + 2
    if (e.target.files) {
      setState({
        ...state,
        [e.target.name]: e.target.files[0],
        ['id']: id,
      })
    } else {
      setState({ ...state, [e.target.name]: e.target.value, ['id']: id })
    }
  }

  function handleSubmit(e: any) {
    e.preventDefault()
    let newList = articleList
    newList!.unshift(state)
    setPostActive(!postActive)
  }

  function handleImageChange(e: any) {
    let id = articleList!.length + 2
    const file = e.target.files[0]
    const reader = new FileReader()
    const url = reader.readAsDataURL(file)
    reader.onloadend = function (e) {
      setImageStore(reader.result as string)
      setState({ ...state, ['image']: file, ['id']: id })
    }
  }

  useEffect(() => {
    let list: Article[] = []
    let updateList: Article[] = []
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
      for (let i = 1; i < 5; i++) {
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

      console.log(list)

      list.forEach(async (article: Article) => {
        if (!article.url && article.id < 11) {
          let updatedArticle = Object.assign({}, article, {
            image: `/image/image${article.id}.jpeg`,
          })
          console.log('check1', article.id, updatedArticle)
          return updateList.push(updatedArticle)
        } else if (!article.url && article.id > 11) {
          let newId = article.id - 10
          let updatedArticle = Object.assign({}, article, {
            image: `/image/image${newId}.jpeg`,
          })
          console.log('check2', article.id, updatedArticle)
          return updateList.push(updatedArticle)
        } else if (article.url) {
          let updatedArticle = await fetchPreview(article)
          console.log('check3', updatedArticle)
          await updateList.push(updatedArticle)
        }
      })
      console.log('check4', updateList)
      await setArticleList(updateList)
    })()
  }, [])

  console.log('check5', !articleList)
  return (
    <>
      <Container className={styles.container}>
        <Row className={styles.box}>
          {articleList &&
            articleList.map((article, index) => (
              <div key={index}>
                <div className={styles.post}>
                  {article.new ? (
                    <div className={styles.imageBox}>
                      <img
                        src={imageStore}
                        alt="image"
                        className={styles.image}
                      ></img>
                    </div>
                  ) : (
                    <div className={styles.imageBox}>
                      <img
                        src={article.image}
                        alt="image"
                        className={styles.image}
                      ></img>
                    </div>
                  )}
                  <div className={styles.content}>
                    <h2 className={styles.title}>{article.title}</h2>
                    <p className={styles.subtitle}>{article.by}</p>
                    <a href={article.url} target={'_blank'} rel={'noreferrer'}>
                      <h6 className={styles.read}>READ THIS ARTICLE</h6>
                    </a>
                  </div>
                </div>
                <div className={styles.line}></div>
              </div>
            ))}
        </Row>
      </Container>
      <div>
        <div
          onClick={() => setPostActive(!postActive)}
          className={styles.newPostMenu}
        >
          <BiAddToQueue className={styles.addbtn} />
        </div>
        <div
          className={`${postActive ? styles.active : ''} ${
            styles.newPostMenuList
          }`}
        >
          <div className={styles.menuListHead}>
            <div className={styles.titleBox}>
              <h1 className={styles.newTitle}>New Article</h1>
            </div>
            <div
              className={styles.buttonBox}
              onClick={() => {
                setPostActive(!postActive)
              }}
            >
              <RxCross2 className={styles.cross} />
            </div>
          </div>
          <form onSubmit={handleSubmit} className={styles.form}>
            <label htmlFor="title" className={styles.label}>
              Title
            </label>
            <input
              name="title"
              type="title"
              placeholder="Enter title..."
              onChange={handleChange}
              value={state.title}
              required
              className={styles.input}
              maxLength={200}
            />
            <label htmlFor="url" className={styles.label}>
              URL
            </label>
            <input
              name="url"
              type="url"
              placeholder="Enter url..."
              onChange={handleChange}
              value={state.url}
              required
              className={styles.input}
            />
            <label htmlFor="description" className={styles.label}>
              Description
            </label>
            <div className={styles.textarea}>
              <textarea
                name="description"
                placeholder="Enter description..."
                onChange={handleChange}
                value={state.description}
                required
                maxLength={500}
                className={styles.input2}
              />
            </div>
            <input
              type="file"
              name="image"
              className={styles.uploadBtn}
              onChange={handleImageChange}
            />

            <div className={styles.imageContainer}>
              <img src={imageStore} className={styles.postImage} />
            </div>
            <button type="submit" className={styles.btn}>
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Articles
