import { NextResponse } from "next/server";
import { connectDB } from "@/lib/utils";
import { Post } from "@/lib/db/models";
import { IResponseModel } from "@/core/models/models";

export const GET = async (request: Request) => {
  try {
    connectDB();
    const posts = await Post.find();

    const response:IResponseModel = { 
      responseObject: posts,
      status: 200,
      statusMessage: 'OK',
    }
    return NextResponse.json(posts);
  } catch (err) {
    console.log(err, "Unable to fetch posts");
    return NextResponse.json(err);
  }
};
