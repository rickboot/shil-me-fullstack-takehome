function Button({ title, style, callback }) {
  return (
    <button type='submit' style={style} onClick={callback}>
      {title}
    </button>
  );
}

export default Button;
