
import styles from "./login.module.css";
import { handleGhLogin } from "@/lib/actions/authActions";

const LoginPage = async () => {
    return (
    <div>
        <form action={handleGhLogin} className={styles.container}>
        <button>Login with Github</button>
        </form>
    </div>
    )
}

export default LoginPage;