"use client";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";
import "./page.css";
import SejarahCard from "../components/SejarahCard";

export default function Page() {
  const libraries = ["places"];
  const mapCenter = { lat: -7.025406, lng: 109.088951 };

  const mapOptions = {
    disableDefaultUI: true,
    clickableIcons: true,
    scrollwheel: false,
  };

  console.log(process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY,
    libraries,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <main className="wilayah">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerStyle={{ width: "100%", height: "500px" }}
        onLoad={() => console.log("Map Component Loaded...")}
      />
      <section className="wilayah__section-1">
        <p className="wilayah__title">Alamat Lengkap</p>
        <p className="wilayah__subtitle">
          Desa Semboja, Kec. Pagerbarang, Kab. Tegal, Prov. Jawa Tengah
        </p>
      </section>
      <section className="wilayah__section-2">
        <div className="wilayah__stat-container">
          <p className="wilayah__stat-value">325 m2</p>
          <p className="wilayah__stat-name">Luas</p>
        </div>
        <div className="wilayah__stat-container">
          <p className="wilayah__stat-value">4</p>
          <p className="wilayah__stat-name">Dusun</p>
        </div>
        <div className="wilayah__stat-container">
          <p className="wilayah__stat-value">2</p>
          <p className="wilayah__stat-name">RW</p>
        </div>
        <div className="wilayah__stat-container">
          <p className="wilayah__stat-value">12</p>
          <p className="wilayah__stat-name">RT</p>
        </div>
      </section>
      <section className="wilayah__section-3">
        <div className="wilayah__description-container">
          <p className="wilayah__description">
            Desa Semboja merupakan salah satu desa yang berada di Kecamatan
            Pagerbarang, Kabupaten Tegal, Provinsi Jawa Tengah, Indonesia dan
            terdiri dari 4 (empat) pedukuhan yaitu:
            <ol>
              <li>BOJONGSARI</li>
              <li>JURANGJERO</li>
              <li>JATIPELAG</li>
              <li>SUMBREGAN</li>
            </ol>
          </p>
        </div>
        <div className="wilayah__cards">
          <SejarahCard
            title="Batas Wilayah Desa"
            description="Letak geografis Desa Semboja, terletak di antara:
            <ol>
              <li>Sebelah Utara: Desa Slarang Lor Kec. Dukuhwaruh</li>
              <li>Sebelah Selatan: Desa Balapulang Wetan Kec. Balapulang</li>
              <li>Sebelah Barat: Desa Mulyoharjo Kec. Pagerbarang</li>
              <li>Sebelah Timur: Desa Selarang Kidul Kec. Lebaksiu</li>
            </ol>
            "
            isExpandState={true}
          />
          <SejarahCard
            title="Luas Wilayah Desa"
            description="
            <ul>
              <li>Pemukiman: 30 ha</li>
              <li>Pertanian Sawah: 286 ha</li>
              <li>Perkantoran: 0,25 ha</li>
              <li>Sekolah: 0,75 ha</li>
              <li>Jalan: 20 ha</li>
              <li>Lapangan Sepak Bola: 0.96 ha</li>
            </ul>
            "
            isExpandState={false}
          />
          <SejarahCard
            title="Orbitasi"
            description="
            <ul>
              <li>Jarak ke ibu kota kecamatan terdekat: 5 KM</li>
              <li>Lama jarak tempuh ke ibu kota kecamatan terdekat: 2o menit</li>
              <li>Jarak ke ibu kota kabupaten: 25 KM</li>
              <li>Lama jarak tempuh ke ibu kota kabupaten: 35 menit</li>
            </ul>
            "
            isExpandState={false}
          />
        </div>
      </section>
      <footer className="wilayah__footer">
        <p className="wilayah__footer-text">© 2023 Pemerintah Desa Semboja</p>
      </footer>
    </main>
  );
}
