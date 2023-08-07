"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import HTMLString from "react-html-string";
import { timestampToIndo } from "@/src/helpers/timeHelper";
import Link from "next/link";
import { Oval } from "react-loader-spinner";

export default function Page() {
  const [filterdPosts, setFilteredPosts] = useState([]);
  const [trendingPosts, setTrendingPosts] = useState([]);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [years, setYears] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts");
        setFilteredPosts(data.data);
        setPosts(data.data);
        setIsLoading(false);

        const years = data.data.map((post) => {
          const year = new Date(post.createdAt).getFullYear();
          return year;
        });

        const uniqueYears = [...new Set(years)];
        setYears(uniqueYears);
      } catch (error) {
        console.log(error.message);
      }
    };

    const getTrendingPosts = async () => {
      try {
        const { data } = await axios.get("/api/posts/trending");
        setTrendingPosts(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPosts();
    getTrendingPosts();
  }, []);

  const onSelectValueChange = (e) => {
    const value = e.target.value;
    if (value === "semua") {
      setFilteredPosts(posts);
    } else {
      const filtered = posts.filter((post) => {
        const year = new Date(post.createdAt).getFullYear();
        return year.toString() === value;
      });
      setFilteredPosts(filtered);
    }
  };

  return (
    <main className="kabar-desa">
      <div className="kabar-desa__container">
        <div className="kabar-desa__content">
          <div className="kabar-desa__lead">
            <div className="kabar-desa__heading">
              <span className="kabar-desa__title">Kabar</span>
              <span className="kabar-desa__title">Desa Semboja</span>
            </div>
            <select
              className="kabar-desa__filter-select"
              onChange={onSelectValueChange}
            >
              <option value="semua">Semua</option>
              {years.map((year) => (
                <option value={year} key={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="kabar-desa__list">
            {isLoading && (
              <div className="kabar-desa__loader">
                <Oval
                  height={80}
                  width={80}
                  color="#4fa94d"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                  ariaLabel="oval-loading"
                  secondaryColor="#4fa94d"
                  strokeWidth={2}
                  strokeWidthSecondary={2}
                />
              </div>
            )}
            {filterdPosts.length > 0 &&
              filterdPosts.map((post) => (
                <Link
                  href={`/kabar-desa/${post._id}`}
                  className="kabar-desa__list-item"
                  key={post._id}
                >
                  <div className="kabar-desa__list-image-container">
                    <Image
                      className="kabar-desa__image"
                      src={post.image}
                      width={500}
                      height={500}
                      alt="kabar-desa-image"
                      priority
                    />
                  </div>
                  <div className="kabar-desa__list-content">
                    <div className="kabar-desa__list-content__heading">
                      <h2 className="kabar-desa__list-content__title">
                        {post.title}
                      </h2>
                      <p className="kabar-desa__list-content__date">
                        {timestampToIndo(post.createdAt)}
                      </p>
                    </div>
                    <div className="kabar-desa__list-content__article">
                      <HTMLString html={post.content} />
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
        <div className="kabar-desa__trending">
          <h2 className="kabar-desa__trending_heading">Trending</h2>
          <div className="kabar-desa__trending_list">
            <div className="kabar-desa__trending_list-item">
              {trendingPosts.length > 0 &&
                trendingPosts.map((post) => (
                  <>
                    <Link
                      href={`/kabar-desa/${post._id}`}
                      className="kabar-desa__trending_title"
                    >
                      {trendingPosts.indexOf(post) + 1}. {post.title}
                    </Link>
                    <div className="kabar-desa__trending_view-count">
                      <Image
                        src="./stats.svg"
                        width={18}
                        height={18}
                        alt="icon"
                      />
                      <p className="kabar-desa__trending_view-count_text">
                        {post.viewCount} views
                      </p>
                    </div>
                  </>
                ))}
            </div>
          </div>
        </div>
      </div>
      <footer className="kabar-desa__footer">
        <p className="kabar-desa__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}
