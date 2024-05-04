import {addPosts} from '@/lib/actions/postActions'
import React from 'react'
import styles from "./AddPost.module.css";


const AddPost = () => {
  return (
    <div className={styles.container}>
        <form action={addPosts}className={styles.form}>
            <input type="text" name="title" placeholder='Enter post title' required />
            <textarea name="description" placeholder='Enter post description' required />
            <input type="text" name="author" placeholder='Enter authors name' required /> {/* replace this with the logged in user*/}
            <input type="text" name="src" placeholder='Enter hero image source (optional)' />
            <button type="submit">Submit</button>    
        </form>
    </div>
  )
}

export default AddPost