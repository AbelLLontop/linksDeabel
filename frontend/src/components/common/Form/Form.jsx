import React, { useState } from 'react';
import FormContent from './FormContent';
import styled from 'styled-components';
import { useRef } from 'react';
import { useEffect } from 'react';

const MessageFormContent = styled.div`
  color: ${(props) => props.options.message_fondo};
  .message {
    color: ${(props) => props.options.message_color};
    background-color: ${(props) => props.options.message_fondo};
    padding: 1px 10px;
    font-size: 10px;
    border-radius: 4px;
  }
`;

const MessageForm = ({ title, text, options }) => (
  <MessageFormContent options={options}>
    {title}
    {text !== '' && <span className="message">{text}</span>}
  </MessageFormContent>
);

const statesInput = {
  success: 'success',
  error: 'error',
  default: 'default',
};

const selectorColor = (option) => {
  switch (option) {
    case statesInput.error:
      return {
        input: {
          input_color: '#ff7676',
          input_border: '#ee3434',
          input_border_focus: '#ee3434',
          input_caret_color: '#ee3434',
        },
        message: {
          message_title: '¡DETENTE!',
          message_fondo: '#ff7676',
          message_color: '#000000',
          header_color: '#ff7676',
        },
      };

    case statesInput.success:
      return {
        input: {
          input_color: '#d9ff76',
          input_border: '#c9ee34',
          input_border_focus: '#c9ee34',
          input_caret_color: '#7aee34',        },
        message: {
          message_title: '¡Excelente!',
          header_color: '#a1aaaf',
          message_fondo: '#ffed76',
          message_color: '#000000',
        },
      };
    default:
      return {
        input: {
          input_color: '#dbdbdb',
          input_border: '#040404',
          input_border_focus: '#1877f2',
          input_caret_color: '#1877f2',
        },
        message: {
          header_color: '#a1aaaf',
          message_fondo: '#ff7676',
          message_color: '#000000',
        },
      };
  }
};

const InputFormContent = styled.label`
  color: #73797c;
  font-size: 0.8rem;
  margin-bottom: 4px;
  display: block;

  animation-name: ${(props) => (props.active ? 'input-animation' : '')};
  animation-duration: 0.4s;

  input {
    padding: 10px 11px;
    border-radius: 4px;
    color: ${(props) => props.options.input_color};
    border: none;
    outline: none;
    background-color: #14222c;
    width: 100%;
    box-sizing: border-box;
    border: solid 1px ${(props) => props.options.input_border};
    &:focus {
      border: solid 1px ${(props) => props.options.input_border_focus};
    }
    caret-color: ${(props) => props.options.input_caret_color};
    position: relative;
  }
  @keyframes input-animation {
    0% {
      -webkit-transform: translate(2px, 1px) rotate(0deg);
    }
    10% {
      -webkit-transform: translate(-1px, -2px) rotate(-1deg);
    }
    20% {
      -webkit-transform: translate(-3px, 0px) rotate(1deg);
    }
    30% {
      -webkit-transform: translate(0px, 2px) rotate(0deg);
    }
    40% {
      -webkit-transform: translate(1px, -1px) rotate(1deg);
    }
    50% {
      -webkit-transform: translate(-1px, 2px) rotate(-1deg);
    }
    60% {
      -webkit-transform: translate(-3px, 1px) rotate(0deg);
    }
    70% {
      -webkit-transform: translate(2px, 1px) rotate(-1deg);
    }
    80% {
      -webkit-transform: translate(-1px, -1px) rotate(1deg);
    }
    90% {
      -webkit-transform: translate(2px, 2px) rotate(0deg);
    }
    100% {
      -webkit-transform: translate(1px, -2px) rotate(-1deg);
    }
  }

  header {
    color: ${(props) => props.options.header_color};
    padding-bottom: 3px;
  }
`;

const HeaderFormInput = ({ options, name, messageText }) => (
  <header>
    {options?.message_title ? (
      <MessageForm
        options={options}
        title={options.message_title}
        text={messageText}
      />
    ) : (
      <>{name}</>
    )}
  </header>
);
const InputForm = ({ name = '', nameLabel = '', state, referencia }) => {
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
      <input name={name} value={state.value} type="text" ref={referencia} />
    </InputFormContent>
  );
};

const HeaderForm = () => (
  <header>
    <i className="icon-setting"></i>Formulario de Ajuste
  </header>
);

const LogoForm = () => (
  <div className="logo-container">
    <div className="logo"></div>
  </div>
);

const ButtonsForm = () => (
  <div className="buttons">
    <div className="btn btn-cancel">Cancel</div>
    <button className="btn btn-save">Save</button>
  </div>
);

const conditionTitle = (value, setState) => {
  if (value.length > 0) {
    setState({
      color: statesInput.default,
      message: '',
    });
    return true;
  } else {
    setState({
      color: statesInput.error,
      message: 'El campo no puede estar vacio',
    });
    return false;
  }
};
const conditionDescription = (value, setState) => {
  if (value.length > 0) {
    setState({
      color: statesInput.default,
      message: '',
    });
    return true;
  } else {
    setState({
      color: statesInput.error,
      message: 'El campo no puede estar vacio',
    });
    return false;
  }
};
const conditionLink = (value, setState) => {
  if (value.length > 0) {
    let url;
    try {
      url = new URL(value);
      setState({
        color: statesInput.default,
        message: '',
      });
      return true;
    } catch (_) {
      setState({
        color: statesInput.error,
        message: 'El formato de URL es incorrecto',
      });
      return false;
    }
  } else {
    setState({
      color: statesInput.error,
      message: 'El campo no puede estar vacio',
    });
    return false;
  }
};

const Form = () => {
  const [stateInputLink, setStateInputLink] = useState({
    color: statesInput.default,
    message: '',
  });
  const [stateInputTitle, setStateInputTitle] = useState({
    color: statesInput.default,
    message: '',
  });
  const [stateInputDescription, setStateInputDescription] = useState({
    color: statesInput.default,
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const referencias = {
    link: useRef(),
    title: useRef(),
    description: useRef(),
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const link = referencias.link.current.value;
    const title = referencias.title.current.value;
    const description = referencias.description.current.value;
    const validationLink = conditionLink(link, setStateInputLink);
    const validationTitle = conditionTitle(title, setStateInputTitle);
    const validationDescription = conditionDescription(
      description,
      setStateInputDescription
    );

    if (validationLink && validationTitle && validationDescription) {
      console.log('TODO ESTA CORRECTO');
      referencias.link.current.disabled = true;
      referencias.title.current.disabled = true;
      referencias.description.current.disabled = true;
      setStateInputDescription({ color: statesInput.success, message: '' });
      setStateInputLink({ color: statesInput.success, message: '' });
      setStateInputTitle({ color: statesInput.success, message: '' });

      
      
      
      setLoading(true);
    } else {
      console.log('ERROR EN EL FORMULARIO');
    }
  };

  return (
    <FormContent as="form" onSubmit={handleSubmit}>
      <HeaderForm />
      <LogoForm />
      {loading && (
       <div style={{color:'#b8b8b8',display:'flex',gap:'4px',alignItems:'center',fontSize:'.8rem',justifyContent:'center'}}><span className='loading' style={{ display: 'block', textAlign: 'center' }}></span> <div className='text-animation'>actualizando...</div></div> 
      )}

      <div className="inputs">
        <InputForm
          nameLabel="link"
          name="link"
          referencia={referencias.link}
          state={stateInputLink}
        />
        <InputForm
          nameLabel="title"
          name="title"
          referencia={referencias.title}
          state={stateInputTitle}
        />
        <InputForm
          nameLabel="description"
          name="description"
          referencia={referencias.description}
          state={stateInputDescription}
        />
      </div>
      <ButtonsForm />
    </FormContent>
  );
};

export default Form;
