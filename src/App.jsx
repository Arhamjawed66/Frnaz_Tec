import { Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

/* 🌙 Context */
import { ThemeProvider } from "./contexts/ThemeContext";

/* 📄 Pages */
import Dashboard from "./pages/Dashboard";
import CreateStore from "./pages/store/CreateStore";
import UpdateStore from "./pages/store/UpdateStore";
import ViewStore from "./pages/store/ViewStore";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Orders from "./pages/Orders";
import Product from "./pages/Products";
import LoginFrom from "./pages/auth/login";
import RegisterFrom from "./pages/auth/register";

/* 🧩 Components */
import Header from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Update_Category from "./pages/category/update_catagory";
import Create_Category from "./pages/category/Create_Category";
import View_Category from "./pages/category/View_Category";

/* 🔒 Protected Route */
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin" ? children :<Navigate to="/login" replace />;
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // default closed for mobile
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col transition-colors duration-300 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">

        {/* ✅ Header + Sidebar only for admin */}
        {user?.role === "admin" && (
          <>
            <Header
              isSidebarOpen={isSidebarOpen}
              setIsSidebarOpen={setIsSidebarOpen}
            />

            {/* Responsive Layout */}
            <div className="flex flex-1 pt-16 relative">
              {/* Sidebar (hidden on mobile, overlay on small screens) */}
              <div
                className={`
                  fixed inset-y-0 left-0 z-40 transform 
                  transition-transform duration-300 ease-in-out
                  ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} 
                  md:relative md:translate-x-0 md:w-64
                `}
              >
                <Sidebar
                  isSidebarOpen={isSidebarOpen}
                  setIsSidebarOpen={setIsSidebarOpen}
                />
              </div>

              {/* Overlay for mobile when sidebar is open */}
              {isSidebarOpen && (
                <div
                  className="fixed inset-0 bg-black bg-opacity-40 z-30 md:hidden"
                  onClick={() => setIsSidebarOpen(false)}
                ></div>
              )}

              {/* Main Content Area */}
              <main
                className={`flex-1 p-4 sm:p-6 md:p-8 transition-all duration-300 overflow-y-auto`}
              >
                <Routes>
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard  isSidebarOpen={isSidebarOpen} /></ProtectedRoute>} />
                  <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                  <Route path="/store/create" element={<ProtectedRoute><CreateStore /></ProtectedRoute>} />
                  <Route path="/store/update" element={<ProtectedRoute><UpdateStore /></ProtectedRoute>} />
                  <Route path="/store/view" element={<ProtectedRoute><ViewStore /></ProtectedRoute>} />
                  <Route path="/category/update" element={<ProtectedRoute>< Update_Category /></ProtectedRoute>} />
                  <Route path="/category/create" element={<ProtectedRoute>< Create_Category /></ProtectedRoute>} />
                  <Route path="/category/view" element={<ProtectedRoute>< View_Category /></ProtectedRoute>} />


                  <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
                  <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
                </Routes>
              </main>
            </div>
          </>
        )}

        {/* ✅ Auth Pages for non-logged-in users */}
        {!user && (
          <main className="flex-1 flex items-center justify-center p-4 sm:p-8">
            <Routes>
              <Route path="/login" element={<LoginFrom />} />
              <Route path="/register" element={<RegisterFrom />} />
              <Route path="/signup" element={<RegisterFrom />} />
            </Routes>
          </main>
        )}

        {/* ✅ Default Redirect */}
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Navigate to="/dashboard" replace />
              ) : (
                <Navigate to="/login" replace />
              )
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}
