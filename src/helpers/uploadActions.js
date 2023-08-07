"use server";

import path from "path";
import fs from "fs/promises";
import { v4 as uuidv4 } from "uuid";
import os from "os";

import { v2 as cloudinary } from "cloudinary";
import { revalidatePath } from "next/cache";

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

async function savePhotoToLocal(formData) {
  const file = formData.get("file");

  const bufferPromise = file.arrayBuffer().then((data) => {
    const buffer = Buffer.from(data);
    const name = uuidv4();
    const ext = file.type.split("/")[1];

    // const uploadDir = path.join(process.cwd(), "public", `/${name}.${ext}`);

    const tempdir = os.tmpdir();
    const uploadDir = path.join(tempdir, `/${name}.${ext}`);

    fs.writeFile(uploadDir, buffer);

    return {
      filePath: uploadDir,
      fileName: file.name,
    };
  });

  return await Promise.resolve(bufferPromise);
}

async function uploadPhotoToCloudinary(newFile) {
  const photoPromise = cloudinary.uploader.upload(newFile.filePath, {
    folder: "nextjs_upload",
  });

  return await Promise.resolve(photoPromise);
}

export async function uploadPhoto(formData) {
  try {
    const newFile = await savePhotoToLocal(formData);

    const photos = await uploadPhotoToCloudinary(newFile);

    fs.unlink(newFile.filePath);
    revalidatePath("/");

    return {
      status: 200,
      message: "Berhasil menambahkan data",
      data: {
        publicId: photos.public_id,
        url: photos.secure_url,
      },
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}

export async function deletePhoto(publicId) {
  try {
    await cloudinary.uploader.destroy(publicId);

    return {
      status: 200,
      message: "Berhasil menghapus data",
    };
  } catch (error) {
    return {
      status: 500,
      message: error.message,
    };
  }
}
