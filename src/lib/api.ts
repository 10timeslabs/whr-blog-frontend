import strapiApi from './axios';

export async function getAllPosts() {
  try {
    const response = await strapiApi.get('/api/blogs?populate=*');
    return response.data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    throw error;
  }
}

export async function getPostBySlug(slug: string) {
  try {
    const response = await strapiApi.get(`/api/blogs?filters[slug][$eq]=${slug}&populate=*`);
    return response.data;
  } catch (error) {
    console.error('Error fetching post:', error);
    throw error;
  }
}

// Add other API functions as needed 