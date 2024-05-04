import { NextResponse } from "next/server";
import { Post } from "@/lib/db/models";
import { connectDB } from "@/lib/utils";

export const GET = async (request: Request, { params }: any) => {
  const { slug } = params;
  try {
    connectDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (err) {
    throw(err)
  }
};


export const DELETE = async (request: Request, { params }: any) => {
  const { slug } = params;
  try {
    connectDB();
    const post = await Post.deleteOne({ slug });
    return NextResponse.json("Post deleted");
  } catch (err) {
    throw(err)
  }
};