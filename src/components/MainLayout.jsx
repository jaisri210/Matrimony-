import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function MainLayout() {
  const navigate = useNavigate();
  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");

    if (isVerified === "false") {
      navigate("/verify");
    }
  }, []);
  return (
    <div className="flex w-full overflow-x-hidden">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 w-full md:ml-64 pt-16 md:pt-6 p-3 sm:p-4 md:p-6 bg-gray-50 min-h-screen overflow-x-hidden">
        <Outlet />
      </div>

      {/* Mobile Bottom Nav */}
      {/* <MobileNav /> */}
    </div>
  );
}
