import { connect } from "@/src/dbConfig/dbConfig.js";
import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, author, content, image, publicId } = reqBody;

    const newPost = new Post({
      title,
      author,
      content,
      image,
      publicId,
    });

    await newPost.save();

    return NextResponse.json({
      status: 200,
      message: "Berhasil menambahkan data",
      data: newPost,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

// get array of posts
export async function GET() {
  try {
    const posts = await Post.find();

    posts.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: posts,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

// delete post by id
export async function DELETE(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  try {
    const deletedPost = await Post.findByIdAndDelete(id);
    return NextResponse.json({
      status: 200,
      message: "Berhasil menghapus data",
      data: deletedPost,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
