import React from "react";
import "./page.css";
import Image from "next/image";

export default function Page() {
  return (
    <main className="sejarah">
      <section className="sejarah__section-1">
        <div className="sejarah__title">
          <span>Sejarah</span>
          <span>Desa Semboja</span>
        </div>
        <div className="sejarah__content">
          ﻿Desa Semboja Kecamatan Pagerbarang Kabupaten Tegal adalah sebuah Desa
          yang sudah ada sejak dulu adapun sejarahnya tidak ada yang tau pasti,
          dikarenakan tidak ada bukti yang dijadikan acuan tidak adanya
          literature yang dijadikan sebagai bukti pengakibatkan asal usul Desa
          Semboja sulit untuk ditelusuri hanya ada petunjuk yang menunjukan
          bahwa Desa Semboja sudah ada sebelum agam Islam masuk, dari masa
          kemasa Pemerintah Desa Semboja mengalami berbagai peningkatan disegala
          bidang selain itu juga tak terlepas dengan masalah-masalah yang
          muncul, kondisi tersebut berusaha disikapi dengan bijak oleh Kepala
          Desa yang memimpin Desa Semboja terbukti sampai sekarang Pemerintah
          Desa Semboja masih tetap ber operasi dengan baik. Pemerintah Desa
          Semboja mengalami pergantian kepemimpinan Kepala Desa Pertama yang
          memimpin Desa Semboja tidak ada yang tahu karena tidak adanya sumber
          yang dijadikan reperensi maka Tim Penyusun berusaha memunculkan
          Nama-nama yang dapat diingat yang bersumber dari orang tua adapun
          Kepala Desa yang pernah memimpin Desa Semboja adalah.
        </div>
      </section>
      <section id="list-kepala-desa" className="sejarah__section-2">
        <div className="sejarah__kepala-desa-heading">
          <h1 className="sejarah__kepala-desa-title">Kepala Desa Semboja</h1>
          <p className="sejarah__kepala-desa-subtitle">Dari Masa ke Masa</p>
        </div>
        <div className="sejarah__kepala-desa-list">
          <div className="sejarah__kepala-desa-item">
            <Image
              className="sejarah__kepala-desa-item_image"
              src="/untung_basuki.png"
              alt="Kepala Desa Semboja"
              width={200}
              height={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Untung Basuki</p>
              <p className="sejarah__kepala-desa-item_tahun">2012 - Sekarang</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              alt="Kepala Desa Semboja"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Tarjuki</p>
              <p className="sejarah__kepala-desa-item_tahun">2001-2011</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Budiharto</p>
              <p className="sejarah__kepala-desa-item_tahun">1997-1999</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Djenal</p>
              <p className="sejarah__kepala-desa-item_tahun">1988-1996</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Rajab</p>
              <p className="sejarah__kepala-desa-item_tahun">1966-1987</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Suhari</p>
              <p className="sejarah__kepala-desa-item_tahun">1964-1966</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Madrais</p>
              <p className="sejarah__kepala-desa-item_tahun">1960-1963</p>
            </div>
          </div>
          <div className="sejarah__kepala-desa-item">
            <Image
              alt="Kepala Desa Semboja"
              className="sejarah__kepala-desa-item_image"
              src="/placeholder_kades.png"
              height={200}
              width={200}
            />
            <div className="sejarah__kepala-desa-item_text">
              <p className="sejarah__kepala-desa-item_name">Kardi</p>
              <p className="sejarah__kepala-desa-item_tahun">1950-1957</p>
            </div>
          </div>
        </div>
      </section>
      <footer className="sejarah__footer">
        <p className="sejarah__footer-text">© 2023 Pemerintah Desa Semboja</p>
      </footer>
    </main>
  );
}
