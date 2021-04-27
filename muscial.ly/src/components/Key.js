const Key = ({ note, type, keyChar }) => {
  const className = `note ${type}`
  return (
    <div>
      <button id={note} className={className}>{keyChar}</button>
    </div>
  );
};

export default Key;
