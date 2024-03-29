import Image from "next/image"
import styles from "./blog.module.css"
import PostCardComponent from "@/components/PostCard/postCard"
import { PostCardContent } from "@/core/models/models"
import { processPostData } from "@/core/helpers/processPosts"
import { getPosts } from "@/lib/data"


// FETCHING DATA USING AN API - FETCH
// const getPosts = async () => {
//     const res = await fetch(
//         "https://jsonplaceholder.typicode.com/posts",
//         {next: {revalidate: 3600}}
//         )
//     if (!res.ok) {
//         throw new Error("Something went wrong while fetching posts")
//     }
//     return res.json();
// }

const BlogPage = async () => {
    // USING LIB TO CALL DATA WITHOUT AN API
    const apiposts = await getPosts()
    // const processedPosts = processPostData(apiposts)
    const processedPosts = apiposts;
    return(
    <div className={styles.container}>
        { processedPosts.map((post) => 
        <div className={styles.post} key={post.id}>
        <PostCardComponent content={post} />
        </div>
        )}
    </div>
    )
}

export default BlogPage;