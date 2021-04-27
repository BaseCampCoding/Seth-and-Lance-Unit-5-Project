import { useState } from "react";
import Piano from "./Piano";
import Drums from "./Drums";

const Instrument = () => {
  const [currentInstrument, setCurrentInstrument] = useState("piano");

  const changeInstrument = () => {
    const selector = document.getElementById("selector");
    if (selector.value === "piano") {
      setCurrentInstrument("piano");
      var script = document.createElement("script");
      script.id = "pianoscript";
      script.src = "notes.js";
      document.head.removeChild(document.getElementById("drumscript"));
      document.head.append(script);
    } else if (selector.value === "drums") {
      setCurrentInstrument("drums");
      var script = document.createElement("script");
      script.id = "drumscript";
      script.src = "drumnotes.js";
      document.head.removeChild(document.getElementById("pianoscript"));
      document.head.append(script);
    }
  };
  return (
    <div>
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
      {currentInstrument === "piano" && <Piano />}
      {currentInstrument === "drums" && <Drums />}
    </div>
  );
};

export default Instrument;
