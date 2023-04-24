import { useEffect } from "react";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const ErrorMessage = ({ errorMessage, setErrorMessage }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMessage("");
    }, 2000);
    return () => clearTimeout(timer);
  }, [setErrorMessage]);
  return (
    <div
      className={`${
        errorMessage ? "opacity-100" : "opacity-0"
      } transition-opacity duration-500 ease-in-out bg-yellow-100 info text-yellow-700 px-4 py-3 rounded relative mx-auto`}
      role="alert"
    >
      <span className="block sm:inline">
        <ExclamationCircleIcon className="w-5 h-5 inline-block mr-2" />
        {errorMessage}
      </span>
    </div>
  );
};

export default ErrorMessage;
