import React from "react";

const BlogSkeleton = () => {
  return (
    <div className="blog-card animate-pulse">
      <div className="blog-image skeleton-image"></div>
      <div className="blog-content">
        <div className="skeleton-title"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text"></div>
        <div className="skeleton-text-short"></div>
      </div>
    </div>
  );
};

export default BlogSkeleton;
