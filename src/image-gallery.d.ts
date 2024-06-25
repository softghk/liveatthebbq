declare module 'react-image-gallery' {
  import * as React from 'react';

  export interface GalleryImage {
    original: string;
    thumbnail: string;
    description?: string;
  }

  interface ImageGalleryProps {
    items: GalleryImage[];
  }

  const ImageGallery: React.ComponentType<ImageGalleryProps>;

  export default ImageGallery;
}