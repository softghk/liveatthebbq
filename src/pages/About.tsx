import React from 'react';
import Fade from "react-reveal/Fade";
import { PhotoGallery } from '../components/ImageGallery';

export const About = () => {
    return (
        <div className="content-container about-container single-item">
          <Fade>
            <div className="left">
              <div className="text-container">
                <h1>Who Are We?</h1>
              <p>
                    Live At The BBQ, a dynamic music-focused event now collective, has been prominent in the Dutch music scene since its inception in 2007. Over the years, the platform has passed through the hands of numerous foundational figures who have helped shape it to amplify the sounds of the people by the people.
                </p>
                <p>
                    Under new stewardship, Live At The BBQ continues to grow and evolve. With an unwavering commitment to showcasing the richness and diversity of music, we stay promoting underrepresented artists and fostering cross-cultural exchange through music. Our events serve as powerful celebrations of sound, artistry and community.
                </p>
              </div>
            </div>
            <div className="right">
              <div className="media-container">
              <PhotoGallery/>
              </div>
            </div>
            </Fade>
        </div>
    )
};

export default About;