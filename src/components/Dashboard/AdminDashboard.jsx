import { useLocation } from "react-router-dom";
import { useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import { employees } from "../../utils/localStorage";
import EmployeeSummaryGrid from "./AdminDashboard/EmployeeSummaryGrid";
import TaskForm from "./AdminDashboard/TaskForm";

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
          <TaskForm
            handleFormSubmit={handleFormSubmit}
            titleRef={titleRef}
            dateRef={dateRef}
            assignRef={assignRef}
            employeeNames={employeeNames}
            categoryRef={categoryRef}
            descriptionRef={descriptionRef}
            taskTypeRef={taskTypeRef}
          />

          <EmployeeSummaryGrid
            makeRowData={makeRowData}
            makeColumnData={makeColumnData}
            defaultColDef={defaultColDef}
          />
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
