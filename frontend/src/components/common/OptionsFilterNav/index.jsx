

import BtnFormOpenModal from '@/components/common/Btns/BtnFormOpenModal';
import InputSearch from '@/components/common/Inputs/InputSearch';
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
