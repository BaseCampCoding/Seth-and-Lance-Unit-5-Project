const Key = ({ note, type }) => {
  const className = `note ${type}`
  return (
    <div>
      <button id={note} className={className}></button>
    </div>
  );
};

export default Key;
