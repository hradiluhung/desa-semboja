import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";

// get 3 most viewed posts sorted by viewCount property
export async function GET() {
  try {
    const posts = await Post.find();

    posts.sort((a, b) => {
      return b.viewCount - a.viewCount;
    });

    const trendingPosts = posts.slice(0, 3);

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: trendingPosts,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
