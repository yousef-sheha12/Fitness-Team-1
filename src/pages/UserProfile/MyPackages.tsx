import { Check, Package } from "lucide-react";
import ActionButton from "@/components/common/UserProfile/ActionButton";
import ProgressBar from "../../components/common/UserProfile/ProgressBar";

interface Package {
  name: string;
  status: "Active" | "Expired";
  expiryDate: string;
  sessionsRemaining: number;
  totalSessions: number;
  includes: string[];
}

interface MyPackagesProps {
  pack: Package;
  onUpgrade?: () => void;
}

export default function MyPackages({ pack, onUpgrade }: MyPackagesProps) {
  return (
    <div className="border border-(--gray-color) rounded-xl p-5 sm:p-8 mx-4 sm:mx-10 flex flex-col gap-5">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">
          My Packages
        </h2>

        {/* Name row + upgrade button */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <Package size={28} className="text-white shrink-0" />
              <span className="font-medium text-lg sm:text-2xl text-white">
                {pack.name}
              </span>
              <span
                className={`text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${
                  pack.status === "Active"
                    ? "bg-green-500/20 text-green-400"
                    : "bg-gray-500/20 text-gray-400"
                }`}
              >
                {pack.status}
              </span>
            </div>
            <ActionButton
              text="Upgrade Package"
              variant="primary"
              onClick={onUpgrade}
              width="w-full sm:w-48"
            />
          </div>
          <span className="text-sm text-(--gray-color)">
            Expires on {pack.expiryDate}
          </span>
        </div>

        <ProgressBar
          current={pack.sessionsRemaining}
          total={pack.totalSessions}
        />

        {/* Package includes */}
        <div className="flex flex-col gap-3">
          <span className="text-lg sm:text-2xl font-semibold text-white">
            Package Includes:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {pack.includes.map((feature) => (
              <span
                key={feature}
                className="flex items-center gap-2 text-base sm:text-lg text-white"
              >
                <Check size={18} className="text-primary shrink-0" />
                {feature}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
