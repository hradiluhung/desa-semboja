import React from "react";
import "./page.css";
import Link from "next/link";

export default function Page() {
  return (
    <main className="admin-welcome">
      <div className="admin-welcome__heading">
        <h1 className="admin-welcome__title">Selamat Datang</h1>
        <p className="admin-welcome__subtitle">
          di Halaman Admin Website Desa Semboja
        </p>
      </div>
      <div className="admin-welcome__content">
        <Link
          href="/admin/dashboard/kabar-desa"
          className="admin-welcome__content__item"
        >
          Kabar Desa
        </Link>
        <Link
          href="/admin/dashboard/pelayanan-publik"
          className="admin-welcome__content__item"
        >
          Pelayanan Publik
        </Link>
      </div>
    </main>
  );
}
