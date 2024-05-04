import { connectDB } from "../utils";
import { Post } from "../db/models";
import { revalidatePath } from "next/cache";

/**
 * These are server actions from next framework
 *  They allow you to interact with the db directly without the need of api calls
 * We certainly need to return something that allows for reactivity once the action is completed
 * But I think that these actions are better used with lightweight and less mission critical ops like preference seting etc
 */

export const addPosts = async(input: FormData)  => {
    'use server'
   const { title, description, src, author} = Object.fromEntries(input);
   const { slug, alt } = processInput(title as string);

   try {
    connectDB();

    const newPost = new Post({
     title, description, src, author, slug, alt
    });
 
    await newPost.save();
    revalidatePath('/blog');
   }
   catch(err) {
    console.log(err);
    console.error("Something went wrong");
   }

   console.log("saved to database")

   // return api response
}

export const deletePosts = async(formData: FormData)  => {
    'use server'
   const { id } = Object.fromEntries(formData);

   try {
    connectDB();
    await Post.findByIdAndDelete(id);
    console.log('deleted')
    revalidatePath('/blog');
   }
   catch(err) {
    console.log(err);
    console.error("Something went wrong");
   }

   console.log("saved to database")

   // return api response
}


const processInput = (title: string): {slug: string, alt: string} => {
    const slug = title.replace(' ', '-');
    const alt  =  `Image of ${title}`;
    return { alt, slug }

}
