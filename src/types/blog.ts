export interface ImageFormat {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: null | string;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
}

export interface BlogImage {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageFormat;
    large: ImageFormat;
    medium: ImageFormat;
    small: ImageFormat;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null | string;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface BlogAttributes {
  title: string;
  slug: string;
  date: string;
  shortText: string;
  blogDetailsText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: BlogImage[];
}

export interface BlogData {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  date: string;
  shortText: string;
  blogDetailsText: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: BlogImage;
}

export interface BlogResponse {
  data: BlogData[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}
  