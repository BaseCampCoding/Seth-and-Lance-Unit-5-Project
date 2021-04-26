import useSound from "use-sound";
import sheesh from "../sheesh.mp3";

const Key = ({ note, type }) => {
  const [playAudio] = useSound(sheesh);
  return (
    <div>
      <button onClick={playAudio} className={type}></button>
    </div>
  );
};

export default Key;
