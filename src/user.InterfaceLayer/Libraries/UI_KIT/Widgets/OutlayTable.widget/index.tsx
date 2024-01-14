import React from "react";
import { OutlayTableProps } from "./type";
import { useOutlayData } from "../../../../../business.InterfaceLayer/services/hooks/useOutlayData";
import ProjectNameTitle from "../../Molecules/ProjectName.molecule";
import * as ST from "./styled/styled";
import { RowResponse } from "../../../../../business.InterfaceLayer/entities/api/types";
import Spinner from "../../../../general.components/Spinner";
import ListItems from "../../Cells/ListItems.cell";
import ColumnHead from "../../Molecules/ColumnHead.molecule";
import BlankItemList from "../../Cells/BlankItemList.cell";

const OutlayTable: React.FC<OutlayTableProps> = () => {
  const {
    outlayData,
    createRow,
    updateRow,
    deleteRowById,
    newRow,
    newChild,
    addChildRow,
    createParams,
    isLoading,
    isFetching,
  } = useOutlayData();

  const handleInputChange = (field: string, value: string | number) => {
    createParams(field, value);
  };
  const handleAddRow = () => {
    createRow(newRow);
  };

  const handleDeleteRow = (id: number) => {
    deleteRowById(id);
  };

  const renderChildRows = (
    rowData: RowResponse["params"],
    depth = 0,
    lastDepth = rowData.child.length
  ): React.ReactNode => {
    return (
      <>
        <ListItems
          isLoading={isLoading}
          key={rowData.id}
          rowData={rowData}
          $lineLeft={depth < 1 ? `0` : `2px`}
          $lineStyle={depth < 0 ? `0` : `${lastDepth * 54}px`}
          margin={`${depth * 20}px`}
          addChildRow={() => addChildRow(rowData.id, newChild)}
          onDelete={() => handleDeleteRow(rowData.id)}
          updateRow={updateRow}
        />
        {isFetching && <Spinner />}
        {Array.isArray(rowData.child) &&
          rowData.child.length !== 0 &&
          rowData.child.map((childData) => renderChildRows(childData, depth + 1))}
      </>
    );
  };

  return (
    <ST.Container>
      <ProjectNameTitle children="Строительно-монтажные работы" />
      <ST.Table>
        <ColumnHead />
        {outlayData.length > 0 ? (
          outlayData.map((rowData: RowResponse["params"]) => renderChildRows(rowData))
        ) : (
          <BlankItemList
            isLoading={isLoading}
            handleInputChange={handleInputChange}
            rowData={newRow}
            onAdd={handleAddRow}
          />
        )}
      </ST.Table>
    </ST.Container>
  );
};

export default OutlayTable;
