import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../styles/home.module.css'
import Image from 'next/image'
import bg from './assets/bgImage.png'
import Tab from './Tab'
import ArticlesList from './ArticlesList'

function All() {
  return (
    <Container>
      <Container className={styles.colorBox}>
        <Row md={'auto'} className={styles.rowContainer}>
          <Col className={styles.container}>
            <div className={styles.titleBox}>
              <h1 className={styles.title}>Savoir Faire</h1>

              <h6 className={styles.subtitle}>
                it’s french. say it how it’s supposed to be said. <br />
                it’ll make your mouth feel funny.
              </h6>
            </div>
          </Col>
        </Row>
        <Row md={'auto'} className={styles.imageBox}>
          <Image className={styles.image} src={bg} alt="background" />
        </Row>
      </Container>
      <Row md={'auto'} className={styles.contentBox}>
        <div className={styles.discover}>
          <p>Discover more about mens health</p>
        </div>
        <div className={styles.explore}>
          <p>Explore the Hims Journal</p>
        </div>
      </Row>
      <Col>
        <Tab />
      </Col>
      <Col>
        <div className={styles.line}></div>
      </Col>
      <Col>
        <ArticlesList />
      </Col>
    </Container>
  )
}

export default All
