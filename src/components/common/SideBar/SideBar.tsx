import { Link ,useLocation} from "react-router-dom";
import userAvatar from "@/assets/user2.jpg";
import { menuItems } from "@/lib/constants/Profile/SideBar";

function SideBar() {
const location = useLocation();
  return (
    <>
      <aside className="w-70 h-fit hidden lg:block shrink-0 rounded-lg  border border-border ">
        {/* User Data  */}
        <div className="bg-card rounded-lg p-5 border-b">
          <div className="flex items-center gap-5 mb-6 ">
            <div className="w-20 h-20 rounded-full bg-overlay relative">
              <img
                src={userAvatar}
                className="w-full h-full rounded-full object-cover "
              />
            </div>
            <div>
              <p className="font-semibold text-card-foreground">Mohamed Alaa</p>
            </div>
          </div>
        </div>

        {/* Sub Routes  */}
        <nav className="py-2 flex flex-col gap-2">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                to={item.path}
                key={item.label}
                className={`w-full  translate-x-0 gap-3 px-3 py-2 rounded transition-all duration-300 ${
                  isActive
                    ? "bg-primary text-primary-foreground font-medium"
                    : "text-sidebar-foreground bg-overlay hover:bg-primary hover:text-primary-foreground "
                }`}
              >
                <div
                  className={` flex items-center gap-3 ${isActive ? "" : "transition-all duration-500 translate-x-0 hover:translate-x-1"}`}
                >
                  <item.icon className="w-5 h-5" />
                  {item.label}
                </div>
              </Link>
            );
          })}
        </nav>
        {/* Sub Routes  */}
      </aside>
      {/* Web  */}
    </>
  );
}

export default SideBar;
