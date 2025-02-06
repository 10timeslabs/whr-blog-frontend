"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { BlogResponse } from "@/types/blog";
import { format } from "date-fns";
import strapiApi from '@/lib/axios';
import { getImageUrl } from '@/utils/imageUrl';

const SidebarSkeleton = () => (
  <div className="animate-pulse">
    <div className="widget widget_recent_post">
      <div className="skeleton-title mb-4"></div>
      {[...Array(3)].map((_, index) => (
        <article className="item" key={index}>
          <div className="skeleton-image-small"></div>
          <div className="info">
            <div className="skeleton-date"></div>
            <div className="skeleton-text-short"></div>
          </div>
        </article>
      ))}
    </div>
  </div>
);

const Sidebar: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogResponse>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await strapiApi.get<BlogResponse>(
          `/api/blogs?populate=*`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  const recentPosts = blogs?.data.slice(0, 3);

  const categories = blogs?.data.reduce(
    (acc: { [key: string]: number }, blog) => {
      const category = blog.title.split(" ")[0];
      acc[category] = (acc[category] || 0) + 1;
      return acc;
    },
    {}
  );

  if (loading) {
    return <SidebarSkeleton />;
  }

  return (
    <>
      <aside className="widget-area">
        <div className="widget widget_search">
          {/* <form className="search-form">
            <input
              type="search"
              className="search-field"
              placeholder="Search your article"
            />
            <button type="submit">
              <i className="ri-search-line"></i>
            </button>
          </form> */}
        </div>

        <div className="widget widget_recent_post">
          <h3 className="widget-title">Recent Post</h3>

          {recentPosts?.map((post) => (
            <article className="item" key={post.id}>
              <Link href={`/${post.slug}`} className="thumb">
                <span
                  className="fullimage"
                  role="img"
                  style={{
                    backgroundImage: `url(${getImageUrl(post.image.url)})`,
                  }}
                ></span>
              </Link>
              <div className="info">
                <span>
                  {format(new Date(post.date), "do MMMM yyyy")}
                </span>
                <h4 className="title usmall">
                  <Link href={`/${post.slug}`}>
                    {post.title}
                  </Link>
                </h4>
              </div>
            </article>
          ))}
        </div>

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul className="list">
            {categories &&
              Object.entries(categories).map(([category, count]) => (
                <li key={category}>
                  <Link
                    href="/blog/categories"
                    className="d-flex justify-content-between align-items-center"
                  >
                    {category} <span>({count})</span>
                  </Link>
                </li>
              ))}
          </ul>
        </div> */}
      </aside>
    </>
  );
};

export default Sidebar;
