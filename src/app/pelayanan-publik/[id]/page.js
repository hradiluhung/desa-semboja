"use client";

import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import HTMLString from "react-html-string";
import "./page.css";

export default function Page() {
  const { id } = useParams();
  const [pelayanan, setPelayanan] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPelayanan = async () => {
      try {
        const response = await axios.get(`/api/pelayanans/${id}`);
        setPelayanan(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getPelayanan();
  }, [id]);

  return (
    <main className="detail-pelayanan">
      <section className="detail-pelayanan__section">
        {!isLoading && (
          <>
            <Image
              className="detail-pelayanan__image"
              src={pelayanan.image}
              width={500}
              height={500}
              alt="detail-pelayanan-image"
              priority
            />
            <p className="detail-pelayanan__subtitle">Pelayanan Publik</p>
            <p className="detail-pelayanan__title">{pelayanan.title}</p>
            <div className="detail-pelayanan__content">
              <HTMLString html={pelayanan.content} />
            </div>
          </>
        )}
      </section>
      <footer className="detail-pelayanan__footer">
        <p className="detail-pelayanan__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}
