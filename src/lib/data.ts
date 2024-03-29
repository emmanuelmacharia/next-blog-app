import { posts } from "@/core/stubs/postData"

// TEMPORTARY DATA



export const getPosts = async() => {
    return posts;
}


export const getSinglePost = async(id: number | string) => {
    const found = posts.find((post) => post.id.toString() === id.toString());
    return found || posts[0]
}