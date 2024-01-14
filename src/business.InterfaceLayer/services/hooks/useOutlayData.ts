import { useState } from "react";
import {
  useGetOutlayRowsQuery,
  useCreateOutlayRowMutation,
  useUpdateOutlayRowMutation,
  useDeleteOutlayRowMutation,
  mainID,
} from "../../entities/api";
import { ChildRow, RowResponse } from "../../entities/api/types";

export const useOutlayData = () => {
  const {
    data: outlayData = [],
    isLoading,
    isFetching,
    refetch,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  } = useGetOutlayRowsQuery({ mainID });
  const [createRow] = useCreateOutlayRowMutation();
  const [updateRow] = useUpdateOutlayRowMutation();
  const [deleteRow] = useDeleteOutlayRowMutation();

  const [newRow, setNewRow] = useState<Partial<RowResponse>>({
    params: {
      rowName: "0",
      salary: 0,
      equipmentCosts: 0,
      overheads: 0,
      estimatedProfit: 0,

      id: 0,
      machineOperatorSalary: 0,
      mainCosts: 0,
      materials: 0,
      mimExploitation: 0,
      supportCosts: 0,
      total: 0,
      child: [],
    },
  });

  const createParams = (field: string, value: string | number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    setNewRow((prevNewRow) => ({
      ...prevNewRow,
      params: {
        ...prevNewRow.params,
        [field]: value,
      },
    }));
  };

  const deleteRowById = async (id: number) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await deleteRow({ params: { id } });
    refetch();
  };

  const [newChild] = useState<Partial<Partial<ChildRow>>>({
    rowName: "0",
    salary: 0,
    equipmentCosts: 0,
    overheads: 0,
    estimatedProfit: 0,
    parentId: 0,
    id: 0,
    machineOperatorSalary: 0,
    mainCosts: 0,
    materials: 0,
    mimExploitation: 0,
    supportCosts: 0,
    total: 0,
    child: [],
  });

  const addChildRow = async (parentId: number, child: Partial<ChildRow>) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    await createRow({ params: { ...child, parentId } });
    refetch();
  };

  return {
    outlayData,
    newRow,
    newChild,
    createParams,
    addChildRow,
    createRow: async (rowData: Partial<RowResponse>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await createRow({ ...rowData });
      refetch();
    },
    updateRow: async (id: number, updatedData: Partial<RowResponse["params"]>) => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await updateRow({ params: { id, ...updatedData } });
      refetch();
    },
    deleteRowById,
    isLoading,
    isFetching,
  };
};
