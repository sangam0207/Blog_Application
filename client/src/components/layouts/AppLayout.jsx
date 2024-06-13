import { Outlet } from "react-router-dom";
import Sidebar from "../templates/sidebar/Sidebar";
import Scrollbars from "react-custom-scrollbars-2";

const AppLayout = () => {
  return (
    <div className="h-screen flex">
      <Sidebar className="fixed left-0 top-0 bottom-0 h-full bg-white shadow-md z-10" />

      <div className="flex-1 ml-64">
        <Scrollbars style={{ height: "100vh" }}>
          <main className="px-5 py-3 min-h-[calc(100vh-70px)]">
            <Outlet />
          </main>
        </Scrollbars>
      </div>
    </div>
  );
};

export default AppLayout;
