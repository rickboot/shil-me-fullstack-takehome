// import Title from './Title';
import Description from './Description';

function InputShortText({ title, description, style, placeholder, handleChange }) {
  return (
    <div style={style}>
      <label className='input-title'>
        {title}
      </label>
      {description ? <Description className="input-description">{description}</Description> : null}
      <input type='text' name={title} id={title} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default InputShortText;
