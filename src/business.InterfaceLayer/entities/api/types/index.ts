export interface RowResponse {
  mainID: number | string;
  mainRowID: string;
  params: {
    id: number;
    rowName: string;
    salary: number;
    equipmentCosts: number;
    overheads: number;
    estimatedProfit: number;
    machineOperatorSalary: number;
    mainCosts: number;
    materials: number;
    mimExploitation: number;
    supportCosts: number;
    total: number;
    child: ChildRow[];
  };
}

export interface ChildRow {
  parentId: number;
  id: number;
  rowName: string;
  salary: number;
  equipmentCosts: number;
  overheads: number;
  estimatedProfit: number;

  machineOperatorSalary: number;
  mainCosts: number;
  materials: number;
  mimExploitation: number;
  supportCosts: number;
  total: number;
  child: ChildRow[];
}
