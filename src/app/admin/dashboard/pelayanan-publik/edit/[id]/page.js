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
    content: "",
  });

  const [isMounted, setIsMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  async function handleEdit(e) {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await axios.put(`/api/pelayanans/${id}`, post);

      console.log(res.data);
      setIsLoading(false);
      route.push("/admin/dashboard/pelayanan-publik");
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    try {
      async function getPost() {
        const res = await axios.get(`/api/pelayanans/${id}`);
        setPost({
          title: res.data.data.title,
          content: res.data.data.content,
        });
        setIsMounted(true);
      }
      getPost();
    } catch (error) {
      console.log(error.message);
    }
  }, [id]);

  return (
    <div className="create-layanan">
      <div className="create-layanan__heading">
        <span className="create-layanan__title">Edit Pelayanan Publik</span>
      </div>
      {!isMounted ? (
        <div className="create-layanan__loader">
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
          className="create-layanan__section"
          onSubmit={handleEdit}
          method="post"
          encType="multipart/form-data"
        >
          <div className="create-layanan__input-container">
            <label className="create-layanan__label">Judul</label>
            <input
              className="create-layanan__input"
              type="text"
              value={post.title}
              onChange={(e) => setPost({ ...post, title: e.target.value })}
              placeholder="Contoh: Pemilihan Kepala Desa"
            />
          </div>

          <label className="create-layanan__label">Isi</label>
          <ReactQuill
            className="create-layanan__editor"
            value={post.content}
            onChange={(value) => setPost({ ...post, content: value })}
            modules={modules}
          />
          <div className="create-layanan__button-container">
            <button
              onClick={() => {
                setPost({
                  title: "",
                  author: "",
                  content: "",
                });
              }}
              className="create-layanan__button"
            >
              Batal
            </button>
            <button
              type="submit"
              className="create-layanan__button"
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
                "Edit Pelayanan"
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
