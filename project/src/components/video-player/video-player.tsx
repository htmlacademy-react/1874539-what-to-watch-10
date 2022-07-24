import { useEffect, useRef } from 'react';

import styles from './video-player.module.css';

type VideoPlayerProps = {
  videoSrc: string;
  posterSrc: string;
};

type Cleaner = () => void;

function VideoPlayer({ videoSrc, posterSrc }: VideoPlayerProps): JSX.Element {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const timerIdRef = useRef<number | null>(null);

  const playVideo = (): Cleaner | void => {
    if (videoRef.current) {
      timerIdRef.current = window.setTimeout(() => {
        videoRef.current?.play();
      }, 1000);

      return () => {
        timerIdRef.current && clearTimeout(timerIdRef.current);
      };
    }
  };

  useEffect(playVideo);

  return (
    <video
      className={styles.video}
      src={videoSrc}
      poster={posterSrc}
      width={280}
      height={175}
      preload='metadata'
      loop
      muted
      ref={videoRef}
    />
  );
}

export default VideoPlayer;
