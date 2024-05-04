import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    src: {
        type: String,
        required: false,
        unique: false,
    },
    alt: {
        type: String,
        required: false,
        unique: false,
        max: 256
    },
    title: {
        type: String,
        required: true,
        unique: false,
        max: 512
    },
    description: {
        type: String,
        required: true,
        unique: false,
    },
    author: {
        type: String,
        required: true,
        unique: false
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
}, { timestamps: true})

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false,
        unique: false,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    image: {
        type: String,
    },
    isAdmin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true})

export const User = mongoose.models.User || mongoose.model("User", userSchema)
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema)