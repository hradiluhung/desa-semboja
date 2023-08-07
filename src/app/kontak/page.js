import React from "react";
import "./page.css";

export default function Page() {
  return (
    <main className="kontak">
      <div className="kontak__heading">
        <h1 className="kontak__title">Hubungi Kami</h1>
      </div>
      <section className="kontak__section">
        <form className="kontak__form">
          <div className="kontak__form_heading">
            <h2 className="kontak__form_title">Kirim Pesan Anda</h2>
          </div>
          <div className="kontak__form_content">
            <div className="kontak__form_field">
              <p className="kontak__form_field_label">Nama Lengkap</p>
              <input
                className="kontak__form_field_input"
                placeholder="Contoh: John Doe"
                type="text"
              />
            </div>
            <div className="kontak__form_field">
              <p className="kontak__form_field_label">No Whatsapp</p>
              <input
                className="kontak__form_field_input"
                placeholder="Contoh: 6281234567890"
                type="text"
              />
            </div>
            <div className="kontak__form_field">
              <p className="kontak__form_field_label">Keperluan</p>
              <select className="kontak__form_field_input">
                <option value="default" selected disabled>
                  Pilih Keperluan
                </option>
                <option value="umum">Umum</option>
                <option value="permohonan">Permohonan</option>
                <option value="aduan">Aduan</option>
                <option value="saran">Saran</option>
              </select>
            </div>
            <div className="kontak__form_field">
              <p className="kontak__form_field_label">Isi Pesan</p>
              <textarea className="kontak__form_field_textarea"></textarea>
            </div>
            <div className="kontak__form_field">
              <p className="kontak__form_field_label">
                Berkas Pendukung (jika ada)
              </p>
              <input className="kontak__form_field_input" type="file" />
            </div>
          </div>
          <div className="kontak__form_action">
            <button type="submit" className="kontak__form_action_button">
              Kirim
            </button>
            <button className="kontak__form_action_button">Batal</button>
          </div>
        </form>
        <div className="kontak__detail">
          <div className="kontak__detail_heading">
            <h2 className="kontak__subtitle">Kontak</h2>
          </div>
          <div className="kontak__detail_content">
            <p className="kontak__detail_content_item">
              Desa Semboja, Kecamatan Tegal, Kabupaten Tegal, Prov. Jawa Tengah
              52462
            </p>
            <p className="kontak__detail_content_item">0812 3456 7890</p>
          </div>
        </div>
      </section>

      <footer className="kontak__footer">
        <p className="kontak__footer-text">© 2023 Pemerintah Desa Semboja</p>
      </footer>
    </main>
  );
}
