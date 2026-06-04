import SideBar from "@/components/common/SideBar/SideBar";

import { Outlet } from "react-router-dom";

function ProfileLayout() {
  return (
    <div className="mx-auto flex max-w-7xl w-full px-4 sm:px-6 lg:px-8 my-8 md:my-10 gap-4 sm:gap-5 lg:gap-8">
      <div className="sticky top-20 max-h-screen overflow-y-auto hidden lg:block min-w-[280px]">
        <SideBar />
      </div>

      <main className="flex-1 p-4 sm:p-5 lg:p-0">
        <Outlet />
      </main>
    </div>
  );
}

export default ProfileLayout;
