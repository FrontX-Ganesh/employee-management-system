import { AgGridReact } from "ag-grid-react";
import { useLocation } from "react-router-dom";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ModuleRegistry, AllCommunityModule } from "ag-grid-community";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { employees } from "../../utils/localStorage";

ModuleRegistry.registerModules([AllCommunityModule]);

const AdminDashboard = () => {
  const { state } = useLocation();
  const titleRef = useRef();
  const dateRef = useRef();
  const assignRef = useRef();
  const categoryRef = useRef();
  const descriptionRef = useRef();
  const taskTypeRef = useRef();

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
      : [];

  const defaultColDef = {
    flex: 1,
    sortable: true,
    filter: true,
    resizable: true,
  };

  const employeeNames =
    Array.isArray(state?.employees) &&
    state?.employees.map((emp) => ({
      id: emp.id,
      name: emp.firstName,
    }));

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (
      titleRef.current.value === "" ||
      dateRef.current.value === "" ||
      assignRef.current.value === "" ||
      categoryRef.current.value === "" ||
      descriptionRef.current.value === "" ||
      taskTypeRef.current.value === ""
    ) {
      toast.error("Please fill the form.");
      return false;
    }

    const taskData = {
      taskId: Date.now(),
      active: taskTypeRef.current.value === "active",
      newTask: taskTypeRef.current.value === "newTask",
      completed: taskTypeRef.current.value === "completed",
      failed: taskTypeRef.current.value === "failed",
      taskTitle: titleRef.current.value,
      taskDescription: descriptionRef.current.value,
      taskDate: dateRef.current.value,
      category: categoryRef.current.value,
    };

    const newTaskData = employees.map((info) => {
      if (info.id === parseInt(assignRef.current.value)) {
        info.tasks.push(taskData);
      }
      return info;
    });

    console.log(newTaskData);
  };

  return (
    <>
      <ToastContainer />
      <section className="max-w-7xl mx-auto">
        <div className="min-h-screen w-full px-6 py-8 bg-gray-50">
          <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col md:flex-row flex-wrap w-full gap-8"
            >
              <div className="w-full md:w-1/2 flex flex-col gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Task Title</label>
                  <input
                    ref={titleRef}
                    type="text"
                    placeholder="Task Title"
                    className="text-sm py-2 px-3 w-full rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-1">Date</label>
                  <input
                    ref={dateRef}
                    type="date"
                    min={new Date().toISOString().split("T")[0]}
                    className="text-sm py-2 px-3 w-full rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-1">Assign to</label>
                  <select
                    ref={assignRef}
                    className="text-sm py-2 px-3 w-full rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select employee
                    </option>
                    {employeeNames.map((emp) => (
                      <option key={emp.id} value={emp.id}>
                        {emp.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-1">Category</label>
                  <input
                    ref={categoryRef}
                    type="text"
                    placeholder="Design, dev, etc."
                    className="text-sm py-2 px-3 w-full rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                  />
                </div>
              </div>

              <div className="w-full md:w-2/5 flex flex-col justify-between gap-4">
                <div>
                  <label className="text-sm text-gray-600 block mb-1">Description</label>
                  <textarea
                    ref={descriptionRef}
                    className="w-full h-32 text-sm py-2 px-3 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                    placeholder="Describe the task..."
                  ></textarea>
                </div>

                <div>
                  <label className="text-sm text-gray-600 block mb-1">Task Type</label>
                  <select
                    ref={taskTypeRef}
                    className="text-sm py-2 px-3 w-full rounded-md bg-white border border-gray-300 text-gray-800 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select task type
                    </option>
                    <option value="active">Active</option>
                    <option value="completed">Completed</option>
                    <option value="failed">Failed</option>
                    <option value="newTask">New Task</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="bg-emerald-500 text-white py-3 px-5 rounded-md text-sm font-medium hover:bg-emerald-600 transition shadow-md hover:shadow-lg"
                >
                  Create Task
                </button>
              </div>
            </form>
          </div>

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
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
