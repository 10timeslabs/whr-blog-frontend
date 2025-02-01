"use client";

import React from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import axios from "axios";
import { baseApiUrl } from "@/config";
import { BlogResponse } from "@/types/blog";
import BlogSkeleton from "@/components/Blog/BlogSkeleton";

const BlogWithRightSidebar: React.FC = () => {
  const [blogs, setBlogs] = React.useState<BlogResponse>();
  const [currentPage, setCurrentPage] = React.useState(1);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const getBlogs = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${baseApiUrl}/api/blogs?populate=*&pagination[page]=${currentPage}&pagination[pageSize]=6`
        );
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setIsLoading(false);
      }
    };
    getBlogs();
  }, [currentPage]);

  const totalPages = blogs?.meta?.pagination?.pageCount || 1;

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="blog-area pt-100 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-12">
            <div className="row justify-content-center">
              {isLoading ? (
                // Skeleton loading state
                Array.from({ length: 6 }).map((_, index) => (
                  <div className="col-lg-6 col-md-6" key={`skeleton-${index}`}>
                    <BlogSkeleton />
                  </div>
                ))
              ) : blogs?.data?.length ? (
                // Actual blog posts
                blogs.data.map((post) => (
                  <div className="col-lg-6 col-md-6" key={post.id}>
                    <div className="single-blog-card">
                      <div className="blog-image">
                        <Link href={`/blog/${post.attributes.slug}`}>
                          <Image
                            src={post.attributes.image.data.attributes.url}
                            alt={
                              post.attributes.image.data.attributes
                                .alternativeText || post.attributes.title
                            }
                            width={750}
                            height={800}
                          />
                        </Link>
                      </div>
                      <div className="blog-content">
                        <h3>
                          <Link href={`/blog/${post.attributes.slug}`}>
                            {post.attributes.title}
                          </Link>
                        </h3>
                        <p>{post.attributes.shortText}</p>
                        <Link
                          href={`/blog/${post.attributes.slug}`}
                          className="blog-btn"
                        >
                          View More
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12 text-center">
                  <div className="empty-state">
                    <i className="ri-article-line empty-icon"></i>
                    <h3>No blog posts found</h3>
                    <p>Check back later for new content!</p>
                  </div>
                </div>
              )}
            </div>

            {!isLoading && blogs?.data?.length && (
              <div className="col-lg-12 col-md-12">
                <div className="pagination-area">
                  <button
                    className="prev page-numbers"
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    <i className="ri-arrow-left-s-line"></i>
                  </button>

                  {[...Array(totalPages)].map((_, index) => (
                    <button
                      key={index + 1}
                      className={`page-numbers ${
                        index + 1 === currentPage ? "current" : ""
                      }`}
                      onClick={() => handlePageChange(index + 1)}
                      aria-current={
                        index + 1 === currentPage ? "page" : undefined
                      }
                    >
                      {index + 1}
                    </button>
                  ))}

                  <button
                    className="next page-numbers"
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    <i className="ri-arrow-right-s-line"></i>
                  </button>
                </div>
              </div>
            )}
          </div>

          <div className="col-lg-4 col-md-12">
            <Sidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogWithRightSidebar;
