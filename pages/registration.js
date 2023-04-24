import Link from "next/link";

const Registration = () => {
  return (
    <>
      {/* <Header /> */}
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div className="bg-white rounded-lg shadow p-6 max-w-sm w-full">
          <h2 className="text-2xl font-semibold mb-6">Create an Account</h2>
          <form>
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Full Name
                </label>
                <input
                  id="firstName"
                  type="text"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Enter your email address"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  className="w-full border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>

            <input
              type="submit"
              value="Registration"
              className="px-4 w-full py-2 mt-6 cursor-pointer mr-8 bg-slate-600 text-white rounded font-medium text-base hover:bg-slate-700"
            />
          </form>
          <button className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400">
            Login with Google
          </button>

          <div className="mt-6 text-gray-700">
            Already registered?{" "}
            <Link
              href="/login"
              className="text-blue-500 hover:underline font-semibold"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
