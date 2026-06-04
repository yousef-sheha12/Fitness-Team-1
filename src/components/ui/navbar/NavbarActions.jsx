import { Link, useNavigate } from "react-router-dom";
import { UserCircle } from "lucide-react";
import { NAVBAR_ACTIONS } from "@/lib/constants/navbar/navbar.constants";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import userAvatar from "@/assets/user2.jpg";

export default function NavbarActions({ onOpenProfile, isMobile = false }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const [imgError, setImgError] = useState(false);

  if (isLoggedIn && !isMobile) {
    return (
      <div>
        <button
          onClick={() => {
            if (window.innerWidth >= 1024) {
              navigate("/profile/overview");
            } else {
              onOpenProfile();
            }
          }}
          className="relative group cursor-pointer"
        >
          {!imgError ? (
            <img
              src={userAvatar}
              alt="Profile"
              onError={() => setImgError(true)}
              className="w-9.5 h-9.5 mt-1 rounded-2xl object-cover ring-2 ring-transparent group-hover:ring-primary transition-all duration-200"
            />
          ) : (
            <UserCircle size={36} className="text-primary" />
          )}
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border-2 border-background" />
        </button>
      </div>
    );
  }

  if (isLoggedIn && isMobile) {
    return null;
  }

  return (
    <div className={`${isMobile ? 'flex flex-col w-full' : 'hidden lg:flex'} items-center gap-3`}>
      {NAVBAR_ACTIONS.map((action) => (
        <Link
          key={action.label}
          className={`type-body-m weight-semibold inline-flex w-full lg:min-w-28 items-center justify-center rounded-xl px-6 py-2.5 transition-colors ${
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
