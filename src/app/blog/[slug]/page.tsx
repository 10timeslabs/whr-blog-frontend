import React from "react";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import { baseApiUrl } from "@/config";
import { BlogResponse } from "@/types/blog";
import { Metadata } from "next";

// export async function generateStaticParams() {
//   try {
//     if (!process.env.NEXT_PUBLIC_STRAPI_API_URL) {
//       throw new Error('STRAPI API URL not configured');
//     }

//     const res = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/posts`);
//     if (!res.ok) {
//       throw new Error('Failed to fetch posts');
//     }

//     const posts = await res.json();
//     return posts.data.map((post: any) => ({
//       slug: post.attributes.slug,
//     }));
//   } catch (error) {
//     console.error('Error generating static params:', error);
//     return []; // Return empty array as fallback
//   }
// }

// export async function generateMetadata({
//   params,
// }: {
//   params: { slug: string };
// }): Promise<Metadata> {
//   const res = await fetch(
//     `${baseApiUrl}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
//   );
//   const { data } = (await res.json()) as BlogResponse;
//   const blog = data[0];

//   return {
//     title: blog.attributes.title,
//     description: blog.attributes.shortText,
//   };
// }

export default function BlogDetails({ params }: { params: { slug: string } }) {
  return <SingleBlogContent slug={params.slug} />;
}

