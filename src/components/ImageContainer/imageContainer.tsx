import { ImageInformation } from "@/core/models/models";
import Image from "next/image"
import styles from "./imageContainer.module.css"

const ImageContainerComponent = (props: {image: ImageInformation}) => {
    return(
        <div className={styles.container}>
            <Image src={props.image.src} alt={props.image.alt} unoptimized={props.image.unoptimized} fill className={styles.heroImage} height={props.image.height}/>
        </div>
    )
}

export default ImageContainerComponent;