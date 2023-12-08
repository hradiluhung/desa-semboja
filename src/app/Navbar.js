"use client";
import React, { useEffect, useState } from "react";

import "./page.css";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathName = usePathname();
  const [isTentangOpened, setIsTentangOpened] = useState(false);
  const [isLayananOpened, setIsLayananOpened] = useState(false);
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    setScreenSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });

    const handleResize = () => {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {!pathName.includes("/admin") && (
        <div
          className="navbar"
          style={pathName !== "/" ? { color: "#000" } : {}}
        >
          <Link className="navbar__logo" href="/">
            <Image
              className="navbar__image"
              src="/logo.png"
              width={100}
              height={100}
              alt="icon"
            />
            <p className="navbar__title">Desa Semboja</p>
          </Link>
          {screenSize.width <= 768 == false ? (
            <div className="navbar__navigations">
              <Link
                className={`navbar__navigation ${
                  pathName === "/" ? "navbar__navigation--active" : ""
                }`}
                href="/"
              >
                Beranda
              </Link>
              <div
                className="navbar__navigation navbar__dropdown"
                onMouseEnter={() => setIsTentangOpened(true)}
                onMouseLeave={() => setIsTentangOpened(false)}
              >
                <p>Tentang</p>
                {isTentangOpened ? (
                  <Image
                    src="/arrow-down-onhover.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                ) : pathName === "/" ? (
                  <Image
                    src="/arrow-down.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                ) : (
                  <Image
                    src="/arrow-down-black.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                )}
                {isTentangOpened && (
                  <div className="navbar__dropdown-content">
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/sejarah"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/sejarah"
                    >
                      Sejarah
                    </Link>
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/wilayah"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/wilayah"
                    >
                      Wilayah
                    </Link>
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/lembaga"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/lembaga"
                    >
                      Lembaga
                    </Link>
                  </div>
                )}
              </div>

              <div
                className="navbar__navigation navbar__dropdown"
                onMouseEnter={() => setIsLayananOpened(true)}
                onMouseLeave={() => setIsLayananOpened(false)}
              >
                <p>Layanan</p>
                {isLayananOpened ? (
                  <Image
                    src="/arrow-down-onhover.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                ) : pathName === "/" ? (
                  <Image
                    src="/arrow-down.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                ) : (
                  <Image
                    src="/arrow-down-black.svg"
                    width={24}
                    height={24}
                    alt="icon"
                  />
                )}
                {isLayananOpened && (
                  <div className="navbar__dropdown-content">
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/transparasi"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/transparasi"
                    >
                      Transparasi
                    </Link>
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/pendidikan"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/pendidikan"
                    >
                      Pendidikan
                    </Link>
                    <Link
                      className={`navbar__dropdown-content__item ${
                        pathName === "/pelayanan-publik"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/pelayanan-publik"
                    >
                      Pelayanan Publik
                    </Link>
                  </div>
                )}
              </div>
              <Link
                className={`navbar__navigation ${
                  pathName === "/kabar-desa" ? "navbar__navigation--active" : ""
                }`}
                href="/kabar-desa"
              >
                Kabar Desa
              </Link>
              <Link
                className={`navbar__navigation ${
                  pathName === "/kontak" ? "navbar__navigation--active" : ""
                }`}
                href="/kontak"
              >
                Kontak
              </Link>
            </div>
          ) : (
            <>
              <div
                className="navbar__hamburger-menu"
                onClick={() => setIsMobileMenuOpened(true)}
              >
                {pathName !== "/" ? (
                  <Image
                    src="/menu-black.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                ) : (
                  <Image
                    src="/menu-white.svg"
                    width={32}
                    height={32}
                    alt="icon"
                  />
                )}
              </div>

              {isMobileMenuOpened && (
                <div className="navbar__mobile-menu">
                  <div className="navbar__mobile-menu__close">
                    <Image
                      src="/close.svg"
                      width={32}
                      height={32}
                      alt="icon"
                      onClick={() => setIsMobileMenuOpened(false)}
                    />
                  </div>
                  <div className="navbar__mobile-menu__navigations">
                    <Link
                      onClick={() => setIsMobileMenuOpened(false)}
                      className={`navbar__mobile-menu__navigation ${
                        pathName === "/" ? "navbar__navigation--active" : ""
                      }`}
                      href="/"
                    >
                      Beranda
                    </Link>
                    <div
                      className="navbar__mobile-menu__navigation navbar__mobile-menu__dropdown"
                      onClick={() => setIsTentangOpened(!isTentangOpened)}
                    >
                      <p>Tentang</p>
                      {!isTentangOpened ? (
                        <Image
                          src="/arrow-down-black.svg"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      ) : (
                        <Image
                          src="/arrow-up-black.svg"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      )}
                    </div>
                    {isTentangOpened && (
                      <div className="navbar__mobile-menu__dropdown-content">
                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/sejarah"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/sejarah"
                        >
                          Sejarah
                        </Link>
                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/wilayah"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/wilayah"
                        >
                          Wilayah
                        </Link>
                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/lembaga"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/lembaga"
                        >
                          Lembaga
                        </Link>
                      </div>
                    )}
                    <div
                      className="navbar__mobile-menu__navigation navbar__mobile-menu__dropdown"
                      onClick={() => setIsLayananOpened(!isLayananOpened)}
                    >
                      <p>Layanan</p>
                      {!isLayananOpened ? (
                        <Image
                          src="/arrow-down-black.svg"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      ) : (
                        <Image
                          src="/arrow-up-black.svg"
                          width={24}
                          height={24}
                          alt="icon"
                        />
                      )}
                    </div>
                    {isLayananOpened && (
                      <div className="navbar__mobile-menu__dropdown-content">
                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/transparasi"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/transparasi"
                        >
                          Transparasi
                        </Link>
                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/pendidikan"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/pendidikan"
                        >
                          Pendidikan
                        </Link>

                        <Link
                          onClick={() => setIsMobileMenuOpened(false)}
                          className={`navbar__mobile-menu__dropdown-content__item ${
                            pathName === "/pelayanan-publik"
                              ? "navbar__navigation--active"
                              : ""
                          }`}
                          href="/pelayanan-publik"
                        >
                          Pelayanan Publik
                        </Link>
                      </div>
                    )}

                    <Link
                      onClick={() => setIsMobileMenuOpened(false)}
                      className={`navbar__navigation ${
                        pathName === "/kabar-desa"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/kabar-desa"
                    >
                      Kabar Desa
                    </Link>
                    <Link
                      onClick={() => setIsMobileMenuOpened(false)}
                      className={`navbar__navigation ${
                        pathName === "/kontak"
                          ? "navbar__navigation--active"
                          : ""
                      }`}
                      href="/kontak"
                    >
                      Kontak
                    </Link>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}
    </>
  );
}
