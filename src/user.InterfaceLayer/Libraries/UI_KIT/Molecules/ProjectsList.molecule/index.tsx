import React from "react";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import NavbarIcon from "../../../../shared/assets/icons/navbar-icon.svg?react";
import ImageAtom from "../../Atoms/Image.atom";
import ImageEnum from "../../Atoms/Image.atom/enum";
import * as ST from "./styled/";
import Colors from "../../../../constants/colors";
import { ProjectsListProps } from "./type";

const ProjectsList: React.FC<ProjectsListProps> = (props: ProjectsListProps) => {
  const { projects, activeProject, setActiveProject } = props;
  const handleClick = () => {
    setActiveProject(activeProject === projects ? null : projects);
  };

  return (
    <ST.Container active={activeProject === projects} onClick={handleClick}>
      <ImageAtom width="22px" type={ImageEnum.enum_defaultSvg} icon={<NavbarIcon />} />
      <TextAtom
        color={Colors.WHITE}
        margin="0 0 0 14px"
        type={TextEnum.enum_Text_H4}
        children={projects}
      />
    </ST.Container>
  );
};

export default ProjectsList;
