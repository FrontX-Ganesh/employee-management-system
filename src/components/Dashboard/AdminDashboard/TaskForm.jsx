const TaskForm = ({
  handleFormSubmit,
  titleRef,
  dateRef,
  assignRef,
  employeeNames,
  categoryRef,
  descriptionRef,
  taskTypeRef,
}) => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
      <form
        onSubmit={handleFormSubmit}
        className="flex flex-col md:flex-row flex-wrap w-full gap-8"
      >
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Task Title
            </label>
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
            <label className="text-sm text-gray-600 block mb-1">
              Assign to
            </label>
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
            <label className="text-sm text-gray-600 block mb-1">
              Description
            </label>
            <textarea
              ref={descriptionRef}
              className="w-full h-32 text-sm py-2 px-3 rounded-md bg-white border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-emerald-500 hover:border-emerald-400 transition"
              placeholder="Describe the task..."
            ></textarea>
          </div>

          <div>
            <label className="text-sm text-gray-600 block mb-1">
              Task Type
            </label>
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
  );
};

export default TaskForm;
