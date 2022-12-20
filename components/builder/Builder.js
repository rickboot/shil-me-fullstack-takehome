import { useState } from 'react';
import Button from './builder-components/Button';
import Description from './builder-components/Description';
import InputLongText from './builder-components/InputLongText';
import InputShortText from './builder-components/InputShortText';
import InputNumber from './builder-components/InputNumber';
import Text from './builder-components/Text';
import Title from './builder-components/Title';

export default function Builder({ config }) {
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
    console.log(formValues)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('form submitted');
    console.log('formValues', formValues)
  };

  const builderComponents = {
    title: (config) => <Title {...config} />,
    description: (config) => <Description {...config} />,
    text: (config) => <Text {...config} />,
    button: (config) => <Button {...config} />,
    'input-number': (config) => <InputNumber handleChange={handleChange} {...config} />,
    'input-long-text': (config) => <InputLongText handleChange={handleChange} {...config} />,
    'input-short-text': (config) => <InputShortText handleChange={handleChange} {...config} />,
  };

  // TO-DO: Keep track of every input component's
  // values in a dictionary so that
  // const [state, setState] = useState(...);

  const { title, description, style, components } = config;

  let childComponents;
  if (components) {
    childComponents = components.map((component, index) => {
      const mergedConfig = { ...component, key: index };
      return builderComponents[component.type](mergedConfig);
    });
  }

  return (
    <div className={'card'} style={style || null}>
      <form onSubmit={handleSubmit}>
        {title ? <Title title={title} /> : null}
        {description ? <Description {...config} className="main-description" /> : null}
        {childComponents}
      </form>
    </div>
  );
}
