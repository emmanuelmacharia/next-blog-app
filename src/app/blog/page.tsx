import Image from "next/image"
import styles from "./blog.module.css"
const BlogPage = () => {
    return <div>
        <div className={styles.imageContainer}>
         <Image src="https://images.pexels.com/photos/20440051/pexels-photo-20440051/free-photo-of-a-woman-leaning-against-a-railing-with-her-hand-on-her-chin.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load" alt="about us image" fill />
        </div>
    </div>
}

export default BlogPage;