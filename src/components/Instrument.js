import { useState } from "react";
import Piano from "./Piano";
import Drums from "./Drums";

const Instrument = () => {
  const [currentInstrument, setCurrentInstrument] = useState("piano");

  const changeInstrument = () => {
    const selector = document.getElementById("selector");
    if (selector.value === "piano") {
      setCurrentInstrument("piano");
      var script1 = document.createElement("script");
      script1.id = "pianoscript";
      script1.src = "notes.js";
      document.head.removeChild(document.getElementById("drumscript"));
      document.head.append(script1);
    } else if (selector.value === "drums") {
      setCurrentInstrument("drums");
      var script2 = document.createElement("script");
      script2.id = "drumscript";
      script2.src = "drumnotes.js";
      document.head.removeChild(document.getElementById("pianoscript"));
      document.head.append(script2);
    }
  };
  return (
    <div>
      <div id="options">
        <select
          defaultValue="piano"
          id="selector"
          name="instrument"
          onChange={() => {
            changeInstrument();
          }}
        >
          <option value="piano">Piano</option>
          <option value="drums">Drums</option>
        </select>
        <div id="metronome">
          <h3>Metronome</h3>
          <label htmlFor="metronomePWR">On?</label>
          <input id="metronomePWR" name="metronomePWR" type="checkbox"></input>
          <br />
          <label htmlFor="metronomeSpeed">Speed</label>
          <input
            id="metronomeSpeed"
            name="metronomeSpeed"
            type="range"
            min="0.0"
            max="2.0"
            step="0.1"
            defaultValue="1.0"
          ></input>
        </div>
      </div>

      {currentInstrument === "piano" && <Piano />}
      {currentInstrument === "drums" && <Drums />}
    </div>
  );
};

export default Instrument;
