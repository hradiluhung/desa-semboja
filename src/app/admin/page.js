"use client";
import React, { useState } from "react";
import "./page.css";
import { useRouter } from "next/navigation";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const onLogin = () => {
    if (username === "admin" && password === "adminsemboja2023") {
      const token = "adminsemboja";
      // set token to local storage
      router.push("/admin/dashboard");
      window.localStorage.setItem("token", token);
    } else {
      alert("Username atau Password salah");
    }
  };

  return (
    <main className="admin-login">
      <div className="admin-login__container">
        <div className="admin-login__heading">
          <h1 className="admin-login__title">Login Admin</h1>
          <p className="admin-login__subtitle">Desa Semboja</p>
        </div>
        <div className="admin-login__form">
          <input
            className="admin-login__input"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="Username"
          />
          <input
            className="admin-login__input"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Password"
          />
          <input
            type="submit"
            onClick={onLogin}
            className="admin-login__button"
            value="Login"
          />
        </div>
      </div>
    </main>
  );
}
