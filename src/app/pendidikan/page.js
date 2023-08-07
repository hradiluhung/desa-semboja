import React from "react";
import "./page.css";
import SejarahCard from "../components/SejarahCard";

export default function Page() {
  return (
    <main className="pendidikan">
      <section className="pendidikan__heading">
        <span className="pendidikan__title">Pendidikan</span>
        <span className="pendidikan__title">Desa Semboja</span>
      </section>
      <section className="pendidikan__section-1">
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">1288</p>
          <p className="pendidikan__stats-label">Tamat SD/MI</p>
        </div>
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">385</p>
          <p className="pendidikan__stats-label">Tamat SLTP/MTs</p>
        </div>
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">264</p>
          <p className="pendidikan__stats-label">Tamat SLTA</p>
        </div>
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">21</p>
          <p className="pendidikan__stats-label">Tamat S1/Diploma</p>
        </div>
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">50</p>
          <p className="pendidikan__stats-label">Putus Sekolah</p>
        </div>
        <div className="pendidikan__stats-item">
          <p className="pendidikan__stats-value">-</p>
          <p className="pendidikan__stats-label">Buta Huruf</p>
        </div>
      </section>
      <section className="pendidikan__section-2">
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">SDN Semboja 1</h2>
          <p className="pendidikan__card-text">
            Sekolah Dasar pertama di Desa Semboja.
          </p>
        </div>
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">SDN Semboja 2</h2>
          <p className="pendidikan__card-text">
            Sekolah Dasar kedua di Desa Semboja.
          </p>
        </div>
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">TK Pertiwi 28-61 Semboja</h2>
          <p className="pendidikan__card-text">
            Satu-satunya TK di Desa Semboja.
          </p>
        </div>
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">KB Nurunnisa (PAUD)</h2>
          <p className="pendidikan__card-text">
            Merupakan kelompok belajar untuk anak usia dini.
          </p>
        </div>
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">Madrasah Aliyah Darussalam</h2>
          <p className="pendidikan__card-text">
            Merupakan satu-satunya sekolah menengah atas di Desa Semboja.
          </p>
        </div>
        <div className="pendidikan__card">
          <h2 className="pendidikan__card-title">4 TPQ</h2>
          <p className="pendidikan__card-text">
            <ul>
              <li>TPQ Darul Mustofa 01</li>
              <li>TPQ Darul Mustofa 02</li>
              <li>TPQ Darul Mustofa 03</li>
              <li>TPQ Syafa&lsquo;atul Qur&lsquo;an</li>
            </ul>
          </p>
        </div>
      </section>
      <footer className="pendidikan__footer">
        <p className="pendidikan__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}
