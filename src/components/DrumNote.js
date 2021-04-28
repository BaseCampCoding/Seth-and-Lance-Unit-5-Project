const DrumNote = ({ note, keyChar }) => {
  return (
    <div>
      <button id={note} className="drumnote">
        {keyChar}
        <br />
        {note}
      </button>
    </div>
  );
};

export default DrumNote;
