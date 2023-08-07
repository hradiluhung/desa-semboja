import React from "react";
import "./page.css";

export default function Page() {
  return (
    <main className="lembaga">
      <section className="lembaga__section-1">
        <span className="lembaga__heading-title">Lembaga</span>
        <span className="lembaga__heading-title">Desa Semboja</span>
      </section>
      <div className="lembaga__heading-subtitle">Lembaga Pemerintahan</div>
      <section className="lembaga__section-2">
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">Pemerintah Desa</p>
          <p className="lembaga__item-description">
            Pemerintah desa adalah Kepala Desa yang dibantu oleh para Perangkat
            Desa, memiliki kewenangan mengelola seluruh potensi desa dan
            mengurus semua urusan masyarakat desa yang terkait dengan
            pemerintahan, pembangunan dan pembinaan kemasyarakatan serta
            pemberdayaan masyarakat.
          </p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">
            BPD (Badan Permusyawaratan Desa)
          </p>
          <p className="lembaga__item-description">
            Lembaga Desa yang menjadi mitra Pemerintah Desa, bertugas mewakili
            masyarakat melakukan permusyawaratan dalam rangka perencanaan dan
            pengawasan tata kelola desa yang dikelola oleh Pemerintah Desa.
          </p>
        </div>
      </section>
      <div className="lembaga__heading-subtitle">
        Lembaga Kemasyarakatan Tingkat Desa
      </div>
      <section className="lembaga__section-3">
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">LPMD</p>
          <p className="lembaga__item-description">
            Lembaga Pemberdayaan Masyarakat Desa
          </p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">TP-PKK</p>
          <p className="lembaga__item-description">
            Tim Penggerak Pemberdayaan dan Kesejahteraan Keluarga.
          </p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">Karang Taruna</p>
          <p className="lembaga__item-description">
            Organisasi sosial kemasyarakatan yang tumbuh dan berkembang atas
            dasar kesadaran dan tanggung jawab sosial dari, oleh, dan untuk
            masyarakat khususnya generasi muda di wilayah desa/kelurahan atau
            komunitas sosial sederajat, yang terutama bergerak di bidang
            kesejahteraan sosial.
          </p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">LINMAS</p>
          <p className="lembaga__item-description">
            Lembaga Perlindungan Masyarakat.
          </p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">Gapoktan</p>
          <p className="lembaga__item-description">Gabungan Kelompok Tani</p>
        </div>
        <div className="lembaga__item-container">
          <p className="lembaga__item-title">Kader Posyandu</p>
          <p className="lembaga__item-description">
            Warga masyarakat yang dipilih oleh dan dari masyarakat yang mau dan
            mampu bekerja bersama dalam berbagai kegiatan kemasyarakatan secara
            sukarela untuk meningkatkan derajat kesehatan masyarakat melalui
            kegiatan Posyandu
          </p>
        </div>
      </section>
      <footer className="lembaga__footer">
        <p className="lembaga__footer-text">© 2023 Pemerintah Desa Semboja</p>
      </footer>
    </main>
  );
}
