"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import "./page.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import Image from "next/image";
import { uploadPhoto } from "@/src/helpers/uploadActions";
import { useRouter } from "next/navigation";
import { Oval } from "react-loader-spinner";

export default function Page() {
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
  const inputRef = useRef();
  const [post, setPost] = useState({
    title: "",
    content: "",
  });
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  async function handleInputFile(e) {
    const file = e.target.files[0];
    setFile(file);
  }

  async function handleUpload(e) {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    formData.append("file", file);
    try {
      const resUploadPhoto = await uploadPhoto(formData);

      const resCreateLayanan = await axios.post("/api/pelayanans", {
        title: post.title,
        content: post.content,
        image: resUploadPhoto.data.url,
        publicId: resUploadPhoto.data.publicId,
      });

      console.log(resCreateLayanan.data);
      setIsLoading(false);
      route.push("/admin/dashboard/pelayanan-publik");
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="create-layanan">
      <div className="create-layanan__heading">
        <span className="create-layanan__title">Buat Pelayanan Publik</span>
      </div>
      <form
        className="create-layanan__section"
        onSubmit={handleUpload}
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
        <div className="create-layanan__input-container">
          <label className="create-layanan__label">Gambar</label>
          <input
            className="create-layanan__input"
            type="file"
            accept="image/*"
            onChange={handleInputFile}
            ref={inputRef}
          />
          {file && (
            <div className="create-layanan__preview-image-container">
              <Image
                className="create-layanan__preview-image"
                src={URL.createObjectURL(file)}
                width={100}
                height={100}
                alt="Gambar Kabar Desa"
              />
              <button
                className="create-layanan__preview-image-delete"
                onClick={() => {
                  setFile(null);
                  inputRef.current.value = "";
                }}
              >
                Delete
              </button>
            </div>
          )}
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
              "Buat Pelayanan"
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
