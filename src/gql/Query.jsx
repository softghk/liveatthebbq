import {gql} from "@apollo/client";

export const media = gql`
   query MyQuery {
  audioTracks {
    audioUrl {
      url
    }
    audioTitle
  }
  residents(orderBy: index_ASC) {
    residentName
    residentBio
    index
    residentImage {
      url
    }
    mixUrl
    instagram
    soundcloud
  }
  galleryImages {
    description
    thumbnail {
      url
    }
    original {
      url
    }
  }
  mixes {
    title
    description
    residentName
    audio {
      url
    }
    video {
      url
    }
    soundcloud
    slug
  }
  homeVideos {
    video {
      url
    }
    videoStill {
      url
    }
  }
}
`

