import { AgGridReact } from "ag-grid-react";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

ModuleRegistry.registerModules([AllCommunityModule]);

const EmployeeSummaryGrid = ({makeRowData, makeColumnData, defaultColDef}) => {
  return (
    <div className="mt-10">
      <h2 className="font-bold text-lg mb-4">Employee Task Summary</h2>
      <div
        className="ag-theme-alpine rounded-lg shadow hover:shadow-lg transition"
        style={{ width: "100%", maxHeight: "400px", overflow: "auto" }}
      >
        <AgGridReact
          rowData={makeRowData}
          columnDefs={makeColumnData}
          defaultColDef={defaultColDef}
          theme="legacy"
          domLayout="autoHeight"
          suppressHorizontalScroll={false}
          suppressVerticalScroll={false}
        />
      </div>
    </div>
  );
};

export default EmployeeSummaryGrid;
