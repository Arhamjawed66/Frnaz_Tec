import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";


/* Pages */
import Dashboard from "./pages/Dashboard";
import CreateStore from "./pages/store/CreateStore";
import UpdateStore from "./pages/store/UpdateStore";
import ViewStore from "./pages/store/ViewStore";
import Orders from "./pages/Orders";
import Products from "./pages/Products";
import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Login from "./pages/auth/login";
import Signup from "./pages/auth/Signup";
import Header from "./components/Navbar";

export default function App() {
  const [isOpen, setIsOpen] = useState(true); // sidebar expanded / collapsed

  // margin for content depending on sidebar width
  const contentMargin = isOpen ? "ml-64" : "ml-20";

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header full-width at top */}
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />

      <div className="pt-16 flex">
        {/* Sidebar fixed under header */}
        <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

        {/* Main content area */}
        <main
          className={`flex-1 transition-all duration-300 ${contentMargin} p-6`}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Store */}
            <Route path="/store/create" element={<CreateStore />} />
            <Route path="/store/update" element={<UpdateStore />} />
            <Route path="/store/view" element={<ViewStore />} />

            <Route path="/orders" element={<Orders />} />
            <Route path="/products" element={<Products />} />
            <Route path="/users" element={<Users />} />
            <Route path="/settings" element={<Settings />} />

            {/* Auth (if used) */}
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
