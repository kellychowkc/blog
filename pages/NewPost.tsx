import { RxCross2 } from 'react-icons/rx'
import Swal from 'sweetalert2'
import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from '../../styles/navbar.module.css'

function NewPost() {
  const [imageStore, setImageStore] = useState('')
  const router = useRouter()

  //   function handleImageChange(e: any) {
  //     const file = e.target.files[0]
  //     const reader = new FileReader()
  //     const url = reader.readAsDataURL(file)
  //     reader.onloadend = function (e) {
  //       setImageStore(reader.result as string)
  //       formik.setFieldValue('image', file)
  //     }
  //   }

  //   function goBack() {
  //     navigate('/forum')
  //   }

  return (
    <div className={styles.container}>
      <div className={styles.tab}>
        <Button className={styles.backwardBtn} onClick={goBack}>
          <Icon as={RxCross2} w={6} h={6} color={'#1d1d42'} />
        </Button>
        <div className={styles.titleBox}>
          <h1 className={styles.bigTitle}>New Post</h1>
        </div>
      </div>
      <form className={styles.formBox} onSubmit={formik.handleSubmit}>
        <h1 className={styles.subTitle}>Title</h1>
        <FormControl>
          <Box borderWidth="1px" marginBottom={5}>
            <Input
              type="text"
              id="text"
              name="title"
              onChange={formik.handleChange}
              value={formik.values.title}
              placeholder="Write a title"
              className={styles.input}
            />
          </Box>
        </FormControl>
        <h1 className={styles.subTitle}>Content</h1>
        <FormControl>
          <Box borderWidth="1px" height={'15rem'} marginBottom={6}>
            <textarea
              id="text"
              name="content"
              onChange={formik.handleChange}
              value={formik.values.content}
              placeholder="I would like to share..."
              className={styles.contents}
              maxLength={400}
            />
          </Box>
        </FormControl>
        <div className={styles.imageContainer}>
          <img src={imageStore} />
        </div>
        <FormControl>
          <Input
            type="file"
            onChange={handleImageChange}
            id="image"
            name="image"
            hidden
            margin={1}
          ></Input>
          <label htmlFor="image" className={styles.uploadBtn}>
            Choose File
          </label>
        </FormControl>
        <Button
          bgImage={'linear-gradient(to right,#67d6f8, #67d6f8, #bae4c7)'}
          className={styles.btn}
          type="submit"
        >
          Post
        </Button>
      </form>

      {windowWidth > 850 ? <></> : <Dock />}
    </div>
  )
}

export default NewPost
