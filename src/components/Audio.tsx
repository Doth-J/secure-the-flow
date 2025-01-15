import { Dispatch, SetStateAction, useEffect, useRef } from "react";

export default function AudioPlayer({
  source,
  isOpen,
  setOpen,
}: {
  source: string;
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (audioElement) {
      if (isOpen) {
        audioElement.play().catch((error) => {
          console.warn("Playback failed or blocked:", error);
        });
      } else {
        audioElement.pause();
      }
    }
  }, [isOpen]);
  useEffect(() => {
    const audioElement = audioRef.current;

    const handleTrackEnd = () => {
      setOpen(true);
    };

    if (audioElement) {
      audioElement.addEventListener("ended", handleTrackEnd);
    }
    return () => {
      if (audioElement) {
        audioElement.removeEventListener("ended", handleTrackEnd);
      }
    };
  }, [setOpen]);

  return (
    <audio
      ref={audioRef}
      className={`h-[20px] w-[450px] transition-all duration-1000 ease-in ${
        isOpen ? "opacity-10" : "opacity-90"
      }`}
    >
      <source src={source} type="audio/mp3" />
      Your browser does not support the audio element.
    </audio>
  );
}
