import React from "react";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import { baseApiUrl } from "@/config";
import { BlogResponse } from "@/types/blog";
import { Metadata } from "next";
import { getAllPosts, getPostBySlug } from '@/lib/api';

export async function generateStaticParams() {
  try {
    const posts = await getAllPosts();
    return posts.data.map((post: any) => ({
      slug: post.attributes.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getPostBySlug(params.slug);
    return {
      title: post.data[0]?.attributes.title,
      // ... other metadata
    };
  } catch (error) {
    console.error('Error generating metadata:', error);
    return {
      title: 'Blog Post'
    };
  }
}

export default function BlogDetails({ params }: { params: { slug: string } }) {
  return <SingleBlogContent slug={params.slug} />;
}

