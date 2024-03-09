import { HeroContent } from "@/core/models/models";
import styles from "./headerandtext.module.css"

const HeaderAndTextComponent = (props: {content: HeroContent}) => {
    return (
        <div className={styles.container}>
            {props.content.pageTitle && <h3 className={styles.pageTitle}>{props.content.pageTitle}</h3>}
            <h1 className={styles.header}>{props.content.header}</h1>
            <p className={styles.description}>{props.content.description}</p>
        </div>
    )
}

export default HeaderAndTextComponent;