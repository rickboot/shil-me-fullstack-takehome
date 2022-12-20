// import Title from './Title';
import Description from './Description';

function InputShortText({ title, description, style, placeholder, handleChange }) {
  return (
    <div style={style}>
      {/* {title ? <Title>{title}</Title> : null} */}
      {/* {title ? <Title title={title} /> : null} */}
      <label>
        {title}
      </label>
      {description ? <Description>{description}</Description> : null}
      {/* <div className='input-description'>{description}</div> */}
      <input type='text' name={title} id={title} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default InputShortText;
