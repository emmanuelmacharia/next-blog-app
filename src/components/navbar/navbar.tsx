import Link from "next/link";
import Links from "./links/links";
import styles from "../navbar/navbar.module.css"

const Navbar = () => {

    return <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            Logo
        </Link>
        <div className={styles.links}>
            <Links />
        </div>
    </div>
}

export default Navbar;