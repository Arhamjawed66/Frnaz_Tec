export default function Login() {
    return (
        <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center px-6 py-8">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg dark:border dark:border-gray-700 dark:bg-gray-800">
                {/* Logo */}
                <div className="flex justify-center mt-6">
                    <a
                        href="#"
                        className="flex items-center text-2xl font-bold text-pink-600 dark:text-white"
                    >

                        FRANZ FOOD
                    </a>
                </div>

                {/* Form */}
                <div className="p-6 sm:p-8">
                    <h1 className="text-xl font-bold text-center text-gray-900 md:text-2xl dark:text-white">
                        Login to your account
                    </h1>

                    <form className="mt-6 space-y-5" action="#">
                        {/* Email */}
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Your email
                            </label>
                            <input
                                type="email"
                                id="email"
                                placeholder="name@company.com"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label
                                htmlFor="password"
                                className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                                required
                            />
                        </div>

                        {/* Remember + Forgot */}
                        <div className="flex items-center justify-between">
                            <label className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                                <input
                                    type="checkbox"
                                    className="w-4 h-4 text-pink-600 border-gray-300 rounded focus:ring-pink-500 dark:bg-gray-700 dark:border-gray-600"
                                />
                                <span className="ml-2">Remember me</span>
                            </label>
                            <a
                                href="#"
                                className="text-sm font-medium text-pink-600 hover:underline"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 px-5 text-white bg-pink-600 rounded-lg font-medium hover:bg-pink-700 focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800"
                        >
                            Login
                        </button>

                        {/* Signup link */}
                        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
                            Dont have an account yet?{" "}
                            <a
                                href="#"
                                className="font-medium text-pink-600 hover:underline"
                            >
                                Login
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
