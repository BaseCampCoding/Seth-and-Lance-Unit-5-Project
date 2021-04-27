import DrumNote from "./DrumNote";

const Drums = () => {
  return (
    <div>
      <h3>These are definitely drums.</h3>
      <div id="drums">
        <DrumNote keyChar="1" note="snare1" />
        <DrumNote keyChar="2" note="snare2" />
        <DrumNote keyChar="3" note="kick1" />
        <DrumNote keyChar="4" note="kick2" />
        <DrumNote keyChar="5" note="hat1" />
        <DrumNote keyChar="6" note="hat2" />
        <DrumNote keyChar="7" note="crash1" />
        <DrumNote keyChar="8" note="multcrash1" />
        <DrumNote keyChar="9" note="multcrash2" />
      </div>
    </div>
  );
};

export default Drums;
