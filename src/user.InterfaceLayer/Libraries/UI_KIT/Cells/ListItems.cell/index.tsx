import React, { useState } from "react";
import * as ST from "./styled/styled";
import ImageAtom from "../../Atoms/Image.atom";
import ImageEnum from "../../Atoms/Image.atom/enum";
import AddIcon from "../../../../shared/assets/icons/add-icon.svg?react";
import DeleteIcon from "../../../../shared/assets/icons/delete-icon.svg?react";
import Input from "../../Atoms/Input.atom";
import { InputTypeEnum } from "../../Atoms/Input.atom/enum";
import { ListItemsProps } from "./type";

const ListItems: React.FC<ListItemsProps> = ({
  isLoading,
  rowData,
  updateRow,
  onDelete,
  addChildRow,
  $lineStyle,
  $lineLeft,
  margin,
}) => {
  const handleInputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      updateRow?.(rowData?.id, dataRow);
    }
  };
  const [dataRow, setDataRow] = useState(rowData);

  const handleInputUpChange = (field: string, value: string | number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setDataRow((prevNewRow) => ({
      ...prevNewRow,
      [field]: value,
    }));
  };

  return (
    <>
      <ST.Container $checkHover={true}>
        <ImageAtom
          className="left-icon"
          borderRadius="6px 0 0 6px"
          padding="6px 0 6px 2px"
          margin={`0 0 0 ${margin}`}
          width="24px"
          height="16px"
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          icon={<AddIcon />}
          onClick={addChildRow}
        />
        <ST.LineBlock>
          <ST.Line $lineStyle={$lineStyle}></ST.Line>
        </ST.LineBlock>

        <ST.LineBlock>
          <ST.LineLeft $lineLeft={$lineLeft} $lineStyle={$lineStyle}></ST.LineLeft>
        </ST.LineBlock>

        <ST.Contents>
          <ImageAtom
            className="right-icon"
            borderRadius="0 6px 6px 0"
            padding="6px 0"
            width="24px"
            height="16px"
            cursor="pointer"
            type={ImageEnum.enum_defaultSvg}
            icon={<DeleteIcon />}
            onClick={onDelete}
          />
        </ST.Contents>
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          type={InputTypeEnum.TEXT}
          placeholder="Наименование работ"
          value={dataRow?.rowName}
          onChange={(value) => handleInputUpChange?.("rowName", value)}
          onKeyDown={handleInputKeyDown}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          type={InputTypeEnum.NUMBER}
          placeholder="Основная з/п"
          value={dataRow?.salary}
          onChange={(value) => handleInputUpChange?.("salary", value)}
          onKeyDown={handleInputKeyDown}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          type={InputTypeEnum.NUMBER}
          placeholder="Оборудование"
          value={dataRow?.equipmentCosts}
          onChange={(value) => handleInputUpChange?.("equipmentCosts", value)}
          onKeyDown={handleInputKeyDown}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          type={InputTypeEnum.NUMBER}
          placeholder="Накладные расходы"
          value={dataRow?.overheads}
          onChange={(value) => handleInputUpChange?.("overheads", value)}
          onKeyDown={handleInputKeyDown}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          type={InputTypeEnum.NUMBER}
          placeholder="Сметная прибыль"
          value={dataRow?.estimatedProfit}
          onChange={(value) => handleInputUpChange?.("estimatedProfit", value)}
          onKeyDown={handleInputKeyDown}
        />
      </ST.Container>
    </>
  );
};

export default ListItems;
