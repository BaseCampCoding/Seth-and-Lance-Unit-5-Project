import Key from "./Key";
import { useState } from "react";

const Piano = () => {
  const [beginnerMode, setBeginnerMode] = useState(false);
  return (
    <>
      <h3>This is definitely a piano.</h3>
      <label htmlFor="beginner">Beginner Mode</label>
      <input
        onChange={() => setBeginnerMode(!beginnerMode)}
        id="beginner"
        type="checkbox"
      ></input>
      <div className="notes">
        <Key beginner={beginnerMode} type="note-white" keyChar="1" note="c2" />
        <Key beginner={beginnerMode} type="note-black" keyChar="!" note="c2s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="2" note="d2" />
        <Key beginner={beginnerMode} type="note-black" keyChar="@" note="d2s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="3" note="e2" />
        <Key beginner={beginnerMode} type="note-white" keyChar="4" note="f2" />
        <Key beginner={beginnerMode} type="note-black" keyChar="$" note="f2s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="5" note="g2" />
        <Key beginner={beginnerMode} type="note-black" keyChar="%" note="g2s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="6" note="a2" />
        <Key beginner={beginnerMode} type="note-black" keyChar="^" note="a2s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="7" note="b2" />
        <Key beginner={beginnerMode} type="note-white" keyChar="8" note="c3" />
        <Key beginner={beginnerMode} type="note-black" keyChar="*" note="c3s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="9" note="d3" />
        <Key beginner={beginnerMode} type="note-black" keyChar="(" note="d3s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="0" note="e3" />
        <Key beginner={beginnerMode} type="note-white" keyChar="q" note="f3" />
        <Key beginner={beginnerMode} type="note-black" keyChar="Q" note="f3s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="w" note="g3" />
        <Key beginner={beginnerMode} type="note-black" keyChar="W" note="g3s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="e" note="a3" />
        <Key beginner={beginnerMode} type="note-black" keyChar="E" note="a3s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="r" note="b3" />
        <Key beginner={beginnerMode} type="note-white" keyChar="t" note="c4" />
        <Key beginner={beginnerMode} type="note-black" keyChar="T" note="c4s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="y" note="d4" />
        <Key beginner={beginnerMode} type="note-black" keyChar="Y" note="d4s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="u" note="e4" />
        <Key beginner={beginnerMode} type="note-white" keyChar="i" note="f4" />
        <Key beginner={beginnerMode} type="note-black" keyChar="I" note="f4s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="o" note="g4" />
        <Key beginner={beginnerMode} type="note-black" keyChar="O" note="g4s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="p" note="a4" />
        <Key beginner={beginnerMode} type="note-black" keyChar="P" note="a4s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="a" note="b4" />
        <Key beginner={beginnerMode} type="note-white" keyChar="s" note="c5" />
        <Key beginner={beginnerMode} type="note-black" keyChar="S" note="c5s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="d" note="d5" />
        <Key beginner={beginnerMode} type="note-black" keyChar="D" note="d5s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="f" note="e5" />
        <Key beginner={beginnerMode} type="note-white" keyChar="g" note="f5" />
        <Key beginner={beginnerMode} type="note-black" keyChar="G" note="f5s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="h" note="g5" />
        <Key beginner={beginnerMode} type="note-black" keyChar="H" note="g5s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="j" note="a5" />
        <Key beginner={beginnerMode} type="note-black" keyChar="J" note="a5s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="k" note="b5" />
        <Key beginner={beginnerMode} type="note-white" keyChar="l" note="c6" />
        <Key beginner={beginnerMode} type="note-black" keyChar="L" note="c6s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="z" note="d6" />
        <Key beginner={beginnerMode} type="note-black" keyChar="Z" note="d6s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="x" note="e6" />
        <Key beginner={beginnerMode} type="note-white" keyChar="c" note="f6" />
        <Key beginner={beginnerMode} type="note-black" keyChar="C" note="f6s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="v" note="g6" />
        <Key beginner={beginnerMode} type="note-black" keyChar="V" note="g6s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="b" note="a6" />
        <Key beginner={beginnerMode} type="note-black" keyChar="B" note="a6s" />
        <Key beginner={beginnerMode} type="note-white" keyChar="n" note="b6" />
        <Key beginner={beginnerMode} type="note-white" keyChar="m" note="c7" />
      </div>
      <h3>Ghost Play</h3>
      <div className="ghostplay">
        <textarea id="ghost-play-input" rows="16" cols="72">
          [6et]| 7| [8yo]| 0| [9r]| 8| [I5y]|| [6etu]| 7| [8yoa]| 0| [I9ry]| 8|
          [I5yp]|| [6etu]| 7| [8yoa]| 0| [I9ry]| 8| [I5yp]|| [6etu]| [7d]/ f/
          [8yoa]| 0/ o. p. [I9ry]| 8/ a. d. [I5yp]|| [6etu]/ h/ [7f]/ d/ [8yoa]|
          0/ o. p. [I9ry]| 8/ d. a. [I5yp]|| [6etu]| [7d]/ f/ [8yoah]| 0/ [ok].
          [pj]. [I9ry]| 8/ [ah]. G. [I5ypd]|| [6etu]| [7d]/ f/ [8yoa]| 0/ o. p.
          [I9ry]| 8/ a. d. [I5yp]|| [6etu]| [7d]/ f/ [8yoa]| 0/ o. p. [I9ry]| 8/
          a. d. [I5yp]|| [6etu]| [7d]/ f/ [8yoa]| 0/ o. p. [I9ry]| [8k]/ a. d.
          [I5yp]|| [0uoa]||f/ d/ [T6eup]| p/ o/ [I9ey]||o. p. [8wtu]||
          [0uoa]||f/ d/ [T6eup]| p/ [oj]/ [I9ey]| h/ [ok]. p. [wtu]
        </textarea>
        <ul>
          <li>Group Notes with [ ]</li>
          <li>"," = 100ms rest</li>
          <li>"." = 250ms rest</li>
          <li>"/" = 500 ms rest</li>
          <li>"|" = 1000 ms rest</li>
        </ul>
      </div>
      <br />
      <button id="ghost-play-submit">Play</button>
      <button id="ghost-play-stop">Stop</button>
    </>
  );
};

export default Piano;
