import React, { useMemo } from "react";
import TextAtom from "../../Atoms/Text.atom";
import TextEnum from "../../Atoms/Text.atom/enum";
import * as ST from "./styled/styled";

interface ColumnHeadProps {}

const ColumnHead: React.FC<ColumnHeadProps> = React.memo(() => {
  const columnHead = useMemo(
    () => [
      "Уровень",
      "Наименование работ",
      "Основная з/п",
      "Оборудование",
      "Накладные расходы",
      "Сметная прибыль",
    ],
    []
  );

  return (
    <>
      {columnHead.map((e, id) => (
        <ST.ColumnHead>
          <TextAtom
            margin="0 0 0 12px"
            key={id}
            type={TextEnum.enum_Text_H4}
            children={e}
          />
        </ST.ColumnHead>
      ))}
    </>
  );
});
export default ColumnHead;
