import { RowResponse } from "../../../../../../business.InterfaceLayer/entities/api/types";

export interface ListItemsProps {
  isLoading?: boolean;
  rowData?: RowResponse["params"];
  onDelete?: () => void;
  updateRow?: (id: number, updateData: RowResponse["params"]) => void;
  addChildRow?: () => void;
  margin?: string;
  $lineStyle?: string;
  $lineLeft?: string;
}
