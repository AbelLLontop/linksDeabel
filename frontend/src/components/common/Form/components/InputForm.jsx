import { useEffect, useState } from 'react';
import { HeaderFormInput } from './HeaderFormInput';
import { InputFormContent } from './InputFormContent';
import { selectorColor } from './selectorColor';
import { statesInput } from './statesInput';

export const InputForm2 = ({
  name = '',
  nameLabel = '',
  state,
  referencia,
}) => {
  const [stateColor, setStateColor] = useState(selectorColor(state.color));

  const [temblor, setTemblor] = useState(state.color == statesInput.error);

  useEffect(() => {
    setStateColor(selectorColor(state.color));
    setTemblor(state.color == statesInput.error);
  }, [state]);

  return (
    <InputFormContent
      options={stateColor.input}
      onAnimationEnd={() => setTemblor(false)}
      active={temblor}
    >
      <HeaderFormInput
        options={stateColor.message}
        name={nameLabel}
        messageText={state.message}
      />
      <input name={name} autoFocus value={state.value} type="text" ref={referencia} />
    </InputFormContent>
  );
};

export const InputForm = ({ name = '', nameLabel = '', state,setState }) => {

  const [temblor, setTemblor] = useState(state.state == statesInput.error);
  
  const handleInput = (e)=>{
    const valor = e.target.value;
    setState((a)=>({...a,valor:valor}));
  }
  useEffect(()=>{
    setTemblor(state.state == statesInput.error);
  },[state.colors])

  return (
    <InputFormContent
      options={state.colors.input}
      onAnimationEnd={() => setTemblor(false)}
      active={temblor} 
    >
      <HeaderFormInput
        options={state.colors.message}
        name={nameLabel}
        messageText={state.message}
      />
      <input disabled={state.state == statesInput.success} name={name} value={state.value} type="text" onChange={handleInput} />
    </InputFormContent>
  );
};
