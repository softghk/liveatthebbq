import React, { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Fade from "react-reveal/Fade";

import {
  BsPlayFill,
  BsPauseFill,
  BsFillSkipBackwardFill,
  BsFillSkipForwardFill,
} from "react-icons/bs";
import { toggleIsPlaying } from "../store/reducers/mediaReducer";

export const MusicPlayer = () => {
  const { audioTitle, audioSource, isPlaying } = useSelector(
    (state: any) => state.media
  );
  const dispatch = useDispatch();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isSeeking, setIsSeeking] = useState(false);
  const [volumeControl, setVolumeControl] = useState(50);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata);
      audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.addEventListener("ended", handleEnded);
    }
    return () => {
      if (audioRef?.current) {
        audioRef.current.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        audioRef.current.removeEventListener("ended", handleEnded);
      }
    };
  }, [audioSource]);

  useEffect(() => {
    if (audioRef?.current) {
      if (isPlaying) {
        audioRef?.current.play();
      } else {
        audioRef?.current.pause();
      }
    }
  }, [isPlaying, audioRef]);

  const handleLoadedMetadata = () => {
    setDuration(audioRef?.current ? audioRef?.current.duration : 0);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef?.current ? audioRef?.current.currentTime : 0);
  };

  const handleEnded = () => {
    dispatch(toggleIsPlaying());
    setCurrentTime(0);
  };

  const togglePlayback = () => {
    dispatch(toggleIsPlaying());
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (audioRef.current && !isSeeking) {
      const seekPosition = e.nativeEvent.offsetX;
      const barWidth = e.currentTarget.clientWidth;
      const seekTime = (seekPosition / barWidth) * duration;
      audioRef.current.currentTime = seekTime;
      setCurrentTime(seekTime);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const getTimeRemaining = () => {
    const remainingTime = duration - currentTime;
    return formatTime(remainingTime);
  };

  const volumeBarStyle: React.CSSProperties = {
    width: `${volumeControl}%`,
  };

  const setVolume = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const barWidth = e.currentTarget.clientWidth;
    const clickPositionX = e.nativeEvent.offsetX;
    const newVolume = (clickPositionX / barWidth) * 100;
    setVolumeControl(newVolume);

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100;
    }
  };

  if (!audioSource) {
    return null;
  }

  return (
    <Fade>
      <div className="music-player-container">
        <div className="content">
          <div className="audio-player">
            <audio ref={audioRef} src={audioSource} autoPlay={true} />
          </div>

          {/*Title*/}
          <div className="audio-title">
            {audioSource ? (
              <p>
                Now Playing:
                <br />
                {audioTitle}
              </p>
            ) : (
              <p>
                Now Playing:
                <br />
              </p>
            )}
          </div>

          {/*Buttons*/}
          <div className="buttons">
            <BsFillSkipBackwardFill className="button" />
            <button className="play-pause-button" onClick={togglePlayback}>
              {isPlaying ? (
                <BsPauseFill className="button-main" />
              ) : (
                <BsPlayFill className="button-main" />
              )}
            </button>
            <BsFillSkipForwardFill className="button" />
          </div>

          <div className="progress">
            {/*Current Time*/}
            <div className="time-duration">
              <p>{formatTime(currentTime)}</p>
            </div>

            {/*Progress Bar*/}
            <div className="progress-bar" onClick={handleSeek}>
              <div
                className="progress-bar-fill"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              ></div>
            </div>

            {/*Remaining Time*/}
            <div className="time-duration">
              <p>{getTimeRemaining()}</p>
            </div>
          </div>

          {/*Volume*/}
          <div className="volume">
            <p>VOL</p>
            <div className="volume-control-bar" onClick={setVolume}>
              <div className="volume-control-fill" style={volumeBarStyle}></div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
};
