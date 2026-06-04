import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LockKeyhole } from "lucide-react";

const NotLoggedIn = () => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-gradient-to-b from-[#1F0D0D] to-[#1c1717]
      min-h-[400px] flex items-center justify-center"
    >
      <div
        className="flex flex-col items-center gap-6
        max-w-sm text-center px-4"
      >
        <div
          className="p-5 rounded-full border border-red-800
          bg-red-900/20"
        >
          <LockKeyhole className="text-primary w-8 h-8" />
        </div>

        <div>
          <p className="text-white text-2xl font-medium">
            Login to Meet Our Trainers
          </p>
          <p className="text-white/50 mt-2 text-sm">
            You need to be logged in to browse trainers.
          </p>
        </div>

        <Button
          className="w-full py-6 text-[18px] rounded-[5px]
            bg-primary hover:bg-cta-hover"
          onClick={() => navigate("/auth/login")}
        >
          Go to Login
        </Button>

        <p className="text-white/30 text-sm">
          Don't have an account?{" "}
          <span
            className="text-primary cursor-pointer"
            onClick={() => navigate("/auth/signup")}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
};

export default NotLoggedIn;
