"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./layout.css";

export default function Layout({ children }) {
  const router = useRouter();
  const pathName = usePathname();
  const [isMobileMenuOpened, setIsMobileMenuOpened] = useState(false);

  const [screenSize, setScreenSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      router.push("/admin");
    }
  }, [router]);

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

  const onLogout = () => {
    window.localStorage.removeItem("token");
    router.push("/admin");
  };

  return (
    <main className="admin-dashboard">
      {screenSize.width >= 1024 == false ? (
        <>
          <div
            className="sidebar__hamburger-menu"
            onClick={() => setIsMobileMenuOpened(true)}
          >
            <Image src="/menu-black.svg" width={32} height={32} alt="icon" />
          </div>
          {isMobileMenuOpened && (
            <div className="sidebar__mobile-menu">
              <div className="sidebar__mobile-menu__close">
                <Image
                  src="/close.svg"
                  width={32}
                  height={32}
                  alt="icon"
                  onClick={() => setIsMobileMenuOpened(false)}
                />
              </div>
              <div className="admin-dashboard__sidebar__navigations">
                <Link
                  className={
                    pathName === "/admin/dashboard"
                      ? "admin-dashboard__sidebar__link active"
                      : "admin-dashboard__sidebar__link"
                  }
                  href="/admin/dashboard"
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  <span className="admin-dashboard__sidebar__link-text">
                    Home
                  </span>
                </Link>
                <Link
                  className={
                    pathName === "/admin/dashboard/kabar-desa"
                      ? "admin-dashboard__sidebar__link active"
                      : "admin-dashboard__sidebar__link"
                  }
                  href="/admin/dashboard/kabar-desa"
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  <span className="admin-dashboard__sidebar__link-text">
                    Kabar Desa
                  </span>
                </Link>
                <Link
                  className={
                    pathName === "/admin/dashboard/pelayanan-publik"
                      ? "admin-dashboard__sidebar__link active"
                      : "admin-dashboard__sidebar__link"
                  }
                  href="/admin/dashboard/pelayanan-publik"
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  <span className="admin-dashboard__sidebar__link-text">
                    Pelayanan Publik
                  </span>
                </Link>
              </div>

              <button
                className="admin-dashboard__sidebar__btn-logout"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="admin-dashboard__sidebar">
          <div className="admin-dashboard__sidebar__heading">
            <Image
              className="navbar__image"
              src="/logo.png"
              width={100}
              height={100}
              alt="icon"
            />
            <p className="navbar__title">Desa Semboja</p>
          </div>
          <div className="admin-dashboard__sidebar__navigations">
            <Link
              className={
                pathName === "/admin/dashboard"
                  ? "admin-dashboard__sidebar__link active"
                  : "admin-dashboard__sidebar__link"
              }
              href="/admin/dashboard"
            >
              <span className="admin-dashboard__sidebar__link-text">Home</span>
            </Link>
            <Link
              className={
                pathName === "/admin/dashboard/kabar-desa"
                  ? "admin-dashboard__sidebar__link active"
                  : "admin-dashboard__sidebar__link"
              }
              href="/admin/dashboard/kabar-desa"
            >
              <span className="admin-dashboard__sidebar__link-text">
                Kabar Desa
              </span>
            </Link>
            <Link
              className={
                pathName === "/admin/dashboard/pelayanan-publik"
                  ? "admin-dashboard__sidebar__link active"
                  : "admin-dashboard__sidebar__link"
              }
              href="/admin/dashboard/pelayanan-publik"
            >
              <span className="admin-dashboard__sidebar__link-text">
                Pelayanan Publik
              </span>
            </Link>
          </div>
          <button
            className="admin-dashboard__sidebar__btn-logout"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}
      <div className="admin-dashboard__content">{children}</div>
    </main>
  );
}
