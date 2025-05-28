import { AgGridReact } from "ag-grid-react";
import { useLocation } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";

ModuleRegistry.registerModules([AllCommunityModule]);

const AdminDashboard = () => {
  const { state } = useLocation();
 
  const makeRowData = Array.isArray(state?.employees)
    ? state.employees.map((emp) => ({
        firstName: emp.firstName,
        newTask: emp.taskCounts.newTask,
        active: emp.taskCounts.active,
        completed: emp.taskCounts.completed,
        failed: emp.taskCounts.failed,
      }))
    : [];

  const makeColumnData =
    makeRowData.length > 0
      ? Object.keys(makeRowData[0]).map((row) => ({
          field: row,
          headerName: row === "firstName" ? "EMPLOYEE NAME" : row.toUpperCase(),
        }))
      : [
          { field: "firstName", headerName: "EMPLOYEE NAME" },
          { field: "newTask", headerName: "NEW TASK" },
          { field: "active", headerName: "ACTIVE" },
          { field: "completed", headerName: "COMPLETED" },
          { field: "failed", headerName: "FAILED" },
        ];

  const defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="h-screen w-full px-7 py-4">
          <div className="p-5 bg-[#1c1c1c] mt-5 rounded">
            <form className="flex flex-col md:flex-row flex-wrap w-full gap-6">
              <div className="w-full md:w-1/2">
                <div>
                  <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                  <input
                    className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                    type="text"
                    placeholder="Make a UI design"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                  <input
                    className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                    type="date"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                  <input
                    className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                    type="text"
                    placeholder="employee name"
                  />
                </div>
                <div>
                  <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                  <input
                    className="text-sm py-1 px-2 w-full md:w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                    type="text"
                    placeholder="design, dev, etc"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col">
                <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                <textarea
                  className="w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400"
                  name=""
                  id=""
                ></textarea>
                <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                  Create Task
                </button>
              </div>
            </form>
          </div>

          <div className="mt-5">
            <h2 className="text-white text-lg mb-3">Employee Task Summary</h2>
            <div
              className="ag-theme-alpine"
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
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
