"use client";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import "./page.css";
import axios from "axios";
import Image from "next/image";
import { timestampToIndo } from "@/src/helpers/timeHelper";
import HTMLString from "react-html-string";
import { Oval } from "react-loader-spinner";

function Page() {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPost = async () => {
      try {
        const { data } = await axios.get(`/api/posts/${id}`);
        setPost(data.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    getPost();
  }, [id]);

  return (
    <main className="detail-kabar">
      {isLoading ? (
        <div className="detail-kabar__loading">
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
      ) : (
        <>
          <section className="detail-kabar__section">
            <Image
              className="detail-kabar__image"
              src={post.image}
              alt="kabar-desa"
              width={600}
              height={600}
              priority
            />
          </section>
          <section className="detail-kabar__section">
            <div className="detail-kabar__heading">
              <h1 className="detail-kabar__title">{post.title}</h1>
              <div className="detail-kabar__date_and_viewCount">
                <p className="detail-kabar__date">
                  {timestampToIndo(post.createdAt)}
                </p>
                <div className="detail-kabar__trending_view-count">
                  <Image src="/stats.svg" width={18} height={18} alt="icon" />
                  <p className="detail-kabar__trending_view-count_text">
                    {post.viewCount} views
                  </p>
                </div>
              </div>
              <p className="detail-kabar__author">
                Oleh:{" "}
                <span className="detail-kabar__author-name">{post.author}</span>
              </p>
            </div>
            <div className="detail-kabar__content">
              <HTMLString html={post.content} />
            </div>
          </section>
        </>
      )}
      <footer className="detail-kabar__footer">
        <p className="detail-kabar__footer-text">
          © 2023 Pemerintah Desa Semboja
        </p>
      </footer>
    </main>
  );
}

export default page;
