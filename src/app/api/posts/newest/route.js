import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig.js";

connect();

// get 3 newest posts
export async function GET() {
  try {
    const posts = await Post.find();

    posts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const newestPosts = posts.slice(0, 3);

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: newestPosts,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
