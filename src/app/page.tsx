import Image from "next/image";
import styles from "./home.module.css";
import { HeroContent } from "@/core/models/models";
import HeaderAndTextComponent from "@/components/HeaderAndText/headerandtext";
import ImageContainerComponent from "@/components/ImageContainer/imageContainer";


const homePageContent: HeroContent = {
  header: "Creative Thought Agency.",
  description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.Dignissimos illum et incidunt placeat! Voluptate, tempore architecto necessitatibus quis in repellendus molestias esse nemo eius expedita minus non modi doloremque placeat.",
}

export default function Home() {
  return (
  <div className={styles.container}>
    <div className={styles.textContainer}>
      <HeaderAndTextComponent content={homePageContent} />
      <div className={styles.buttons}>
        <button className={styles.button}>
          Learn more
        </button>
        <button className={styles.button}>
          Contact
        </button>
      </div>
      <div className={styles.brands}>
        <Image src="/brands.png" alt="brands image" fill className={styles.brandsImage}/>
      </div>
    </div>
    <div className={styles.imageContainer}>
     <ImageContainerComponent image={{src:"/hero.gif", unoptimized: true, alt:"hero image"}} />
    </div>
  </div>
  )
}