import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import styles from '../../styles/footer.module.css'

const PopularList = [
  { title: 'Viagra®' },
  { title: 'Sildenafil', subtitle: 'Generic for Viagra®' },
  { title: 'Cialis®' },
  { title: 'Tadalafil', subtitle: 'Generic for Cialis®' },
  { title: 'Minoxidil Solution' },
  { title: 'Finasteride Pills' },
  { title: 'Topical Finasteride' },
  { title: 'Sertraline' },
  { title: 'Sertraline for PE' },
  { title: 'Premature Ejaculation Pills' },
]
const LearnList = [
  { title: 'About Us' },
  { title: 'How It Works' },
  { title: 'Our Medical Experts' },
  { title: 'Savoir Faire', subtitle: '(It’s our blog)' },
  { title: 'Medical Review' },
  { title: 'Advocacy' },
  { title: 'Purpose' },
  { title: 'Reviews' },
  { title: 'Investors' },
]

const ConnectList = [
  { title: 'Help Center' },
  {
    title: 'contact@forhims.com',
    subtitle: '(If you are a customer seeking support)',
  },
  {
    title: 'press@forhims.com',
    subtitle:
      'Important: FOR MEDIA ONLY. Do not use for customer service inquires. press@forhims.com goes to a third party — never send personal, medical, or health information to this address. Support inquiries will not be addressed.',
  },
]
const CareerList = [{ title: 'Professionals' }, { title: 'Providers' }]

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Container className={styles.footerBox}>
        <form className={styles.form}>
          <Row className={styles.box}>
            <Col className={styles.title}>
              <h3>Get the latest from Hims</h3>
            </Col>
          </Row>
          <Row className={styles.email}>
            <input placeholder="Email address" className={styles.emailInput} />
          </Row>
        </form>

        <Row className={styles.section}>
          <Col className={styles.list}>
            <div className={styles.subtitle}>Popular</div>
            {PopularList.map((list, idx) => (
              <div key={idx} className={styles.smallTitle}>
                {list.title}
                {list.subtitle && (
                  <div className={styles.smallText}>{list.subtitle} </div>
                )}
              </div>
            ))}
          </Col>
        </Row>

        <Row className={styles.section}>
          <Col className={styles.list}>
            <div className={styles.subtitle}>Learn</div>
            {LearnList.map((list, idx) => (
              <div key={idx} className={styles.smallTitle}>
                {list.title}
                {list.subtitle && (
                  <div className={styles.smallText}>{list.subtitle} </div>
                )}
              </div>
            ))}
          </Col>
        </Row>

        <Row className={styles.section}>
          <Col className={styles.list}>
            <div className={styles.subtitle}>Connect</div>
            {ConnectList.map((list, idx) => (
              <div key={idx} className={styles.smallTitle}>
                {list.title}
                {list.subtitle && (
                  <div className={styles.smallText}>{list.subtitle} </div>
                )}
              </div>
            ))}
          </Col>
        </Row>

        <Row className={styles.section}>
          <Col className={styles.list}>
            <div className={styles.subtitle}>Careers</div>
            {CareerList.map((list, idx) => (
              <div key={idx} className={styles.smallTitle}>
                {list.title}
              </div>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
