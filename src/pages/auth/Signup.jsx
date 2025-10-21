// import React, { useState } from "react";
// import { useTheme } from "../../contexts/ThemeContext";
// import { Link } from "react-router-dom";

// export default function SignupFrom() {
//   const { darkMode } = useTheme();
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   // 🧼 Basic sanitization: remove < > & and extra spaces
//   const sanitizeInput = (value) =>
//     value.replace(/[<>]/g, "").replace(/\s{2,}/g, " ").trim();

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData({ ...formData, [id]: sanitizeInput(value) });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Sanitized Signup Data:", formData);
//     // 🚀 You can integrate backend API here later
//   };

//   return (
//     <section
//       className={`min-h-screen flex items-center justify-center px-6 py-8 transition-all duration-300 ${
//         darkMode ? "bg-gray-900" : "bg-gray-50"
//       }`}
//     >
//       <div
//         className={`w-full max-w-md rounded-xl shadow-lg border transition-all duration-300 relative ${
//           darkMode ? "bg-gray-800 border-gray-700" : "bg-white border-gray-200"
//         }`}
//       >
//         {/* Soft blue glow */}
//         <div className="absolute inset-0 rounded-xl pointer-events-none shadow-[0_0_25px_2px_rgba(59,130,246,0.15)] dark:shadow-[0_0_25px_2px_rgba(59,130,246,0.25)]"></div>

//         {/* Logo */}
//         <div className="flex justify-center mt-8 relative z-10">
//           <a
//             href="#"
//             className={`flex items-center text-2xl font-bold transition-colors duration-300 ${
//               darkMode ? "text-blue-400" : "text-blue-600"
//             }`}
//           >
//             FRANZ FOOD
//           </a>
//         </div>

//         {/* Form */}
//         <div className="p-6 sm:p-8 relative z-10">
//           <h1
//             className={`text-xl font-bold text-center md:text-2xl mb-2 transition-colors duration-300 ${
//               darkMode ? "text-white" : "text-gray-900"
//             }`}
//           >
//             Create your account
//           </h1>
//           <p
//             className={`text-center text-sm mb-6 transition-colors duration-300 ${
//               darkMode ? "text-gray-400" : "text-gray-500"
//             }`}
//           >
//             Join us and start managing your store efficiently.
//           </p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {/* Name */}
//             <div>
//               <label
//                 htmlFor="name"
//                 className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 placeholder="Frnaz Food"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
//                   darkMode
//                     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                     : "bg-gray-50 border-gray-300 text-gray-900"
//                 }`}
//                 required
//               />
//             </div>

//             {/* Email */}
//             <div>
//               <label
//                 htmlFor="email"
//                 className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Your email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 placeholder="name@company.com"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
//                   darkMode
//                     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                     : "bg-gray-50 border-gray-300 text-gray-900"
//                 }`}
//                 required
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label
//                 htmlFor="password"
//                 className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 placeholder="••••••••"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
//                   darkMode
//                     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                     : "bg-gray-50 border-gray-300 text-gray-900"
//                 }`}
//                 required
//               />
//             </div>

//             {/* Confirm Password */}
//             <div>
//               <label
//                 htmlFor="confirmPassword"
//                 className={`block mb-2 text-sm font-medium transition-colors duration-300 ${
//                   darkMode ? "text-gray-300" : "text-gray-700"
//                 }`}
//               >
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 placeholder="••••••••"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 ${
//                   darkMode
//                     ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
//                     : "bg-gray-50 border-gray-300 text-gray-900"
//                 }`}
//                 required
//               />
//             </div>

//             {/* Submit */}
//             <button
//               type="submit"
//               className="w-full py-3 px-5 text-white bg-blue-600 rounded-lg font-medium hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800 transition-all"
//             >
//               Sign up
//             </button>

//             {/* Login link */}
//             <p
//               className={`text-sm text-center transition-colors duration-300 ${
//                 darkMode ? "text-gray-400" : "text-gray-600"
//               }`}
//             >
//               Already have an account?{" "}
//               <Link to="/login" className="font-medium text-blue-600 hover:underline">
//                Log IN 
//               </Link>
              
              
//             </p>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// }




