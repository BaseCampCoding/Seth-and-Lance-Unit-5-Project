const Key = ({ beginner, note, type, keyChar }) => {
  const className = `note ${type}`;
  return (
    <div>
      <button id={note} className={className}>
        {keyChar.toUpperCase()}
        <br />
        <br />
        {beginner && note.toUpperCase()}
      </button>
    </div>
  );
};

export default Key;
