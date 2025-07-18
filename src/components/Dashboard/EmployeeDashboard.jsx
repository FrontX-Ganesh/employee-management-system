import { useLocation } from "react-router-dom";
import TaskCard from "./EmployeeDashboard/TaskCard";

const statusColors = {
  newTask: "bg-sky-500",
  completed: "bg-emerald-500",
  active: "bg-amber-400",
  failed: "bg-rose-500",
};

const EmployeeDashboard = () => {
  const { state } = useLocation();
  const employeeData = state?.employeeData;

  const getTaskBgColor = (task) => {
    if (task.completed) return "bg-emerald-500";
    if (task.active) return "bg-amber-400";
    if (task.newTask) return "bg-sky-500";
    return "bg-rose-500";
  };

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-indigo-700">Task Summary</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-10">
        {employeeData?.taskCounts &&
          Object.entries(employeeData.taskCounts).map(([status, count]) => (
            <div
              key={status}
              className={`rounded-2xl py-6 px-6 text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out ${
                statusColors[status] || "bg-gray-400"
              }`}
            >
              <h2 className="text-4xl font-extrabold">{count}</h2>
              <h3 className="text-lg mt-2 font-medium tracking-wide">
                {status.toUpperCase()} TASK
              </h3>
            </div>
          ))}
      </div>

      <h1 className="text-4xl font-bold text-indigo-700 mt-16">Task Info</h1>
      <div className="flex flex-wrap gap-6 mt-6">
        {Array.isArray(employeeData?.tasks) &&
          employeeData.tasks.map((task) => (
            <TaskCard
              key={task.taskId}
              task={task}
              getTaskBgColor={getTaskBgColor}
            />
          ))}
      </div>
    </section>
  );
};

export default EmployeeDashboard;