"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import { BlogData, BlogResponse } from "@/types/blog";
import { format } from "date-fns";
import ReactMarkdown, { Components } from "react-markdown";
import strapiApi from '@/lib/axios';
import { getPostBySlug } from '@/lib/api';
import SingleBlogSkeleton from "@/components/Blog/SingleBlogSkeleton";
import { getImageUrl } from '@/utils/imageUrl';

interface SingleBlogContentProps {
  slug: string;
}

const MarkdownComponents: Components = {
  h3: ({ node, ...props }) => <h3 {...props} />,
  p: ({ node, ...props }) => <p {...props} />,
  ul: ({ node, className, ...props }) => {
    return <ul className="list" {...props} />;
  },
  li: ({ node, ...props }) => {
    return (
      <li {...props}>
        <i className="ri-checkbox-circle-line"></i>
        {props.children}
      </li>
    );
  },
  blockquote: ({ node, ...props }) => (
    <blockquote className="article-quote">
      <i className="ri-double-quotes-l"></i>
      {props.children}
      <div className="quote-shape">
        {/* <Image
          src="/blog/assets/circle-shape.png"
          alt="quote shape"
          width={150}
          height={150}
        /> */}
      </div>
    </blockquote>
  ),
  img: (props) => (
    <div className="block-item">
      <Image
        src={props.src || ""}
        alt={props.alt || "blog image"}
        width={750}
        height={650}
      />
    </div>
  ),
  div: (props) => {
    if (props.className === "image-row") {
      return <div className="row justify-content-center">{props.children}</div>;
    }
    return <div {...props}>{props.children}</div>;
  },
};

const SingleBlogContent: React.FC<SingleBlogContentProps> = ({ slug }) => {
  const [blog, setBlog] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await getPostBySlug(slug);
        if (response.data.length === 0) {
          setError("Blog post not found");
          return;
        }
        setBlog(response.data[0]);
      } catch (error) {
        console.error("Error fetching blog:", error);
        setError("Failed to load blog post");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  return (
    <div className="blog-details-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            {loading ? (
              <SingleBlogSkeleton />
            ) : error ? (
              <div className="error-state">
                <i className="ri-error-warning-line error-icon"></i>
                <h3>{error}</h3>
                <p>Please try again later or check another blog post.</p>
              </div>
            ) : blog ? (
              <div className="blog-details-desc">
                <div className="article-image">
                  <Image
                    src={getImageUrl(blog.image.url)}
                    alt={
                      blog.image.alternativeText ||
                      blog.title
                    }
                    width={1200}
                    height={800}
                    style={{ aspectRatio: "1200 / 800" }}
                    className="blog-main-image"
                  />
                </div>

                <div className="article-content">
                  <ul className="entry-list">
                    <li>
                      <time dateTime={blog.date}>
                        {format(new Date(blog.date), "do MMMM yyyy")}
                      </time>
                    </li>
                  </ul>

                  <ReactMarkdown
                    components={MarkdownComponents}
                    className="article-content"
                  >
                    {blog.blogDetailsText}
                  </ReactMarkdown>

                  <div className="article-share">
                    <div className="row align-items-center">
                      <div className="col-lg-6 col-md-6">
                        <div className="share-content">
                          <h4>Share The Article:</h4>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <ul className="share-social text-end">
                          <li>
                            <a
                              href="https://www.facebook.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ri-facebook-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://twitter.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ri-twitter-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.linkedin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ri-linkedin-fill"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://www.instagram.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              <i className="ri-instagram-line"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>

          <div className="col-lg-4 col-md-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogContent;
