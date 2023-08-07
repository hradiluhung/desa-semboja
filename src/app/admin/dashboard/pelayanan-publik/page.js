"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import Image from "next/image";
import Link from "next/link";
import { deletePhoto } from "@/src/helpers/uploadActions";
import { timestampToIndo } from "@/src/helpers/timeHelper";

export default function Page() {
  const [pelayanans, setPelayanans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const onDeletePelayanan = async (id, publicId) => {
    try {
      setIsDeleting(true);
      await axios.delete(`/api/pelayanans?id=${id}`);
      await deletePhoto(publicId);
      setIsDeleting(false);
      setIsModalOpen(false);
      setPelayanans(pelayanans.filter((pelayanan) => pelayanan._id !== id));
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const getPelayanans = async () => {
      try {
        const { data } = await axios.get("/api/pelayanans");
        setPelayanans(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };

    getPelayanans();
  }, []);

  return (
    <main className="pelayanan-publik">
      <div className="pelayanan-publik__heading">
        <span className="pelayanan-publik__title">Pelayanan Publik</span>
        <span className="pelayanan-publik__title">Desa Semboja</span>
      </div>
      <div className="pelayanan-publik__action">
        <Link
          href="/admin/dashboard/pelayanan-publik/tambah"
          className="pelayanan-publik__button"
        >
          Tambah
        </Link>
      </div>
      <div className="pelayanan-publik__content">
        {isLoading ? (
          <div className="pelayanan-publik__loading">
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
          <table className="pelayanan-publik__table">
            <thead className="pelayanan-publik__head">
              <tr className="pelayanan-publik__row--head">
                <th className="pelayanan-publik__cell">No</th>
                <th className="pelayanan-publik__cell">Gambar</th>
                <th className="pelayanan-publik__cell">Judul</th>
                <th className="pelayanan-publik__cell">Terakhir Diperbarui</th>
                <th className="pelayanan-publik__cell">Aksi</th>
              </tr>
            </thead>
            <tbody className="pelayanan-publik__body">
              {pelayanans.length > 0 ? (
                pelayanans.map((pelayanan, index) => (
                  <React.Fragment key={pelayanan._id}>
                    <tr className="pelayanan-publik__row--body">
                      <td className="pelayanan-publik__cell pelayanan-publik__cell_no">
                        {index + 1}
                      </td>
                      <td className="pelayanan-publik__cell pelayanan-publik__cell_image-container">
                        <Image
                          className="pelayanan-publik__cell_image"
                          src={pelayanan.image}
                          alt="pelayanan"
                          width={100}
                          height={100}
                        />
                      </td>
                      <td className="pelayanan-publik__cell pelayanan-publik__cell_title">
                        {pelayanan.title}
                      </td>
                      <td className="pelayanan-publik__cell pelayanan-publik__cell_last-updated">
                        {timestampToIndo(pelayanan.updatedAt)}
                      </td>
                      <td className="pelayanan-publik__cell pelayanan-publik__cell_action">
                        <div className="pelayanan-publik__button-container">
                          <Link
                            className="pelayanan-publik__table-button--edit"
                            href={`/admin/dashboard/pelayanan-publik/edit/${pelayanan._id}`}
                          >
                            Edit
                          </Link>
                          <button
                            onClick={() => {
                              setIsModalOpen(true);
                            }}
                            className="pelayanan-publik__table-button--delete"
                          >
                            Hapus
                          </button>
                        </div>
                      </td>
                    </tr>

                    {isModalOpen && (
                      <div className="pelayanan-publik__modal">
                        <div className="pelayanan-publik__modal-content">
                          <p className="pelayanan-publik__modal-text">
                            Apakah anda yakin ingin menghapus pelayanan publik{" "}
                            <span>&apos;{pelayanan.title}&apos;</span>?
                          </p>
                          <div className="pelayanan-publik__modal-button-container">
                            <button
                              className="pelayanan-publik__modal-button pelayanan-publik__modal-button--cancel"
                              onClick={() => {
                                setIsModalOpen(false);
                              }}
                            >
                              Batal
                            </button>
                            <button
                              className="pelayanan-publik__modal-button pelayanan-publik__modal-button--delete"
                              onClick={() =>
                                onDeletePelayanan(
                                  pelayanan._id,
                                  pelayanan.publicId
                                )
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
                ))
              ) : (
                <tr className="pelayanan-publik__row--body">
                  <td className="pelayanan-publik__cell no-data" colSpan="4">
                    Tidak ada data
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
