import Key from "./Key";
import { useState } from "react";

const Piano = () => {
  const [beginnerMode, setBeginnerMode] = useState(false);
  return (
    <>
      <h3>This is definitely a piano.</h3>
      <input
        onChange={() => setBeginnerMode(!beginnerMode)}
        id="beginner"
        type="checkbox"
      ></input>
      <div className="notes">
        <Key type="note-white" note="c2" />
        <Key type="note-black" note="c2s" />
        <Key type="note-white" note="d2" />
        <Key type="note-black" note="d2s" />
        <Key type="note-white" note="e2" />
        <Key type="note-white" note="f2" />
        <Key type="note-black" note="f2s" />
        <Key type="note-white" note="g2" />
        <Key type="note-black" note="g2s" />
        <Key type="note-white" note="a2" />
        <Key type="note-black" note="a2s" />
        <Key type="note-white" note="b2" />
        <Key type="note-white" note="c3" />
        <Key type="note-black" note="c3s" />
        <Key type="note-white" note="d3" />
        <Key type="note-black" note="d3s" />
        <Key type="note-white" note="e3" />
        <Key type="note-white" note="f3" />
        <Key type="note-black" note="f3s" />
        <Key type="note-white" note="g3" />
        <Key type="note-black" note="g3s" />
        <Key type="note-white" note="a3" />
        <Key type="note-black" note="a3s" />
        <Key type="note-white" note="b3" />
        <Key type="note-white" note="c4" />
        <Key type="note-black" note="c4s" />
        <Key type="note-white" note="d4" />
        <Key type="note-black" note="d4s" />
        <Key type="note-white" note="e4" />
        <Key type="note-white" note="f4" />
        <Key type="note-black" note="f4s" />
        <Key type="note-white" note="g4" />
        <Key type="note-black" note="g4s" />
        <Key type="note-white" note="a4" />
        <Key type="note-black" note="a4s" />
        <Key type="note-white" note="b4" />
        <Key type="note-white" note="c5" />
        <Key type="note-black" note="c5s" />
        <Key type="note-white" note="d5" />
        <Key type="note-black" note="d5s" />
        <Key type="note-white" note="e5" />
        <Key type="note-white" note="f5" />
        <Key type="note-black" note="f5s" />
        <Key type="note-white" note="g5" />
        <Key type="note-black" note="g5s" />
        <Key type="note-white" note="a5" />
        <Key type="note-black" note="a5s" />
        <Key type="note-white" note="b5" />
        <Key type="note-white" note="c6" />
        <Key type="note-black" note="c6s" />
        <Key type="note-white" note="d6" />
        <Key type="note-black" note="d6s" />
        <Key type="note-white" note="e6" />
        <Key type="note-white" note="f6" />
        <Key type="note-black" note="f6s" />
        <Key type="note-white" note="g6" />
        <Key type="note-black" note="g6s" />
        <Key type="note-white" note="a6" />
        <Key type="note-black" note="a6s" />
        <Key type="note-white" note="b6" />
        <Key type="note-white" note="c7" />
      </div>
    </>
  );
};

export default Piano;
