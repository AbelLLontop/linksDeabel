import { statesInput } from "./statesInput";

export const selectorColor = (option) => {
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