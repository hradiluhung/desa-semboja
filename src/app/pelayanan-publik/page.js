"use client";
import React, { useEffect, useState } from "react";
import "./page.css";
import Image from "next/image";
import axios from "axios";
import { Oval } from "react-loader-spinner";
import { timestampToIndo } from "@/src/helpers/timeHelper";
import Link from "next/link";

export default function Page() {
  const [pelayanans, setPelayanans] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPelayanans = async () => {
      try {
        const response = await axios.get("/api/pelayanans");
        setPelayanans(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPelayanans();
  }, []);

  return (
    <main className="pelayanan-publik">
      <section className="pelayanan-publik__section">
        <div className="pelayanan-publik__title-container">
          <span className="pelayanan-publik__title">Pelayanan Publik</span>
          <span className="pelayanan-publik__title">Desa Semboja</span>
        </div>
      </section>
      <section className="pelayanan-publik__section">
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
          <div className="pelayanan-publik__list">
            {pelayanans.length > 0 ? (
              pelayanans.map((pelayanan) => (
                <Link
                  key={pelayanan._id}
                  href={`/pelayanan-publik/${pelayanan._id}`}
                  className="pelayanan-publik__list-item"
                >
                  <div className="pelayanan-publik__list-image-container">
                    <Image
                      className="pelayanan-publik__list-image"
                      src={pelayanan.image}
                      width={500}
                      height={500}
                      alt="kependudukan"
                      priority
                    />
                  </div>
                  <div className="pelayanan-publik__list-title-container">
                    <p className="pelayanan-publik__list-title">
                      {pelayanan.title}
                    </p>
                    <p className="pelayanan-publik__list-date">
                      {timestampToIndo(pelayanan.createdAt)}
                    </p>
                  </div>
                </Link>
              ))
            ) : (
              <div>
                <span className="pelayanan-publik__list-empty">
                  Belum ada pelayanan publik
                </span>
              </div>
            )}
          </div>
        )}
      </section>
      <footer className="pelayanan-publik__footer">
        <p className="pelayanan-publik__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}
