import Image from 'next/image';
import styles from './singlePost.module.css';

const SinglePostPage = () => {
    return (
    <div className={styles.container}>
        <div className={styles.imageContainer}>
            <Image 
            src="https://images.pexels.com/photos/3974517/pexels-photo-3974517.jpeg" 
            alt="post image" 
            fill
            className={styles.img}/>
        </div>
        <div className={styles.postContainer}>
            <h1 className={styles.title}>Title</h1>
            <div className={styles.metadata}>
                <Image 
                src="https://images.pexels.com/photos/3974517/pexels-photo-3974517.jpeg" 
                alt="post image" 
                width="40" 
                height="40" 
                className={styles.avatar}/>
                <div className={styles.published}>
                    <span className={styles.metatitle}>Author</span>
                    <span className={styles.metaDesc}>Jane Smith</span>
                </div>
                <div className={styles.published}>
                    <span className={styles.metatitle}>Published</span>
                    <span className={styles.metaDesc}>01-01-2024</span>
                </div>
            </div>
            <div className={styles.content}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Omnis repellat sint sapiente consequatur explicabo ducimus eveniet optio amet repellendus vitae magnam rerum esse hic, ipsum cupiditate aperiam excepturi totam velit? Itaque cupiditate dolore ab 
                quibusdam debitis repellendus cum beatae. A, ipsa neque in tempore facilis nulla alias magnam dolor at cupiditate deserunt harum ea impedit 
                corrupti! Provident natus odio consectetur placeat itaque qui eos, suscipit repellendus autem eligendi quae? Quo quae dolor, ducimus incidunt quasi cum laudantium illo corrupti excepturi ab. Magni,
                 nulla ducimus? Delectus tempora sint, quam ducimus ullam quibusdam iusto at, iste ratione excepturi architecto placeat inventore laborum in quia
                aliquam. Neque temporibus excepturi suscipit fugit quae? Provident nulla iste, corporis, neque animi sunt molestias ullam dolores obcaecati vel quas ducimus dolore laboriosam. Illum corporis, eaque id asperiores veniam quia, voluptate voluptatem obcaecati non accusantium rem quae magnam vel commodi in dignissimos esse. Odit aperiam repudiandae culpa. 
                Est ratione porro minima mollitia! Libero, ut nam! Voluptates reprehenderit ratione dicta aperiam harum deserunt ipsa necessitatibus possimus cum nisi aliquam est soluta nesciunt veniam pariatur repellendus, libero animi quasi! Et ipsam nisi voluptatem inventore deleniti adipisci aperiam cupiditate minus, numquam molestias asperiores? Id saepe earum sapiente voluptate praesentium, 
                natus eius! Pariatur delectus, dolor iste doloribus velit tempora iusto voluptatum, sed tempore ipsum sapiente! Exercitationem harum error molestias asperiores autem molestiae incidunt ab fugiat. Pariatur nihil perferendis harum sit voluptatum adipisci, deleniti dolor ab in? Ea obcaecati laboriosam nisi architecto aliquid deserunt illum quia laudantium quo iure beatae sint quaerat 
                molestias, non consectetur reiciendis reprehenderit? Nisi amet praesentium similique perferendis natus illo a distinctio, molestias at. Enim minus ea maxime velit reiciendis deserunt eius atque quidem, ducimus nostrum alias eos autem necessitatibus! Nobis, animi. Sit numquam quidem molestiae. Aperiam, quibusdam quia aliquam ducimus iure delectus vel sed. Tenetur molestias voluptatibus atque.
            </div>
        </div>
    </div>)
}

export default SinglePostPage;