// import Title from './Title';
import Description from './Description';

function InputLongText({ title, description, style, placeholder, handleChange }) {
  return (
    <div style={style}>
      <label className='input-title'>
        {title}
      </label>
      {description ? <Description className="input-description">{description}</Description> : null}
      <textarea name={title} id={title} placeholder={placeholder} onChange={handleChange} ></textarea>
    </div>
  );
}

export default InputLongText;
