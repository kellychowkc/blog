import React, { useEffect } from 'react'
import { useLazyQuery, gql } from '@apollo/client'
import Col from 'react-bootstrap/Col'

// function Article(id: number) {
//   const [fetch, { data }] = useLazyQuery(query)

//   useEffect(() => {
//     fetch({
//       variables: {
//         id: id,
//       },
//     })
//   }, [])

//   return (
//     <>
//       {data && (
//         <Col key={id}>
//           <div>{data.url}</div>
//           <div>{data.title}</div>
//         </Col>
//       )}
//     </>
//   )
// }

// export default Article
