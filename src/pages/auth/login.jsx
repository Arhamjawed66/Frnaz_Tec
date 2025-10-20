import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";

// 🧼 Simple sanitization
const sanitizeInput = (value) =>
  value
    .replace(/<[^>]*>?/gm, "")
    .replace(/[^\w\s@.-]/gi, "")
    .trim();

export default function LoginFrom() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) setIsLoggedIn(true);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanUsername = sanitizeInput(username);
    const cleanPassword = sanitizeInput(password);

    if (cleanUsername === "admin123@gmail.com" && cleanPassword === "12345") {
      localStorage.setItem(
        "user",
        JSON.stringify({ role: "admin", name: "admin" })
      );
      setIsLoggedIn(true);
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  // ✅ Logged In View
  if (isLoggedIn) {
    const user = JSON.parse(localStorage.getItem("user"));
    return (
      <section
        className={`min-h-screen flex flex-col items-center justify-center transition-all duration-300 ${
          darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
        }`}
      >
        <div
          className={`p-8 rounded-2xl shadow-lg border transition-all duration-300 relative ${
            darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
          }`}
        >
          {/* Soft blue glow */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none shadow-[0_0_25px_2px_rgba(59,130,246,0.15)] dark:shadow-[0_0_25px_2px_rgba(59,130,246,0.25)]"></div>

          <h1 className="text-2xl font-bold text-center relative z-10">
            Welcome, {user?.name} 👋
          </h1>
          <p className="text-center mt-2 text-gray-400 relative z-10">
            You are logged in as <span className="text-blue-500">Admin</span>.
          </p>

          <button
            onClick={handleLogout}
            className="mt-6 w-full py-3 px-5 bg-green text-white font-medium rounded-lg hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all relative z-10"
          >
            Logout
          </button>
        </div>
      </section>
    );
  }

  // ✅ Login Form
  return (
    <section
      className={`min-h-screen flex items-center justify-center px-6 py-8 transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-xl shadow-lg border transition-all duration-300 relative ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        {/* Soft blue glow */}
        <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_25px_2px_rgba(59,130,246,0.15)] dark:shadow-[0_0_25px_2px_rgba(59,130,246,0.25)]"></div>

        {/* Logo */}
        <div className="flex justify-center mt-6 relative z-10">
          <a
            href="#"
            className={`flex items-center text-2xl font-bold transition-colors duration-300 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            FRANZ FOOD
          </a>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 relative z-10">
          <h1
            className={`text-xl font-bold text-center md:text-2xl transition-colors duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Login to your account
          </h1>

          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(sanitizeInput(e.target.value))}
                placeholder="admin123@gmail.com"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(sanitizeInput(e.target.value))}
                placeholder="••••••••"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-5 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
            >
              Login
            </button>

            {/* Signup link */}
            <p
              className={`text-sm text-center mt-2 transition-colors duration-300 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Dont have an account yet?{" "}
             <Link  to="/signup" className="font-medium text-blue-600 hover:underline">
              Sign up
             </Link>
             
              
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
