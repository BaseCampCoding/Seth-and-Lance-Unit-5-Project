import { useState } from "react";
import Piano from "./Piano";
import Drums from "./Drums";

const Instrument = () => {
  const [currentInstrument, setCurrentInstrument] = useState("drums");

  const changeInstrument = () => {
    const selector = document.getElementById("selector");
    if (selector.value === "piano") {
      setCurrentInstrument("piano");
    } else if (selector.value === "drums") {
      setCurrentInstrument("drums");
    }
  };
  return (
    <div>
      <select
        defaultValue="drums"
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
