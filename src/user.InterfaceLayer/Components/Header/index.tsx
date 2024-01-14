import React from "react";
import * as ST from "./styled/styled";
import Bento from "../../shared/assets/icons/bento.svg?react";
import ArrowBack from "../../shared/assets/icons/arrow-back.svg?react";
import ImageAtom from "../../Libraries/UI_KIT/Atoms/Image.atom";
import ButtonAtom from "../../Libraries/UI_KIT/Atoms/Button.atom";
import ImageEnum from "../../Libraries/UI_KIT/Atoms/Image.atom/enum";
import ButtonEnum from "../../Libraries/UI_KIT/Atoms/Button.atom/enum";

const Header: React.FC = () => {
  return (
    <ST.Header>
      <ImageAtom margin="0 20px 0 0" type={ImageEnum.enum_defaultSvg} icon={<Bento />} />
      <ImageAtom
        margin="0 28px 0 0"
        type={ImageEnum.enum_defaultSvg}
        icon={<ArrowBack />}
      />
      <ButtonAtom
        margin="0 28px 0 0"
        type={ButtonEnum.enum_defaultButton}
        children="Просмотр"
      />
      <ButtonAtom type={ButtonEnum.enum_defaultButton} children="Управление" />
    </ST.Header>
  );
};
export default Header;
