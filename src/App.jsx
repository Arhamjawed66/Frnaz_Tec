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
// import SignupFrom from "./pages/auth/signup";
// import SignupForm from './pages/auth/signup'

/* 🧩 Components */
import Header from "./components/Navbar";
import Sidebar from "./components/Sidebar";

/* 🔒 Protected Route */
function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));
  return user && user.role === "admin" ? children : <Navigate to="/login" replace />;
}

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
            <div className="flex flex-1 pt-16">
              <Sidebar
                isSidebarOpen={isSidebarOpen}
                setIsSidebarOpen={setIsSidebarOpen}
              />
              <main
                className={`flex-1 p-6 transition-all duration-300 ${isSidebarOpen ? "ml-0 md:ml-64" : ""
                  }`}
              >
                <Routes>
                  <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
                  <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                  <Route path="/store/create" element={<ProtectedRoute><CreateStore /></ProtectedRoute>} />
                  <Route path="/store/update" element={<ProtectedRoute><UpdateStore /></ProtectedRoute>} />
                  <Route path="/store/view" element={<ProtectedRoute><ViewStore /></ProtectedRoute>} />
                  <Route path="/products" element={<ProtectedRoute><Product /></ProtectedRoute>} />
                  <Route path="/users" element={<ProtectedRoute><Users /></ProtectedRoute>} />
                  <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />

                </Routes>
              </main>
            </div>
          </>
        )}

        {/* ✅ Auth Pages for non-logged in users */}


        {!user && (
          <main className="flex-1 flex items-center justify-center">
            <Routes>
              <Route path="/login" element={<LoginFrom />} />
              {/* <Route path="/signup" element={<SignupForm />} /> */}
            </Routes>
          </main>
        )}
        {/* ✅ Default redirect */}
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
