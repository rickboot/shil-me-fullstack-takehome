// import Title from './Title';
import Description from './Description';

function InputNumber({ title, description, placeholder, type, style, handleChange} ) {
  return (
    <div style={style}>
      {/* {title ? <Title>{title}</Title> : null} */}
      {/* {title ? <Title title={title} /> : null} */}
      <label>
        {title}
      </label>
      {/* {description ? <Description>{description}</Description> : null} */}
      {description ?  <Description description={description} /> : null}
      <input type='number' name={type} id={title} placeholder={placeholder} onChange={handleChange} />
    </div>
  );
}

export default InputNumber;
