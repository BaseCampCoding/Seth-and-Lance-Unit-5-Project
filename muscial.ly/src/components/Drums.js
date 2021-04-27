import DrumNote from "./DrumNote";

const Drums = () => {
  return (
    <div>
      <h3>These are definitely drums.</h3>
      <div id="drums">
        <DrumNote note="snare1" />
        <DrumNote note="snare2" />
        <DrumNote note="kick1" />
        <DrumNote note="kick2" />
        <DrumNote note="hat1" />
        <DrumNote note="hat2" />
        <DrumNote note="crash1" />
        <DrumNote note="multcrash1" />
        <DrumNote note="multcrash2" />
      </div>
    </div>
  );
};

export default Drums;
