import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "@/components/common/Logo";
import NavbarMenu from "./NavbarMenu";
import NavbarActions from "./NavbarActions";
import { useAuth } from "@/hooks/useAuth";
import MobileSideBar from "@/components/common/SideBar/MobileSidebar";

export default function Navbar() {
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProfileSidebarOpen, setIsProfileSidebarOpen] = useState(false);
  const { isLoggedIn } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border-subtle/70 bg-bg-primary/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            className="lg:hidden p-1 text-text-primary hover:bg-gray-800 rounded-md"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <Logo />
        </div>

        <div className="hidden lg:block">
          <NavbarMenu pathname={pathname} />
        </div>

        <div className="flex items-center gap-2">
          <NavbarActions onOpenProfile={() => setIsProfileSidebarOpen(true)} />
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-border-subtle/70 bg-bg-primary/95 px-4 py-6 shadow-xl">
          <NavbarMenu pathname={pathname} isMobile />
          {!isLoggedIn && (
            <div className="mt-6 border-t border-border-subtle/70 pt-6">
              <NavbarActions isMobile />
            </div>
          )}
        </div>
      )}

      {isLoggedIn && (
        <MobileSideBar
          onClose={() => setIsProfileSidebarOpen(false)}
          open={isProfileSidebarOpen}
        />
      )}
    </header>
  );
}
