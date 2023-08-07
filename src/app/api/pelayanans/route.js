import { connect } from "@/src/dbConfig/dbConfig.js";
import Pelayanan from "@/src/models/pelayananModel";
import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { title, content, image, publicId } = reqBody;

    const newPelayanan = new Pelayanan({
      title,
      content,
      image,
      publicId,
    });

    await newPelayanan.save();

    return NextResponse.json({
      status: 200,
      message: "Berhasil menambahkan data",
      data: newPelayanan,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

export async function GET() {
  try {
    const pelayanans = await Pelayanan.find();

    pelayanans.sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: pelayanans,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

export async function DELETE(request) {
  const url = new URL(request.url);
  const id = url.searchParams.get("id");

  try {
    const deletedPelayanan = await Pelayanan.findByIdAndDelete(id);
    return NextResponse.json({
      status: 200,
      message: "Berhasil menghapus data",
      data: deletedPelayanan,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
