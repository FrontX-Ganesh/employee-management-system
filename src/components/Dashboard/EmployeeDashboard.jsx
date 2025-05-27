import Header from "../other/Header";

const EmployeeDashboard = () => {
  return (
    <>
      <Header />
      <section className="max-w-7xl mx-auto">
        <div className="min-h-screen w-full p-4 md:p-7">
          {/* Task Summary Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-10">
            <div className="rounded-xl py-6 px-6 bg-blue-400">
              <h2 className="text-3xl font-bold">10</h2>
              <h3 className="text-xl mt-0.5 font-medium">New Task</h3>
            </div>
            <div className="rounded-xl py-6 px-6 bg-green-400">
              <h2 className="text-3xl font-bold">8</h2>
              <h3 className="text-xl mt-0.5 font-medium">Completed Task</h3>
            </div>
            <div className="rounded-xl py-6 px-6 bg-yellow-400">
              <h2 className="text-3xl text-black font-bold">5</h2>
              <h3 className="text-xl mt-0.5 text-black font-medium">
                Accepted Task
              </h3>
            </div>
            <div className="rounded-xl py-6 px-6 bg-red-400">
              <h2 className="text-3xl font-bold">1</h2>
              <h3 className="text-xl mt-0.5 font-medium">Failed Task</h3>
            </div>
          </div>

          {/* Task List */}
          <div
            id="tasklist"
            className="h-auto overflow-x-auto flex items-start justify-between gap-5 flex-nowrap w-full py-4 mt-16"
          >
            {/* Task Card 1 */}
            <div className="flex-shrink-0 w-[250px] p-5 bg-red-400 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
                  Tickle right
                </h3>
                <h4 className="text-sm">10/10/2025</h4>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">Project Start</h2>
              <p className="text-sm mt-2">Project all installation</p>
              <div className="flex justify-between mt-6">
                <button className="bg-green-500 rounded font-medium py-1 px-2 text-xs">
                  Mark as Completed
                </button>
              </div>
            </div>

            {/* Task Card 2 */}
            <div className="flex-shrink-0 w-[300px] p-5 bg-green-400 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
                  Architecure
                </h3>
                <h4 className="text-sm">8/10/2025</h4>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">Project all info</h2>
              <p className="text-sm mt-2">Flow charts</p>
              <div className="mt-6">
                <button className="bg-blue-500 rounded font-medium py-1 px-2 text-xs">
                  Accept Task
                </button>
              </div>
            </div>

            {/* Task Card 3 */}
            <div className="flex-shrink-0 w-[300px] p-5 bg-blue-400 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
                  All Task
                </h3>
                <h4 className="text-sm">10/9/2025</h4>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">Disusscion</h2>
              <p className="text-sm mt-2">Root cause for project</p>
              <div className="mt-6">
                <button className="w-full bg-green-600 rounded font-medium py-1 px-2 text-xs">
                  Complete
                </button>
              </div>
            </div>

            {/* Task Card 4 */}
            <div className="flex-shrink-0 w-[300px] p-5 bg-yellow-400 rounded-xl">
              <div className="flex justify-between items-center">
                <h3 className="bg-red-600 text-sm px-3 py-1 rounded">
                  Backend
                </h3>
                <h4 className="text-sm">20/9/202</h4>
              </div>
              <h2 className="mt-5 text-2xl font-semibold">
                Backend Architecure
              </h2>
              <p className="text-sm mt-2">Backend all information</p>
              <div className="mt-6">
                <button className="w-full bg-red-500 rounded font-medium py-1 px-2 text-xs">
                  Failed
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmployeeDashboard;
