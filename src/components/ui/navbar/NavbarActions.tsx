import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserCircle, LogOut, User, ChevronDown, Menu } from "lucide-react";
import { NAVBAR_ACTIONS } from "@/lib/constants/navbar/navbar.constants";
import { useAuth } from "@/hooks/useAuth";
import MobileSideBar from "@/components/common/SideBar/MobileSidebar";
import { Button } from "@/components/ui/button";

export default function NavbarActions() {
  const { isLoggedIn, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  // Moile
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    setOpen(false);
    navigate("/auth/signup");
  };

  if (isLoggedIn) {
    return (
      <>
        
        <div className="relative lg:block hidden" ref={dropdownRef}>
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-xl px-3 py-2 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
          >
            <UserCircle size={28} className="text-primary" />
            <ChevronDown
              size={14}
              className={`text-text-secondary transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            />
          </button>

          {open && (
            <div className="absolute right-0 top-12 w-44 bg-[#1f1f1f] border border-border-subtle rounded-xl overflow-hidden shadow-lg z-50">
              <Link
                to="/profile"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-4 py-3 text-sm text-text-primary hover:bg-white/5 transition-colors duration-200"
              >
                <User size={15} className="text-primary" />
                My Profile
              </Link>
              <hr className="border-border-subtle" />
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition-colors duration-200 cursor-pointer"
              >
                <LogOut size={15} className="text-red-400" />
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile */}
        <div className="   lg:hidden ">
          <Button
            onClick={() => setMobileOpen((pre) => !pre)}
            className="border rounded-lg  "
          >
            <Menu className="" />
          </Button>
        </div>
        <MobileSideBar onClose={() => setMobileOpen(false)} open={mobileOpen} />
      </>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {NAVBAR_ACTIONS.map((action) => (
        <Link
          key={action.label}
          className={`type-body-m weight-semibold inline-flex min-w-28 items-center justify-center rounded-xl px-6 py-2.5 transition-colors ${
            action.variant === "primary"
              ? "bg-cta-primary text-text-primary hover:bg-cta-hover"
              : "border border-cta-primary/80 text-text-primary hover:bg-[#171a21]"
          }`}
          to={action.href}
        >
          {action.label}
        </Link>
      ))}
    </div>
  );
}
