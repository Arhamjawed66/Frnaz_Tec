import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";

// 🧼 Simple sanitization
const sanitizeInput = (value) =>
  value.replace(/<[^>]*>?/gm, "").replace(/[^\w\s@.-]/gi, "").trim();

export default function LoginForm() {
  const { darkMode } = useTheme();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // ✅ Redirect if already logged in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      navigate("/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanUsername = sanitizeInput(username);
    const cleanPassword = sanitizeInput(password);

    if (cleanUsername === "grow@franzsns.com" && cleanPassword === "12345") {
      const userData = { role: "admin", name: "Admin" };
      localStorage.setItem("user", JSON.stringify(userData));

      // ✅ Redirect immediately after login
      navigate("/dashboard", { replace: true });
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <section
      className={`min-h-screen flex items-center justify-center transition-all duration-300 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      }`}
    >
      <div
        className={`w-full max-w-md rounded-xl shadow-lg border transition-all duration-300 relative ${
          darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
        }`}
      >
        {/* Logo */}
        <div className="flex flex-col items-center mt-6 relative z-10">
          <img
            src="https://media.istockphoto.com/id/2184187248/photo/abstract-three-pins-isolated-marker-locate-pin-tourist-joutney-transportation-delivery.jpg?s=1024x1024&w=is&k=20&c=w5fTv749qjq_W1GZ_E_-URNWrzCa7RcNqeZk1Ce_EqI="
            alt="Invent Plus Logo"
            className="w-24 h-24 mb-2 rounded-full object-cover"
          />
          <h1
            className={`text-2xl font-bold transition-colors duration-300 ${
              darkMode ? "text-blue-400" : "text-blue-600"
            }`}
          >
            Invent Plus
          </h1>
        </div>

        {/* Form */}
        <div className="p-6 sm:p-8 relative z-10">
          <h2
            className={`text-xl font-bold text-center md:text-2xl transition-colors duration-300 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Login to your account
          </h2>

          {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

          <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
            {/* Username */}
            <div>
              <label
                htmlFor="username"
                className={`block mb-2 text-sm font-medium ${
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
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
                required
              />
            </div>

            {/* Password with toggle */}
            <div className="relative">
              <label
                htmlFor="password"
                className={`block mb-2 text-sm font-medium ${
                  darkMode ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(sanitizeInput(e.target.value))}
                placeholder="••••••••"
                className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${
                  darkMode
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                    : "bg-gray-50 border-gray-300 text-gray-900"
                }`}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-13 -translate-y-1/2 text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full py-3 px-5 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
            >
              Login
            </button>

            {/* Example credentials */}
            <div
              className={`text-sm text-center mt-3 font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              <p>Email: <span className="text-blue-500">grow@franzsns.com</span></p>
              <p>Password: <span className="text-blue-500">12345</span></p>
            </div>

            {/* Signup link */}
            <p
              className={`text-sm text-center mt-4 ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Dont have an account yet?{" "}
              <Link to="/signup" className="font-medium text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
