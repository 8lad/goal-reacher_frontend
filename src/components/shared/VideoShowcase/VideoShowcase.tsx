import { VideoBox } from '../VideoBox/VideoBox';
import classNames from 'classnames';
import { allShowcaseWideos } from './VideoShowcase.utils';

interface VideoShowcaseProps {
  className?: string;
}

export const VideoShowcase: React.FC<VideoShowcaseProps> = ({ className }) => {
  const classes = classNames('grid grid-rows-2 grid-cols-3', className);
  return (
    <div className={classes}>
      {allShowcaseWideos.map((video) => (
        <VideoBox {...video} key={video.videoSrc} />
      ))}
    </div>
  );
};
