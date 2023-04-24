import { TrashIcon, ClockIcon, CheckIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import AddTask from "../AddTask/AddTask";
import Dialogbox from "../Dialogbox/Dialogbox";
import axios from "axios";
import useFirebase from "@/hooks/useFirebase";
import Spinner from "../Spinner/Spinner";

const ReminderList = () => {
  const [reminders, setReminders] = useState([]);
  const [marked, setMarked] = useState(false);
  const [modalActive, setModalActive] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [dialogBox, setDialogBox] = useState(false);
  const [delTaskId, setDelTaskId] = useState("");

  const { user } = useFirebase();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/all-reminders/${user?.email}`)
      .then((res) => {
        setReminders(res.data);
      });
  }, [marked, addModal, delTaskId]);

  const toggleMark = () => {
    setMarked(!marked);
  };

  // handle task complete status
  const handleCompleteStatus = (id) => {
    const updatedTask = reminders.find((task) => task._id === id);

    axios
      .put(
        `http://localhost:5000/update-reminder-status?email=${user?.email}&id=${id}`,
        updatedTask
      )
      .then((res) => {
        if (res.data?.modifiedCount) {
          toggleMark(!marked);
        }
      });
  };

  // handle toggle add task modal
  const toggleAddModal = () => {
    setAddModal(!addModal);
    setModalActive(!modalActive);
  };

  // handle toggle showing dialogbox modal
  const toggleDialogBox = () => {
    setDialogBox(!dialogBox);
    setModalActive(!modalActive);
  };

  // handle delete task
  const handleDeleteTask = (id) => {
    setDialogBox(true);
    setDelTaskId(id);
  };

  return (
    <>
      <div className="lg:w-2/3 mg:mx-auto md:w-3/4 md:mx-auto w-full md:px-7 px-0  mt-28 pb-10">
        <div className="flex md:justify-between justify-around">
          <h2 className="text-2xl font-bold">Task List</h2>

          <button
            className="px-4 py-2 inline  bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700"
            onClick={toggleAddModal}
          >
            Add New
          </button>
        </div>

        {reminders.length === 0 ? (
          <h2 className="text-4xl text-center mt-5">No Reminder Added Yet!</h2>
        ) : (
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
                {reminders.map((reminder, idx) => (
                  <tr
                    key={idx}
                    className={`${
                      reminder?.status === "done" ? "my-line-through" : ""
                    } hover:bg-slate-100`}
                  >
                    {reminder?.status === "done" ? (
                      <td
                        onClick={() => handleCompleteStatus(reminder?._id)}
                        className="md:px-6 md:py-3 px-3 py-1 border mx-auto w-6 h-6 cursor-pointer"
                      >
                        <CheckIcon className="h-6 w-6 text-gray-500" />
                      </td>
                    ) : (
                      <td
                        onClick={() => handleCompleteStatus(reminder?._id)}
                        className="md:px-6 md:py-3 px-3 py-1 border mx-auto w-6 h-6 cursor-pointer"
                      >
                        <ClockIcon className="h-6 w-6 text-gray-500" />
                      </td>
                    )}

                    <td className="md:px-6 md:py-3 px-3 py-1 border ">
                      {idx + 1}
                    </td>
                    <td className="md:px-6 md:py-3 px-3 py-1 border ">
                      {reminder?.name}
                    </td>
                    <td className="md:px-6 md:py-3 px-3 py-1 border ">
                      {reminder?.date}
                    </td>
                    <td className="md:px-6 md:py-3 px-3 py-1 border ">
                      {reminder?.time}
                    </td>
                    <td className="md:px-6 md:py-3 px-3 py-1  border">
                      <TrashIcon
                        className="  text-red-600 mx-auto w-6 h-6 cursor-pointer"
                        onClick={() => handleDeleteTask(reminder._id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Add a new task modal */}
      {addModal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <AddTask
                setShowSuccessMessage={setShowSuccessMessage}
                setShowErrorMessage={setShowErrorMessage}
                toggleAddModal={toggleAddModal}
              />
            </div>
          </div>
        </div>
      )}

      {/* Confirm user before deleting a task */}
      {dialogBox && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <Dialogbox
                delTaskId={delTaskId}
                toggleDialogBox={toggleDialogBox}
                setDelTaskId={setDelTaskId}
                setShowErrorMessage={setShowErrorMessage}
                setShowSuccessMessage={setShowSuccessMessage}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ReminderList;
