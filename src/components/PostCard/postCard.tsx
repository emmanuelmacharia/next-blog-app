import { Post, PostCardContent } from "@/core/models/models";
import styles from './postCard.module.css'
import Image from "next/image";
import Link from "next/link";
import { timestampDisplay } from "@/core/helpers/processPosts";

const PostCardComponent = (props: {content: Post}) => {
    console.log('this is not called one bit')
    console.log(typeof(props.content));
    console.log(props.content.createdAt?.toString())
    return (
    <div className={styles.container}>
        <div className={styles.postView}>
        <div className={styles.imageContainer}>
            {/* <Image src={props.content.src} alt={props.content.alt} className={styles.image} /> */}
            {
                props.content.src &&
            <Image src={props.content.src} alt={props.content.alt || ''} className={styles.image} fill/>
            }
        </div>
        <div className={styles.dateContainer}>
            <span className={styles.date}> {props.content.createdAt?.toString().substring(0, 15)}</span>
        </div>
        </div>
        <div className={styles.textAndDescription}>
            <h4 className={styles.title}>{props.content.title}</h4>
            <p className={styles.description}>{props.content.description}</p>
            <Link href={`/blog/${props.content.slug}`} className={styles.link}>Read more</Link>
        </div>
    </div>
    )
}

export default PostCardComponent;