import mongoose from "mongoose";

const postSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Judul harus diisi"],
    },
    author: {
      type: String,
      required: [true, "Penulis harus diisi"],
    },
    content: {
      type: String,
      required: [true, "Konten harus diisi"],
    },
    image: {
      type: String,
      required: [true, "Gambar harus diisi"],
    },
    publicId: {
      type: String,
      required: true,
    },
    viewCount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.models.posts || mongoose.model("posts", postSchema);

export default Post;
