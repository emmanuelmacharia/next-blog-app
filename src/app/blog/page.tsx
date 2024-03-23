import Image from "next/image"
import styles from "./blog.module.css"
import { posts } from "@/core/stubs/postData"
import PostCardComponent from "@/components/PostCard/postCard"
const BlogPage = () => {
    return(
    <div className={styles.container}>
        { posts.map((post) => 
        <div className={styles.post} key={post.id}>
        <PostCardComponent content={post} />
        </div>
        )}
    </div>
    )
}

export default BlogPage;