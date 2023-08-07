"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import Link from "next/link";
import Image from "next/image";
import { timestampToIndo } from "@/src/helpers/timeHelper";
import { Oval } from "react-loader-spinner";
import { deletePhoto } from "@/src/helpers/uploadActions";

export default function Page() {
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [yearsFilter, setYearsFilter] = useState([]);

  function getTruncatedParagraph(paragraph) {
    var firstTwoSentences = paragraph.split(". ").slice(0, 1);
    var truncatedParagraph = firstTwoSentences.join(". ") + "... ";
    return truncatedParagraph;
  }

  const onDeletePost = async (id, publicId) => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/posts?id=${id}`);
      await deletePhoto(publicId);
      const newPosts = posts.filter((post) => post._id !== id);
      const newFilteredPosts = filteredPosts.filter((post) => post._id !== id);
      setFilteredPosts(newFilteredPosts);
      setPosts(newPosts);
      setIsDeleting(false);
      setIsModalOpen(false);
    } catch (error) {
      console.log(error.message);
      setIsDeleting(false);
    }
  };

  const onSelectValueChange = (e) => {
    const year = e.target.value;
    if (year === "all") {
      setFilteredPosts(posts);
    } else {
      const result = posts.filter((post) => {
        const date = new Date(post.createdAt);
        return date.getFullYear() === parseInt(year);
      });
      setFilteredPosts(result);
    }
  };

  const showDeleteModel = () => {
    setIsModalOpen(true);
  };

  const hideDeleteModel = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        setFilteredPosts(data.data);
        setPosts(data.data);

        const years = data.data.map((post) => {
          const date = new Date(post.createdAt);
          return date.getFullYear();
        });

        const uniqueYears = [...new Set(years)];
        setYearsFilter(uniqueYears);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="kabar-desa">
      <div className="kabar-desa__heading">
        <h1 className="kabar-desa__title">
          Kabar <span>Desa Semboja</span>
        </h1>
        <div className="kabar-desa__heading-action">
          <Link
            className="kabar-desa__create-button"
            href="/admin/dashboard/kabar-desa/tambah"
          >
            Buat Kabar
          </Link>
          {!isLoading && (
            <select
              className="kabar-desa__select"
              onChange={onSelectValueChange}
            >
              <option value="all">Semua Tahun</option>
              {yearsFilter.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          )}
        </div>
      </div>
      <div className="kabar-desa__content">
        {isLoading ? (
          <div className="kabar-desa__loader">
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
          <table className="kabar-desa__table">
            <thead className="kabar-desa__table-heading">
              <tr className="kabar-desa__table-row--heading">
                <th>No</th>
                <th>Gambar</th>
                <th>Judul dan Penulis</th>
                <th>Tanggal Dibuat</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody className="kabar-desa__table-body">
              {filteredPosts.length > 0 &&
                filteredPosts.map((post) => (
                  <React.Fragment key={post._id}>
                    <tr className="kabar-desa__table-row--body" key={post._id}>
                      <td className="kabar-desa__table-data kabar-desa__table-data_no">
                        {filteredPosts.indexOf(post) + 1}
                      </td>
                      <td className="kabar-desa__table-data kabar-desa__table-data_image">
                        <Image
                          className="kabar-desa__table-image"
                          src={post.image}
                          width={500}
                          height={500}
                          alt="kabar-desa-image"
                          priority
                        />
                      </td>
                      <td className="kabar-desa__table-data kabar-desa__table-data_title">
                        <p className="kabar-desa__table-title">{post.title}</p>
                        <p className="kabar-desa__table-date">
                          oleh {post.author}
                        </p>
                      </td>
                      <td className="kabar-desa__table-data kabar-desa__table-data_author">
                        {timestampToIndo(post.createdAt)}
                      </td>
                      <td className="kabar-desa__table-data kabar-desa__table-data_action">
                        <div className="kabar-desa__table-data_action-container">
                          <Link
                            className="kabar-desa__table-button kabar-desa__table-button--edit"
                            href={`/admin/dashboard/kabar-desa/edit/${post._id}`}
                          >
                            Edit
                          </Link>
                          <button
                            className="kabar-desa__table-button kabar-desa__table-button--delete"
                            onClick={() => showDeleteModel(post._id)}
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>

                    {isModalOpen && (
                      <div className="kabar-desa__modal">
                        <div className="kabar-desa__modal-content">
                          <p className="kabar-desa__modal-text">
                            Apakah anda yakin ingin menghapus kabar desa dengan
                            judul <span>&apos;{post.title}&apos;</span>?
                          </p>
                          <div className="kabar-desa__modal-button-container">
                            <button
                              className="kabar-desa__modal-button kabar-desa__modal-button--cancel"
                              onClick={hideDeleteModel}
                            >
                              Batal
                            </button>
                            <button
                              className="kabar-desa__modal-button kabar-desa__modal-button--delete"
                              onClick={() =>
                                onDeletePost(post._id, post.publicId)
                              }
                            >
                              {isDeleting ? (
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
                                "Hapus"
                              )}
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  </React.Fragment>
                ))}

              {filteredPosts.length === 0 && (
                <tr className="kabar-desa__table-row--body">
                  <td colSpan={5} className="kabar-desa__no-data">
                    Tidak ada data. Silahkan buat kabar desa baru.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>
    </main>
  );
}
