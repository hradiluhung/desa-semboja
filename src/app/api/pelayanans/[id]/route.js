import Pelayanan from "@/src/models/pelayananModel";
import Post from "@/src/models/postModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request, context) {
  const id = context.params.id;

  try {
    const pelayanan = await Pelayanan.findById(id);

    return NextResponse.json({
      status: 200,
      message: "Berhasil mendapatkan data",
      data: pelayanan,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}

export async function PUT(request, context) {
  const id = context.params.id;

  const { title, content } = await request.json();

  try {
    const pelayanan = await Pelayanan.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );

    return NextResponse.json({
      status: 200,
      message: "Berhasil mengubah data",
      data: pelayanan,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: error.message });
  }
}
