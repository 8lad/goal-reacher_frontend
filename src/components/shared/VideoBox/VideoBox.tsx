'use client';

import { TextFontWeight, VideoBoxTypes } from '@/constants/generalConstants';
import { Title } from '../Title/Title';
import { useRef, useState } from 'react';
import classNames from 'classnames';
import { videoCurtainClasses } from './VideoBox.utils';

interface VideoBoxProps {
  title: string;
  boxType: VideoBoxTypes;
  videoSrc: string;
}

export const VideoBox: React.FC<VideoBoxProps> = ({ title, boxType, videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const curtainBoxClassses = classNames(
    isHovered ? videoCurtainClasses[boxType].animated : videoCurtainClasses[boxType].static,
    videoCurtainClasses.baseStyles,
    videoCurtainClasses[boxType].base,
  );

  const playVideo = () => {
    setIsHovered(true);
    videoRef.current && videoRef.current.play();
  };

  const stopPlayingVideo = () => {
    setIsHovered(false);
    videoRef.current && videoRef.current.pause();
  };

  return (
    <div
      className="block relative overflow-hidden"
      onMouseEnter={playVideo}
      onMouseLeave={stopPlayingVideo}
    >
      <div className={curtainBoxClassses}>
        <Title text={title} fontWeight={TextFontWeight.BOLD} className="uppercase" />
      </div>
      <div className="w-full h-full">
        <video
          className="outline-none w-full h-full object-cover"
          controls={false}
          ref={videoRef}
          muted
          loop
          preload="none"
          src={videoSrc}
        />
      </div>
    </div>
  );
};
