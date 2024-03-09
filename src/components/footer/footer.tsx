import styles from "./footer.module.css"


const Footer = () => {
    return (
    <div className={styles.container}>
        <div className={styles.logo}>
            MyLogo
        </div>
        <div className={styles.text}>
        &copy; Next JS tutorial by <a href="https://www.youtube.com/watch?v=vCOSTG10Y4o&t=18s" target="_blank">Lama</a>; All rights reserved.
        </div>
    </div>
    )
}

export default Footer;