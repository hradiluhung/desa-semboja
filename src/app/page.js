"use client";

import Image from "next/image";
import "./page.css";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { timestampToIndo } from "../helpers/timeHelper";
import { Oval } from "react-loader-spinner";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await axios.get("/api/posts/newest");
        setPosts(response.data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    getPosts();
  }, []);

  return (
    <main className="home">
      <section className="home__section-1">
        <div className="home__greeting">
          <div className="home__title-container">
            <h1 className="home__title">Selamat Datang di</h1>
            <h1 className="home__title">Desa Semboja</h1>
          </div>
          <Link href="/sejarah" className="home__button">
            <p>LIHAT PROFIL</p>
            <Image src="/arrow-right.svg" width={24} height={24} alt="arrow" />
          </Link>
        </div>
        <div className="home__kabar-terkini">
          <h1 className="home__kabar-terkini_heading">Kabar Terkini</h1>
          {isLoading && (
            <div className="home__loading">
              <Oval
                height={40}
                width={40}
                color="#ffffff"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#e0e0e0"
                strokeWidth={2}
                strokeWidthSecondary={2}
              />
            </div>
          )}

          {posts.length > 0 &&
            posts.map((post) => (
              <div className="home__kabar-terkini_container" key={post._id}>
                <Link
                  className="home__kabar-terkini_title"
                  href={`/kabar-desa/${post._id}`}
                >
                  {post.title}
                </Link>
                <p className="home__kabar-terkini_date">
                  {timestampToIndo(post.createdAt)}
                </p>
              </div>
            ))}
          <Link className="home__kabar-terkini-link" href="/kabar-desa">
            <p>Lainnya</p>
            <Image src="arrow-right.svg" width={24} height={24} alt="arrow" />
          </Link>
        </div>
      </section>
      <section className="home__section-2">
        <div className="home__profile">
          <div className="home__profile-heading">
            <h1 className="home__profile-title">Desa Semboja</h1>
            <p className="home__profile-subtitle">
              Unggul, Maju, Religius, Berbudaya, Tentram, dan Sejahtera
            </p>
          </div>
          <p className="home__profile-description">
            Pemerintah Desa Semboja berkomitmen sepenuhnya untuk melayani dan
            memajukan masyarakat. Sebagai Desa yang mandiri, Semboja terus
            tumbuh dan berkembang bersama dengan warganya.
          </p>
        </div>
        <div className="home__profile-items">
          <div className="home__profile-items_section">
            <div className="home__profile-items_card">
              <div className="home__profile-items_card-heading">
                <Image
                  className="home__profile-items_card-icon"
                  src="/profile.svg"
                  width={32}
                  height={32}
                  alt="home"
                />
                <p className="home__profile-items_card-title">Profil</p>
              </div>
              <p className="home__profile-items_card-content">
                Salah satu desa yang berada di Kecamatan Pagerbarang, Kabupaten
                Tegal, Provinsi Jawa Tengah, Indonesia
              </p>
            </div>
            <div className="home__profile-items_card">
              <div className="home__profile-items_card-heading">
                <Image
                  className="home__profile-items_card-icon"
                  src="/home.svg"
                  width={32}
                  height={32}
                  alt="home"
                />
                <p className="home__profile-items_card-title">Pembangunan</p>
              </div>
              <p className="home__profile-items_card-content">
                Program Desa diawali dengan musyawarah Desa untuk membahas dan
                menyepakati program pembangunan, pemerintahan, dan pemberdayaan
                masyarakat.
              </p>
            </div>
          </div>
          <div className="home__profile-items_section">
            <div className="home__profile-items_card">
              <div className="home__profile-items_card-heading">
                <Image
                  className="home__profile-items_card-icon"
                  src="/hand.svg"
                  width={32}
                  height={32}
                  alt="home"
                />
                <p className="home__profile-items_card-title">Layanan</p>
              </div>
              <p className="home__profile-items_card-content">
                Pemerintah Desa selalu berusaha memberikan layanan publik secara
                prima kepada masyarakat.
              </p>
            </div>
            <div className="home__profile-items_card">
              <div className="home__profile-items_card-heading">
                <Image
                  className="home__profile-items_card-icon"
                  src="/profile.svg"
                  width={32}
                  height={32}
                  alt="home"
                />
                <p className="home__profile-items_card-title">Potensi</p>
              </div>
              <p className="home__profile-items_card-content">
                Potensi desa kami berfokus pada beberapa sumber daya seperti
                alam, manusia, sosial, dan ekonomi
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home__section-3">
        <div className="home__kepala-desa">
          <div className="home__kepala-desa-container">
            <div className="home__kepala-desa_heading">
              <p className="home__kepala-desa_subtitle">
                Berkenalan dengan Kepala Desa Kami
              </p>
              <h1 className="home__kepala-desa_title">Untung Basuki</h1>
            </div>
            <p className="home__kepala-desa_description">
              &apos;Mewujudkan Desa Semboja yang Unggul, Maju, Religius,
              Berbudaya, Tentram, dan Sejahtera&apos;
            </p>
            <Link
              className="home__kepala-desa_button"
              href="/sejarah#list-kepala-desa"
            >
              <p>SELENGKAPNYA</p>
              <Image
                src="/arrow-right.svg"
                width={24}
                height={24}
                alt="arrow"
              />
            </Link>
          </div>
        </div>
        <div className="home__kepala-desa-image-container">
          <Image
            className="home__kepala-desa-image"
            src="/untung_basuki.png"
            width={400}
            height={400}
            alt="arrow"
          />
        </div>
      </section>
      <footer className="home__footer">
        <p className="home__copyright">© 2023 Pemerintah Desa Semboja</p>
      </footer>
    </main>
  );
}
