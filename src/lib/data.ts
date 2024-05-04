import { unstable_noStore as noStore } from "next/cache";
import { Post, User } from "./db/models";
import { connectDB } from "./utils";

interface IResponseModel {
    status: number;
    statusMessage: string;
    responseObject: any;
};

export const getPosts = async() => {
    noStore()
    const response: IResponseModel = {
        status: 200,
        statusMessage: "OK",
        responseObject: []
    }
    try {
        connectDB()
        const posts = await Post.find()
        response.responseObject = posts;
        return response
    } catch(error) {
        console.log(error);
        response.status = 400
        response.statusMessage = "Not Found";
        return response;
    }
}


export const getSinglePost = async(slug: string) => {
    const response: IResponseModel = {
        status: 200,
        statusMessage: "OK",
        responseObject: null
    }
    try {
        connectDB();
        const post = await Post.find({ slug  }).exec()
        response.responseObject = post[0];
        return response
    } catch(error) {
        console.log(error);
        response.status = 400
        response.statusMessage = "Not Found"
        return response;
    }
}

export const getUsers = async() => {
    try {
        connectDB()
        const users = await User.find()
        return users
    } catch(error) {
        console.log(error);
        return "Failed to fetch user"
    }
}