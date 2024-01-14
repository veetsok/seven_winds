import React from "react";
import * as ST from "./styled/styled";
import { RowResponse } from "../../../../../business.InterfaceLayer/entities/api/types";
import Input from "../../Atoms/Input.atom";
import { InputTypeEnum } from "../../Atoms/Input.atom/enum";
import ImageAtom from "../../Atoms/Image.atom";
import ImageEnum from "../../Atoms/Image.atom/enum";
import AddIcon from "../../../../shared/assets/icons/add-icon.svg?react";
import Colors from "../../../../constants/colors";

export interface BlankItemListProps {
  isLoading?: boolean;
  rowData?: Partial<RowResponse>;
  onAdd?: () => void;
  handleInputChange?: (field: string, value: string | number) => void;
}

const BlankItemList: React.FC<BlankItemListProps> = ({
  isLoading,
  rowData,
  handleInputChange,
  onAdd,
}) => {
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onAdd?.();
      handleInputChange?.("rowName", "");
      handleInputChange?.("salary", 0);
      handleInputChange?.("equipmentCosts", 0);
      handleInputChange?.("overheads", 0);
      handleInputChange?.("estimatedProfit", 0);
    }
  };

  const handleAddRow = () => {
    onAdd?.();
    handleInputChange?.("rowName", "");
    handleInputChange?.("salary", 0);
    handleInputChange?.("equipmentCosts", 0);
    handleInputChange?.("overheads", 0);
    handleInputChange?.("estimatedProfit", 0);
  };

  return (
    <>
      <ST.Container>
        <ImageAtom
          borderRadius="6px"
          background={Colors.BORDER}
          padding="6px 2px"
          width="24px"
          height="16px"
          cursor="pointer"
          type={ImageEnum.enum_defaultSvg}
          icon={<AddIcon />}
          onClick={handleAddRow}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          border={`1px solid ${Colors.BORDER}`}
          type={InputTypeEnum.TEXT}
          placeholder="Наименование работ"
          value={rowData?.params?.rowName}
          onChange={(value) => handleInputChange?.("rowName", value)}
          onKeyDown={handleKeyPress}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          border={`1px solid ${Colors.BORDER}`}
          type={InputTypeEnum.NUMBER}
          placeholder="Основная з/п"
          value={rowData?.params?.salary}
          onChange={(value) => handleInputChange?.("salary", value)}
          onKeyDown={handleKeyPress}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          border={`1px solid ${Colors.BORDER}`}
          type={InputTypeEnum.NUMBER}
          placeholder="Оборудование"
          value={rowData?.params?.equipmentCosts}
          onChange={(value) => handleInputChange?.("equipmentCosts", value)}
          onKeyDown={handleKeyPress}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          border={`1px solid ${Colors.BORDER}`}
          type={InputTypeEnum.NUMBER}
          placeholder="Накладные расходы"
          value={rowData?.params?.overheads}
          onChange={(value) => handleInputChange?.("overheads", value)}
          onKeyDown={handleKeyPress}
        />
      </ST.Container>
      <ST.Container>
        <Input
          isLoading={isLoading}
          padding="5px 0 5px 10px"
          border={`1px solid ${Colors.BORDER}`}
          type={InputTypeEnum.NUMBER}
          placeholder="Сметная прибыль"
          value={rowData?.params?.estimatedProfit}
          onChange={(value) => handleInputChange?.("estimatedProfit", value)}
          onKeyDown={handleKeyPress}
        />
      </ST.Container>
    </>
  );
};

export default BlankItemList;
