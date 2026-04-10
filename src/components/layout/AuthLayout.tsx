import bg from "../../assets/auth-bg.png";
import type { childrenType } from "@/lib/types/main.type";

export default function AuthLayout({ children }: childrenType) {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex justify-center py-6 sm:py-9 overflow-y-auto px-4 sm:px-6 lg:px-0"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 backdrop-blur-xs bg-black/60 border border-(--darkMain-color) w-full max-w-sm sm:max-w-md lg:max-w-lg mx-auto p-4 sm:p-6 lg:p-8 rounded-3xl shadow-xl h-fit my-auto">
        {children}
      </div>
    </div>
  );
}
