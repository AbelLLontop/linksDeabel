import React, { useState, useRef } from 'react';
import FormContent from './FormContent';
import { statesInput } from './components/statesInput';
import { HeaderForm } from './components/HeaderForm';
import { LogoForm } from './components/LogoForm';
import { InputForm } from './components/InputForm';
import { ButtonsForm } from './components/ButtonsForm';
import { 
  conditionEmpty,
  conditionUrl,
  validateInput,
} from './components/conditions';
import { selectorColor } from './components/selectorColor';

const useStateInput = (state = statesInput.default) => {
  const [stateInput, setStateInput] = useState({
    colors: selectorColor(state.state),
    state: state,
    message: '',
    valor: '',
  });
  return [stateInput, setStateInput];
};

const disabledInputSusses = (setState,message) => {
  setState((prevState) => ({
    ...prevState,
    state: statesInput.success,
    colors: selectorColor(statesInput.success),
    message: message, 
  }));
}

const Form = () => {
  const [stateInputLink, setStateInputLink] = useStateInput();
  const [stateInputTitle, setStateInputTitle] = useStateInput();
  const [stateInputDescription, setStateInputDescription] = useStateInput();
  const [loading, setLoading] = useState(false);
 
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const validationLink = validateInput(stateInputLink, setStateInputLink, [
      conditionEmpty,
      conditionUrl,
    ]);
    const validationTitle = validateInput(stateInputTitle, setStateInputTitle, [
      conditionEmpty,
    ]);
    const validationDescription = validateInput(
      stateInputDescription,
      setStateInputDescription,
      [conditionEmpty]
    );


    if (validationLink && validationTitle && validationDescription) {
      console.log('TODO ESTA CORRECTO');
      disabledInputSusses(setStateInputLink, 'Guardando URL...');
      disabledInputSusses(setStateInputDescription, 'Guardando Descripcion...');
      disabledInputSusses(setStateInputTitle, 'Guardando Titulo...');
      setLoading(true);
    } else {
      setLoading(false);
      console.log('ERROR EN EL FORMULARIO');
    }
  };

  return (
    <FormContent as="form" onSubmit={handleSubmit}  autoComplete="off">
      <HeaderForm />
      <LogoForm />
      {loading && (
        <div
          style={{
            color: '#b8b8b8',
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            fontSize: '.8rem',
            justifyContent: 'center',
          }}
        >
          <span
            className="loading"
            style={{ display: 'block', textAlign: 'center' }}
          ></span>{' '}
          <div className="text-animation">actualizando...</div>
        </div>
      )}

      <div className="inputs">
        <InputForm
          nameLabel="link"
          name="link"
          state={stateInputLink}
          setState={setStateInputLink}
        />
        <InputForm
          nameLabel="title"
          name="title"
          state={stateInputTitle}
          setState={setStateInputTitle}
        />
        <InputForm
          nameLabel="description"
          name="description"
          state={stateInputDescription}
          setState={setStateInputDescription}
        />
      </div>
      <ButtonsForm />
    </FormContent>
  );
};

export default Form;
