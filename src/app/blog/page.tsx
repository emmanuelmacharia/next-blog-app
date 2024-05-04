
import Image from "next/image"
import styles from "./blog.module.css"
import PostCardComponent from "@/components/PostCard/postCard"
import { Post } from "@/core/models/models"
// import { getPosts } from "@/lib/data"
import { Suspense } from "react"
import { Metadata } from "next"
import Link from "next/link"


export const metadata: Metadata = {
    title: "Next application blog page",
    description: "Next applicaiton blog description",
  };


// FETCHING DATA USING OUR OWN API - FETCH
const getPosts = async () => {
    const res = await fetch(
        "http://localhost:3000/api/blog",
        {next: {revalidate: 3600}}
        )
    if (!res.ok) {
        throw new Error("Something went wrong while fetching posts")
    }
    return res.json();
}

// FETCHING DATA USING AN EXTERNAL API - FETCH
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
    // USING LIB TO CALL DATA WITHOUT AN API - server actions
    // const apiposts = await getPosts()
    // const processedPosts = processPostData(apiposts)
    // const processedPosts = apiposts;

    // USING Mongo
    const dbPosts = await getPosts()
    console.log(dbPosts);
    // console.log(dbPosts.responseObject)
    return(
    // <div className={styles.container}>
    //     {dbPosts.responseObject > 0 && dbPosts.responseObject.map((post: Post) => 
    //     <div className={styles.post} key={post._id}>
    //     <PostCardComponent content={post}/>
    //     </div>
    //     )}
    // </div>
    <div>
         <section className={styles.cta}>
            <Link href="/AddPost" className={styles.ctaButton}> Add Post </Link>
            </section>
        <div className={styles.container}>
        {
            !dbPosts &&
            <Suspense>Fetching posts....</Suspense>
        }
        {
            dbPosts.status == 200 && dbPosts.responseObject.length == 0 &&
            <div>No posts found</div>
        }
         {dbPosts.responseObject.map((post: Post) => (
        <div className={styles.post} key={post._id}> <PostCardComponent content={post}/></div>
    ))}
    </div>

    </div>
    )
}

export default BlogPage;