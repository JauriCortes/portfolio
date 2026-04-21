import { useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";
import "./MusicButton.css";

function MusicButton() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [playing, setPlaying] = useState(false);

    const toggle = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio("/ambient.mp3");
            audioRef.current.loop = true;
            audioRef.current.volume = 0.2;
        }

        if (playing) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }

        setPlaying(!playing);
    };

    return (
        <button className="music-btn" onClick={toggle} title={playing ? "Silenciar" : "Reproducir música"}>
            {playing ? <Volume2 size={22} /> : <VolumeX size={22} />}
        </button>
    );
}

export default MusicButton;
