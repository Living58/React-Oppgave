const Alert = ({
  inputValue,
  placeholder,
  updateInputValue,
  updateOnClick
}) => {
  return (
    <>
      <input
        onChange={updateInputValue}
        placeholder={placeholder}
        type="text"
        value={inputValue}
      />
      <button onClick={updateOnClick}>Trykk</button>
    </>
  );
};

export default Alert;
