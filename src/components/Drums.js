import DrumNote from "./DrumNote";

const Drums = () => {
  return (
    <div>
      <h3>These are definitely drums.</h3>
      <div id="drums">
        <DrumNote keyChar="1" note="snare1" />
        <DrumNote keyChar="2" note="snare2" />
        <DrumNote keyChar="3" note="snare3" />
        <DrumNote keyChar="4" note="kick1" />
        <DrumNote keyChar="5" note="kick20" />
        <DrumNote keyChar="6" note="ophat1" />
        <DrumNote keyChar="7" note="hat2" />
        <DrumNote keyChar="8" note="multcrashlo1" />
        <DrumNote keyChar="9" note="multcrashhi1" />
      </div>
    </div>
  );
};

export default Drums;
