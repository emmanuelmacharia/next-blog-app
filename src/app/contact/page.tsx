import ImageContainerComponent from "@/components/ImageContainer/imageContainer";
import styles from "./contact.module.css"

const ContactPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <ImageContainerComponent image={{alt: 'contact us image', src: '/contact.png'}} />
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                    <input type="text" placeholder="Name and surname" name=""/>
                    <input type="email" placeholder="email address" name=""/>
                    <input type="tel" placeholder="phone number (optional)" name=""/>
                    <textarea name="" id="" cols={30} rows={10} placeholder="Message"></textarea>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    )
}

export default ContactPage;