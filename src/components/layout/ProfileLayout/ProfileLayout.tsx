import SideBar from "@/components/common/SideBar/SideBar";

import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div className="mx-auto flex max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-10 gap-5">
      <div className="sticky top-20 h-screen hidden lg:block">
        <SideBar />
      </div>

      <main className="flex-1 p-5 lg:p-0 ">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
