import { PostCardContent } from "@/core/models/models";
import styles from './postCard.module.css'
import Image from "next/image";
import Link from "next/link";

const PostCardComponent = (props: {content: PostCardContent}) => {
    return (
    <div className={styles.container}>
        <div className={styles.postView}>
        <div className={styles.imageContainer}>
            {/* <Image src={props.content.src} alt={props.content.alt} className={styles.image} /> */}
            <Image src={props.content.src} alt={props.content.alt} className={styles.image} fill/>
        </div>
        <div className={styles.dateContainer}>
            <span className={styles.date}> {props.content.timestamp}</span>
        </div>
        </div>
        <div className={styles.textAndDescription}>
            <h4 className={styles.title}>{props.content.postTitle}</h4>
            <p className={styles.description}>{props.content.postDescription}</p>
            <Link href={props.content.link} className={styles.link}>Read more</Link>
        </div>
    </div>
    )
}

export default PostCardComponent;