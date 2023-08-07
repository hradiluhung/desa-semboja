import React from "react";
import "./page.css";

export default function Page() {
  return (
    <main className="transparasi">
      <div className="transparasi__heading">
        <span className="transparasi__title">Transparasi</span>
        <span className="transparasi__title">Desa Semboja</span>
      </div>
      <section className="transparasi__section-1">
        <div className="transprasi__item">
          <p className="transparasi__subtitle">Pelopor Transparansi Desa</p>
          <p className="transparasi__description">
            Keterbukaan adalah salah satu kunci penting keberhasilan pembangunan
            desa. Karena itu, Pemdes Semboja sejak 2016, menginisiasi infografik
            APBDesa dan mempublikasikannya melalui beragam media, baik cetak
            maupun digital, agar diketahui publik.
          </p>
        </div>
        <div className="transprasi__item">
          <div className="transparasi__filter">
            <div className="transprasi__filter-item--active">APBDesa</div>
            <div className="transprasi__filter-item">RPJM Desa</div>
          </div>
          <div className="transparasi__content">
            <ul className="transprasi__list-item">
              <li>APBDesa Semboja 2020</li>
              <li>APBDesa Semboja 2019 – Perubahan</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="transparasi__section-2">
        <div className="transparasi__laporan">Tampilan Laporan</div>
      </section>
      <footer className="transparasi__footer">
        <p className="transparasi__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}
