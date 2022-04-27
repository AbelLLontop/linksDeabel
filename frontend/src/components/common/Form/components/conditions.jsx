import { selectorColor } from './selectorColor';
import { statesInput } from './statesInput';

export const validateInput = (state, setState, arrayconditions) => {
  const conditionsArray = [...arrayconditions];
  console.log(conditionsArray.length);
  for (let i = 0; i < conditionsArray.length; i++) {
    if (!conditionsArray[i](state, setState)) {
      console.log('paso la validacion ' + i);
      return false;
    }
  }
  return true;
};

const mostrarDefault = (state,setState) =>{
  const currentColorState = selectorColor(statesInput.default);
  setState({
    ...state,
    state: statesInput.default,
    message: '',
    colors: currentColorState,
  });
}
const mostrarError = (state,setState,message) =>{
  const currentColorState = selectorColor(statesInput.error);
  setState({
    ...state,
    state: statesInput.error,
    message: message,
    colors: currentColorState,
  });
}

export const conditionEmpty = (state, setState) => {
  if (state.valor.length > 0) {
    mostrarDefault(state,setState);
    return true;
  } else {
    mostrarError(state,setState,'El campo no puede estar vacio')
    return false;
  }
};
 
export const conditionUrl = (state, setState) => {
  let url;
  try {
    url = new URL(state.valor);
    mostrarDefault(state,setState);
    return true;
  } catch (_) {
    mostrarError(state,setState,'El formato de URL es incorrecto')
    return false;
  }
};
