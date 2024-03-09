import Image from "next/image"
import styles from "./about.module.css"
import HeaderAndTextComponent from "@/components/HeaderAndText/headerandtext";
import { HeroContent, Statistics } from "@/core/models/models";
import StatsComponent from "@/components/stats/stats";
import ImageContainerComponent from "@/components/ImageContainer/imageContainer";


const aboutPageContent: HeroContent = {
    header: "We create digital ideas that are bigger, bolder, braver and better",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dignissimos porro vel nam animi laborum! Repudiandae, vitae omnis. A esse, libero pariatur reiciendis in molestiae quisquam rem quasi velit ipsam.",
    pageTitle: "About Agency"
}

const stats: Statistics[] = [
    {stat: "10+", description: "Years of experience", id: 1},
    {stat: "243 K+", description: "People reached", id: 2},
    {stat: "5 K+", description: "Services and Plugins", id: 3}
]

const AboutPage = () => {
    return(
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <HeaderAndTextComponent content={aboutPageContent} />
                <div className={styles.statContaner}>
                {
                    stats.map((stat) => <StatsComponent stat={stat} key={stat.id} />)
                }
                </div>
            </div>
            <div className={styles.imageContainer}>
                <ImageContainerComponent image={{src:"/about.png", alt:"hero image"}} />
            </div>
        </div>
    )
}

export default AboutPage;