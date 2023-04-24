import { TrashIcon, ClockIcon, CheckIcon } from "@heroicons/react/outline";
import { useState } from "react";

const ReminderList = () => {
  const [show, setShow] = useState(false);

  const toggleIcon = () => {
    setShow(!show);
  };

  return (
    <div className="lg:w-2/3 mg:mx-auto md:w-3/4 md:mx-auto w-full md:px-7 px-0  mt-28 pb-10">
      <div className="flex md:justify-between justify-around">
        <h2 className="text-2xl font-bold">Task List</h2>

        <button className="px-4 py-2 inline  bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700">
          Add New
        </button>
      </div>

      <div className="w-full">
        <table className="table-auto mt-6 w-full text-center border border-slate-400 min-w-fit">
          <thead className="bg-gray-200">
            <tr className="border">
              <th className="md:px-6 md:py-3 px-3 py-1 border ">Status</th>
              <th className="md:px-6 md:py-3 px-3 py-1 border ">#</th>
              <th className="md:px-6 md:py-3 px-3 py-1 border">Name</th>
              <th className="md:px-6 md:py-3 px-3 py-1 border">Date</th>
              <th className="md:px-6 md:py-3 px-3 py-1 border">Time</th>
              <th className="md:px-6 md:py-3 px-3 py-1 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: 10 }, (_, i) => i).map((idx) => (
              <tr
                key={idx}
                className={`${
                  show ? "my-line-through" : ""
                } hover:bg-slate-100`}
              >
                {show ? (
                  <td className="md:px-6 md:py-3 px-3 py-1 border mx-auto w-6 h-6 cursor-pointer">
                    <CheckIcon
                      onClick={toggleIcon}
                      className="h-6 w-6 text-gray-500"
                    />
                  </td>
                ) : (
                  <td className="md:px-6 md:py-3 px-3 py-1 border mx-auto w-6 h-6 cursor-pointer">
                    <ClockIcon
                      onClick={toggleIcon}
                      className="h-6 w-6 text-gray-500"
                    />
                  </td>
                )}

                <td className="md:px-6 md:py-3 px-3 py-1 border ">{idx + 1}</td>
                <td className="md:px-6 md:py-3 px-3 py-1 border ">
                  Do Assignemnt
                </td>
                <td className="md:px-6 md:py-3 px-3 py-1 border ">
                  13 April 2023
                </td>
                <td className="md:px-6 md:py-3 px-3 py-1 border ">11:00 PM</td>
                <td className="md:px-6 md:py-3 px-3 py-1  border">
                  <TrashIcon className="  text-red-600 mx-auto w-6 h-6 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReminderList;
