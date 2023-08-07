"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "./page.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

export default function Page() {
  const { id } = useParams();

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { header: "3" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
    clipboard: {
      // toggle to add extra line breaks when pasting HTML:
      matchVisual: false,
    },
  };

  const route = useRouter();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content: "",
  });

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getPost() {
      try {
        const res = await axios.get(`/api/posts/${id}`);
        setPost({
          title: res.data.data.title,
          author: res.data.data.author,
          content: res.data.data.content,
        });

        setIsMounted(true);
      } catch (error) {
        console.log(error.message);
      }
    }
    getPost();
  }, [id]);

  async function handleEdit(e) {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await axios.put(`/api/posts/${id}`, post);

      console.log(res.data);
      setIsLoading(false);
      route.push("/admin/dashboard/kabar-desa");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="create-post">
      <div className="create-post__heading">
        <span className="create-post__title">Edit Kabar</span>
        <span className="create-post__title">Desa Semboja</span>
      </div>
      {!isMounted ? (
        <div className="create-post__loader">
          <Oval
            height={80}
            width={80}
            color="#4fa94d"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            ariaLabel="oval-loading"
            secondaryColor="#4fa94d"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </div>
      ) : (
        <form
          className="create-post__section"
          onSubmit={handleEdit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="create-post__input-container">
            <label className="create-post__label">Judul</label>
            <input
              className="create-post__input"
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Contoh: Pemilihan Kepala Desa"
            />
          </div>
          <div className="create-post__input-container">
            <label className="create-post__label">Penulis</label>
            <input
              className="create-post__input"
              type="text"
              value={post.author}
              onChange={(e) => setPost({ ...post, author: e.target.value })}
              placeholder="Contoh: Bambang"
            />
          </div>

          <label className="create-post__label">Isi</label>
          <ReactQuill
            className="create-post__editor"
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            modules={modules}
          />
          <div className="create-post__button-container">
            <button
              type="submit"
              className="create-post__button"
              disabled={isLoading}
            >
              {isLoading ? (
                <Oval
                  height={20}
                  width={20}
                  color="#ffffff"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#e0e0e0"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              ) : (
                "Edit Kabar"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
