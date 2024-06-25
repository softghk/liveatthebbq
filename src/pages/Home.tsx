import {useQuery} from "@apollo/client";
import {media} from "../gql/Query"

import Fade from "react-reveal/Fade";

export const Home = () => {
    const { data } = useQuery(media);
    const homeVideo = data?.homeVideos[0];

    return (
            <Fade cascade duration={2000}>
              <div className="home content-container">
                  <div className="home-video">
                      <video autoPlay muted loop playsInline>
                          <source src={homeVideo.video.url} type="video/mp4"/>
                      </video>
                  </div>
              </div>
            </Fade>
    )
};

export default Home;
