import React from "react";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import * as ST from "./styled/styled";

interface ProjectNameTitleProps {
  children: string;
}

const ProjectNameTitle: React.FC<ProjectNameTitleProps> = ({ children }) => {
  return (
    <ST.Container>
      <TextAtom type={TextEnum.enum_Text_H3} color="#FFF" padding="10px 15px">
        {children}
      </TextAtom>
    </ST.Container>
  );
};
export default ProjectNameTitle;
