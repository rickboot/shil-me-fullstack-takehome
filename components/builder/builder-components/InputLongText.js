// import Title from './Title';
import Description from './Description';

function InputLongText({ title, description, style, placeholder, handleChange }) {
  return (
    <div style={style}>
      {/* {title ? <Title>{title}</Title> : null} */}
      {/* {title ? <Title title={title} /> : null} */}
      <label>
        {title}
      </label>
      {description ? <Description>{description}</Description> : null}
      <textarea name={title} id={title} placeholder={placeholder} onChange={handleChange} ></textarea>
    </div>
  );
}

export default InputLongText;
