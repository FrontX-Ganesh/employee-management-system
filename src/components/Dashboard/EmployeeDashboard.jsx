import { useLocation } from "react-router-dom";

// Better color palette for clarity and aesthetics
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
    <section className="max-w-7xl mx-auto px-4 md:px-7 py-4">
      <h1 className="text-4xl font-bold">Task Summary</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
        {employeeData?.taskCounts &&
          Object.entries(employeeData.taskCounts).map(([status, count]) => (
            <div
              key={status}
              className={`rounded-xl py-6 px-6 text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out ${
                statusColors[status] || "bg-gray-400"
              }`}
            >
              <h2 className="text-3xl font-bold">{count}</h2>
              <h3 className="text-xl mt-1 font-medium">
                {status.toUpperCase()} TASK
              </h3>
            </div>
          ))}
      </div>

      <h1 className="text-4xl font-bold mt-16">Task Info</h1>
      <div className="flex flex-wrap gap-5 justify-start w-full py-4">
        {Array.isArray(employeeData?.tasks) &&
          employeeData.tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              getTaskBgColor={getTaskBgColor}
            />
          ))}
      </div>
    </section>
  );
};

export default EmployeeDashboard;

const TaskCard = ({ task, getTaskBgColor }) => {
  return (
    <div
      className={`w-full sm:w-[45%] md:w-[30%] lg:w-[23%] p-5 rounded-xl text-white shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ease-in-out ${getTaskBgColor(
        task
      )}`}
    >
      <div className="flex justify-between items-center">
        <span className="bg-white/20 text-xs px-3 py-1 rounded font-medium">
          {task.category}
        </span>
        <span className="text-sm opacity-90">{task.taskDate}</span>
      </div>
      <h2 className="mt-5 text-xl font-semibold">{task.taskTitle}</h2>
      <p className="text-sm mt-2 opacity-95">{task.taskDescription}</p>
    </div>
  );
};
