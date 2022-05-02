import BtnFormOpenModal from '../Btns/BtnFormOpenModal';

import InputSearch from '../Inputs/InputSearch';

import { OptionsContent } from './style';

const OptionsFilterNav = () => {
  return (
    <OptionsContent>
      <InputSearch />
      <BtnFormOpenModal/>
    </OptionsContent>
  );
};

export default OptionsFilterNav;
