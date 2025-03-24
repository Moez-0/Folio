import { useState, useEffect, useRef } from "react";
import audio from "../../../public/sounds/music.mp3";

const SoundBar = () => {
  const soundBarEl = useRef(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const audioEl = soundBarEl.current;
    if (audioEl) {
      const playAudio = () => {
        audioEl.play().catch((error) => console.error("Autoplay blocked:", error));
        document.removeEventListener("click", playAudio);
      };
      document.addEventListener("click", playAudio); 
    }

    document.querySelector(".soundBars").onclick = function () {
      this.classList.toggle("play");
    };
  }, []);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) soundBarEl.current.play();
    else soundBarEl.current.pause();
  };

  return (
    <div
      className="soundBars link top-1 right-14 flex items-center justify-center"
      onClick={togglePlayPause}
    >
      <span />
      <span />
      <span />
      <span />
      <audio ref={soundBarEl} src={audio} loop preload="auto" />
    </div>
  );
};

export default SoundBar;
