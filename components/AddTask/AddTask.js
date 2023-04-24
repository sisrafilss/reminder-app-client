import { XIcon } from "@heroicons/react/outline";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddTask = ({
  toggleAddModal,
  setShowSuccessMessage,
  setShowErrorMessage,
}) => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // const addEmail = { email: user?.email, ...data };
    // axios
    //   .post("https://todo-server-lv0x.onrender.com/add-task", addEmail)
    //   .then((res) => {
    //     if (res?.data?.insertedId) {
    //       toggleAddModal();
    //       setShowSuccessMessage(true);
    //     }
    //   })
    //   .catch((error) => {
    //     toggleAddModal();
    //     setShowErrorMessage(true);
    //   });
  };

  return (
    <div className="flex flex-col w-full bg-white py-8 px-12 rounded relative">
      <h2 className="mb-3  text-2xl font-medium">Add Task</h2>

      <XIcon
        onClick={toggleAddModal}
        className="h-6 w-6 absolute top-4 right-4 cursor-pointer"
      />

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col ">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
          className="border px-3 text-black opacity-90 py-2 mb-5 rounded w-full focus:outline-none"
          type="text"
          placeholder="Name"
          {...register("title")}
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Pick Date
        </label>
        <input
          className="border px-3 py-2 mb-5 text-black opacity-90 rounded w-full focus:outline-none"
          type="date"
          {...register("date")}
        />

        <label className="block text-gray-700 text-sm font-bold mb-2">
          Choose Time
        </label>
        <input
          className="border px-3 py-2 mb-5 text-black opacity-90 rounded w-full focus:outline-none"
          type="time"
          {...register("time")}
        />

        <input
          type="submit"
          className="px-2 py-2 bg-slate-600 text-white rounded font-medium text-base cursor-pointer hover:bg-slate-700"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddTask;
