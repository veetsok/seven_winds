import React, { useState } from "react";
import SelectIcon from "../../shared/assets/icons/selectIcon.svg?react";
import * as ST from "./styled/";
import TextAtom from "../../Libraries/UI_KIT/Atoms/Text.atom";
import ImageAtom from "../../Libraries/UI_KIT/Atoms/Image.atom";
import TextEnum from "../../Libraries/UI_KIT/Atoms/Text.atom/enum";
import ImageEnum from "../../Libraries/UI_KIT/Atoms/Image.atom/enum";
import Colors from "../../constants/colors";
import ProjectsList from "../../Libraries/UI_KIT/Molecules/ProjectsList.molecule";
import { dataProjects } from "./const";

const Navbar: React.FC = () => {
  const [activeProject, setActiveProject] = useState<string | null>(null);

  return (
    <ST.Navbar>
      <ST.NavbarTitle>
        <ST.Title>
          <TextAtom type={TextEnum.enum_Text_H4} children="Название проекта" />
          <TextAtom type={TextEnum.enum_Text_H6} children="Аббревиатура" />
        </ST.Title>
        <ImageAtom
          fill={Colors.WHITE}
          type={ImageEnum.enum_defaultSvg}
          icon={<SelectIcon />}
        />
      </ST.NavbarTitle>
      {dataProjects.map((projects) => (
        <ProjectsList
          key={projects}
          projects={projects}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
        />
      ))}
    </ST.Navbar>
  );
};

export default Navbar;
