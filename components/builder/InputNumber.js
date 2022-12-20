// import Title from './Title';
import Description from './Description';

function InputNumber({ title, description, placeholder, type, style, handleChange} ) {
  return (
    <div style={style}>
      <label className='input-title'>
        {title}
      </label>
      {description ?  <Description className="input-description" description={description} /> : null}
      <input type='number' name={type} id={title} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default InputNumber;
