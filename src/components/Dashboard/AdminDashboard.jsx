import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const { state } = useLocation();
  console.log(state)
  return (
    <>
      <section className="max-w-7xl mx-auto">
        <div className="h-screen w-full p-7">
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
                  <h3 className="text-sm text-gray-300 mb-0.5">Asign to</h3>
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

          <div className="bg-[#1c1c1c] p-5 rounded mt-5 overflow-x-auto">
            <div className="min-w-[600px]">
              <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Employee Name</h2>
                <h3 className="text-lg font-medium w-1/5">New Task</h3>
                <h5 className="text-lg font-medium w-1/5">Active Task</h5>
                <h5 className="text-lg font-medium w-1/5">Completed</h5>
                <h5 className="text-lg font-medium w-1/5">Failed</h5>
              </div>
              <div className="border-2 border-emerald-500 mb-2 py-2 px-4 flex justify-between rounded">
                <h2 className="text-lg font-medium w-1/5">Ganesh</h2>
                <h3 className="text-lg font-medium w-1/5 text-blue-400">10</h3>
                <h5 className="text-lg font-medium w-1/5 text-yellow-400">2</h5>
                <h5 className="text-lg font-medium w-1/5 text-white">5</h5>
                <h5 className="text-lg font-medium w-1/5 text-red-600">3</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AdminDashboard;
