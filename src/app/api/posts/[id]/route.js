import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/src/dbConfig/dbConfig.js";

connect();

export async function GET(request, context) {
  const id = context.params.id;

  try {
    // find by id and update viewCount attribute
    const post = await Post.findByIdAndUpdate(
      id,
      { $inc: { viewCount: 1 } },
      { new: true }
    );

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

export async function PUT(request, context) {
  const id = context.params.id;
  const { title, author, content } = await request.json();

  try {
    const post = await Post.findByIdAndUpdate(
      id,
      { title, author, content },
      { new: true }
    );

    return NextResponse.json({
      status: 200,
      message: "Berhasil mengubah data",
      data: post,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
