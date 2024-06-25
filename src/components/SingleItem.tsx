import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

// Buttons
import {FaSoundcloud} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import {BsPauseFill, BsPlayFill} from "react-icons/bs";

// Redux
import { useDispatch, useSelector } from "react-redux";
import {setAudioSource, setAudioTitle, toggleIsPlaying, setAudioRef} from "../store/reducers/mediaReducer";

interface SingleItemDisplayProps {
    title: string;
    soundcloud?: string;
    instagram?: string;
    subtitle?: string;
    description: string;
    imageUrl?: string;
    videoUrl?: string;
    backUrl: string;
    audioUrl?: string;
}

export const SingleItem: React.FC<SingleItemDisplayProps> = ({
    title, soundcloud, instagram, subtitle, description, imageUrl, videoUrl, backUrl, audioUrl
}) => {
    const dispatch = useDispatch();
    const {isPlaying, audioRef} = useSelector((state: any) => state.media);

    const handlePlayPause = () => {
        if (audioUrl) {
            dispatch(setAudioTitle(title))
            dispatch(setAudioSource(audioUrl))
        }
        if (audioRef) {
            dispatch(setAudioRef(audioRef))
        }
        dispatch(toggleIsPlaying());
    }

    return (
            <div className="single-item content-container">
                <div className="left">
                    <div className="text-container">
                        <Link to={backUrl} className="back">
                            BACK
                        </Link>
                        <div className="title-container">
                            <h1 className="name">{title}</h1>
                            <div className="socials">
                                {soundcloud &&
                                    <Link to={soundcloud} target="_blank">
                                        <FaSoundcloud/>
                                    </Link>
                                }
                                {instagram &&
                                    <Link to={instagram} target="_blank">
                                        <FaInstagram/>
                                    </Link>
                                }
                            </div>
                        </div>

                        <div className="description-container">
                            {subtitle && <p>{subtitle}</p>}
                            <p>{description}</p>
                        </div>
                    </div>
                </div>

                <div className="right">
                        <div className="media-container">
                            {imageUrl && <img src={imageUrl} alt="item"/>}
                            {videoUrl && (
                                <div className="audio-container">
                                    <div className="play-pause" onClick={handlePlayPause}>
                                        {isPlaying ? (
                                            <BsPauseFill className="button"/>
                                        ) : (
                                            <BsPlayFill className="button"/>
                                        )}
                                    </div>
                                    <video autoPlay muted loop>
                                        <source src={videoUrl}/>
                                    </video>
                                </div>
                            )}
                        </div>
                </div>
            </div>
    )
}

SingleItem.propTypes = {
    title: PropTypes.string.isRequired,
    soundcloud: PropTypes.string,
    instagram: PropTypes.string,
    subtitle: PropTypes.string,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string,
    videoUrl: PropTypes.string,
    backUrl: PropTypes.string.isRequired,
    audioUrl: PropTypes.string
}

