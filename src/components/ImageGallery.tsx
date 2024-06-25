import ImageGallery from "react-image-gallery";

import {useQuery} from "@apollo/client";
import {media} from "../gql/Query";

export const PhotoGallery = () => {
  const { data } = useQuery(media);
  const galleryImages = data?.galleryImages || [];

  const images = galleryImages.map((image: any) => ({
    description: image.description || "",
    original: image.original.url || "",
    thumbnail: image.original.url || ""
  }))

  console.log(images);
  return (
    <ImageGallery items={images}/>
  )
}