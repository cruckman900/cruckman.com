import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import classes from './Player.module.css';

const useAudio = url => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ url }) => {
  const [playing, toggle] = useAudio(url);

  return (
    <span>
      <Button onClick={toggle} className={classes.btn}>
        {!playing ? "Play" : "Pause"}
      </Button>
    </span>
  );
};

export default Player;