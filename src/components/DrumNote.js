const DrumNote = ({ note, keyChar }) => {
  return (
    <div>
      <button id={note} className="drumnote">{keyChar}</button>
    </div>
  );
};

export default DrumNote;
