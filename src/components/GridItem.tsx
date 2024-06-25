import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

interface GridItemProps {
    title: string;
    url: string;
    imageUrl?: string;
    videoUrl?: string;
    videoStillUrl?: string;
}

export const GridItem: React.FC<GridItemProps> = ({
    title, url, imageUrl, videoUrl, videoStillUrl
}) => {

    return (
        <Link to={url} className="grid-item">
            <div className="overlay">
                <div className="title">
                    <h1>{title}</h1>
                </div>
            </div>

            <div className="background">
                {imageUrl &&
                    <img src={imageUrl} alt="grid media"/>
                }
                {videoUrl &&
                    <video autoPlay muted loop playsInline>
                        <source src={videoUrl}/>
                    </video>
                }
            </div>
        </Link>
    )
}

GridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string
}