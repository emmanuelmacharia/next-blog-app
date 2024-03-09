import { Statistics } from "@/core/models/models"
import styles from "./stats.module.css"

const StatsComponent = (props: {stat: Statistics}) => {
    return (
        <div className={styles.container}>
            <div className={styles.stat}> {props.stat.stat} </div>
            <div className={styles.description}> {props.stat.description} </div>
        </div>
    )
}

export default StatsComponent;