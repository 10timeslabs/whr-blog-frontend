import React from "react";
import SingleBlogContent from "@/components/Blog/SingleBlogContent";
import { baseApiUrl } from "@/config";
import { BlogResponse } from "@/types/blog";
import { Metadata } from "next";

export async function generateStaticParams() {
  const res = await fetch(`${baseApiUrl}/api/blogs?populate=*`);
  const { data } = (await res.json()) as BlogResponse;

  return data.map((blog) => ({
    slug: blog.attributes.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const res = await fetch(
    `${baseApiUrl}/api/blogs?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const { data } = (await res.json()) as BlogResponse;
  const blog = data[0];

  return {
    title: blog.attributes.title,
    description: blog.attributes.shortText,
  };
}

export default function BlogDetails({ params }: { params: { slug: string } }) {
  return <SingleBlogContent slug={params.slug} />;
}
