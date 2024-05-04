import Link from "next/link";
import Links from "./links/links";
import styles from "../navbar/navbar.module.css"
import { auth } from "@/lib/auth";

const Navbar = async () => {
    const session = await auth()

    return <div className={styles.container}>
        <Link href="/" className={styles.logo}>
            Logo
        </Link>
        <div className={styles.links}>
            <Links session={session} />
        </div>
    </div>
}

export default Navbar;