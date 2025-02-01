export const getImageUrl = (path: string | null | undefined): string => {
  if (!path) return "/images/placeholder.jpg"; // Add a default placeholder image path

  if (path.startsWith("http")) {
    return path;
  }

  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL}${path}`;
};
