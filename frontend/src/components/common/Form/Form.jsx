import React, { useState, useRef, useContext } from 'react';
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
import linkService from '../../../services/LinkService';
import { FilterContextSet } from '../../../contexts/Filters/FilterContext';

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

const Form = ({ocultar}) => {
  const [stateInputLink, setStateInputLink] = useStateInput();
  const [stateInputTitle, setStateInputTitle] = useStateInput();
  const [stateInputDescription, setStateInputDescription] = useStateInput();
  const [loading, setLoading] = useState(false);
  const { setFilter } = useContext(FilterContextSet);
 
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
    const handleRadioTodos= (e) => {
      console.log('checkbox');
      setFilter((filter) => ({
        ...filter,
        nameCategory: '',
      }));
    };



    if (validationLink && validationTitle && validationDescription) {
      const url = new URL(stateInputLink.valor);
      const hostName = url.hostname.split('.');
      let page = 'default';
      let domain = hostName[0]
      if(hostName.length > 2){
        domain = hostName[1];
      }
    
      const hostNameFirstWorddUpper = domain.charAt(0).toUpperCase() + domain.slice(1);
      console.log(hostNameFirstWorddUpper);
      page = hostNameFirstWorddUpper;
      console.log('TODO ESTA CORRECTO');
      disabledInputSusses(setStateInputLink, 'Guardando URL...');
      disabledInputSusses(setStateInputDescription, 'Guardando Descripcion...');
      disabledInputSusses(setStateInputTitle, 'Guardando Titulo...');
      setLoading(true);

      const objetoRes = {
        "link": stateInputLink.valor,
        "user": "625da0c2b2fc43ecde7974fb",
        "title": stateInputTitle.valor,
        "description": stateInputDescription.valor,
        "nameCategory": page,
        }
        console.log(objetoRes);


      linkService.createLink({...objetoRes}).then(res=>{
          console.log(res);
          console.log('salio todo bien');
          handleRadioTodos();
          ocultar();
        }).catch(err=>{
          console.log(err);
          console.log('salio todo mal');
        });


      //logica de envio de datos



    } else {
      setLoading(false);
      console.log('ERROR EN EL FORMULARIO');
    }
  };

  return (
    <FormContent as="form" onSubmit={handleSubmit}  autoComplete="off">
      <HeaderForm />
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
      <ButtonsForm ocultar={ocultar}/>
    </FormContent>
  );
};

export default Form;
