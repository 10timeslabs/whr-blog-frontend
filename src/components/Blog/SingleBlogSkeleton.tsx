import React from "react";

const SingleBlogSkeleton = () => {
  return (
    <div className="blog-details-desc animate-pulse">
      <div className="article-image skeleton-image-large"></div>
      
      <div className="article-content">
        <div className="entry-list">
          <div className="skeleton-date"></div>
        </div>

        <div className="skeleton-title-large"></div>
        
        {Array.from({ length: 4 }).map((_, index) => (
          <React.Fragment key={index}>
            <div className="skeleton-text"></div>
            <div className="skeleton-text"></div>
            <div className="skeleton-text-short"></div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SingleBlogSkeleton;