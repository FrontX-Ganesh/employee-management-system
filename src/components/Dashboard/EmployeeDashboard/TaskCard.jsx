const TaskCard = ({ task, getTaskBgColor }) => {
  return (
    <div
      className={`w-full sm:w-[48%] md:w-[30%] lg:w-[23%] p-5 rounded-2xl text-white shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out ${getTaskBgColor(
        task
      )}`}
    >
      <div className="flex justify-between items-center">
        <span className="bg-white/20 text-xs px-3 py-1 rounded-full font-semibold tracking-wide uppercase">
          {task.category}
        </span>
        <span className="text-xs font-medium opacity-90">{task.taskDate}</span>
      </div>
      <h2 className="mt-4 text-lg font-semibold leading-snug">
        {task.taskTitle}
      </h2>
      <p className="text-sm mt-2 opacity-95 leading-normal">
        {task.taskDescription}
      </p>
    </div>
  );
};

export default TaskCard;