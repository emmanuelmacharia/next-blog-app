import { Post, PostCardContent } from "../models/models";
import { posts } from "../stubs/postData";

export const processPostData = (apiposts: {userId: number, id: number, title: string, body: string}[]):PostCardContent[]  => {
    const results: PostCardContent[] = []
    const authors = authorList();
    apiposts.map((post) => {
        const temp: PostCardContent = {
            src: "https://images.pexels.com/photos/16584799/pexels-photo-16584799/free-photo-of-empty-road-in-black-and-white.jpeg",
            alt: `img: ${post.title}`,
            postTitle: post.title,
            postDescription: post.body,
            timestamp: timestampDisplay(randomDatePicker()),
            link: `/blog/${post.id}`,
            id: post.id,
            author: ""
        }
        results.push(temp);
    })

    results.map((result) => addAuthors(result))


    return results;
}

export const processSinglePostData = (post: {userId: number, id: number, title: string, body: string}): PostCardContent => {
    const processedPost: PostCardContent = {
        src: "https://images.pexels.com/photos/16584799/pexels-photo-16584799/free-photo-of-empty-road-in-black-and-white.jpeg",
        alt: `img: ${post.title}`,
        postTitle: post.title,
        postDescription: post.body,
        timestamp: timestampDisplay(randomDatePicker()),
        link: `/blog/${post.id}`,
        id: post.id,
        author: ""
    }

    return addAuthors(processedPost)
}

export const timestampDisplay = (timestamp: number): string => {
    const date = new Date(timestamp);
    
    const timestampDate = date.getDate()
    const month = date.getMonth()
    const year = date.getFullYear()
    
    return `${timestampDate}/${month}/${year}`;
}

const authorList = () => {
    const authors: string[] = [];
    posts.map((post) => authors.push(post.author))
    return authors;
}

const addAuthors = (post: PostCardContent): PostCardContent => {
    const authors = authorList();
    post.author = authors[Math.floor(Math.random() * authors.length)]
    return post;
}

const randomDatePicker = () => {
    const todayDate = new Date().getTime()
    const pastDate = new Date('05-01-2020').getTime()

    return new Date(pastDate + Math.random() * (todayDate - pastDate)).getTime()
}