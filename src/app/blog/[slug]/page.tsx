import Image from 'next/image';
import styles from './singlePost.module.css';
import { processSinglePostData } from '@/core/helpers/processPosts';
import { PostCardContent } from '@/core/models/models';
import { getSinglePost } from '@/lib/data';

// FETCH DATA DIRECTLY USING FETCH API
// const getSinglePost = async (id: string) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     if (!res.ok) {
//         throw new Error("Something went wrong while fetching post");
//     }
//     return res.json();

// }

const SinglePostPage = async ({ params }: any) => {
    const postData = await getSinglePost(params.slug)
    // const processedPost = processSinglePostData(postData)
    const processedPost = postData;
    return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
            src={processedPost?.src || ''} 
            alt={processedPost?.alt || ''} 
            fill
            className={styles.img}/>
        </div>
        <div className={styles.postContainer}>
            <h1 className={styles.title}>{processedPost?.postTitle || ''}</h1>
            <div className={styles.metadata}>
                <Image 
                src="https://images.pexels.com/photos/3974517/pexels-photo-3974517.jpeg" 
                alt="post image" 
                width="40" 
                height="40" 
                className={styles.avatar}/>
                <div className={styles.published}>
                    <span className={styles.metatitle}>Author</span>
                    <span className={styles.metaDesc}>{processedPost?.author || ''}</span>
                </div>
                <div className={styles.published}>
                    <span className={styles.metatitle}>Published</span>
                    <span className={styles.metaDesc}>{processedPost?.timestamp || ''}</span>
                </div>
            </div>
            <div className={styles.content}>
                {processedPost?.postDescription || ''}
            </div>
        </div>
    </div>)
}

export default SinglePostPage;