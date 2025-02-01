export interface BlogImage {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string;
        caption: string;
        width: number;
        height: number;
        formats: {
          small: ImageFormat;
          medium: ImageFormat;
          thumbnail: ImageFormat;
        };
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: null | string;
        provider: string;
        provider_metadata: {
          public_id: string;
          resource_type: string;
        };
        createdAt: string;
        updatedAt: string;
      };
    };
  }
  
  export interface ImageFormat {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: null | string;
    size: number;
    width: number;
    height: number;
    provider_metadata: {
      public_id: string;
      resource_type: string;
    };
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
    image: BlogImage;
  }
  
  export interface BlogData {
    id: number;
    attributes: BlogAttributes;
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
  