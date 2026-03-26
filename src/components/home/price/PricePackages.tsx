import PackageCard from "@/components/common/PackageCard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const packages = [
  {
    title: "Single Pack",
    price: "150",
    sessions: "1 SESSION",
    features: [
      "Try any Trainer",
      "No Commitment",
      "Full Session Access",
      "Post-Workout Plan",
    ],
  },
  {
    title: "Monthly Pack",
    price: "1000",
    sessions: "15 SESSIONS",
    features: [
      "Dedicated Trainer",
      "Nutrition Plan Included",
      "Progress Tracking",
      "Priority Scheduling",
    ],
  },
  {
    title: "Premium Pack",
    price: "3000",
    sessions: "50 SESSIONS",
    features: [
      "Dedicated Trainer",
      "Full Coaching Program",
      "24/7 Trainer Access",
      "Custom Meal Plans",
    ],
  },
];

export default function PricePackages() {
  const [selectedPackage, setSelectedPackage] = useState("Monthly Pack");
  const navigate = useNavigate();

  return (
    <>
      <div className="mt-10 grid w-full max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {packages.map((pkg) => (
          <PackageCard
            key={pkg.title}
            title={pkg.title}
            price={pkg.price}
            sessions={pkg.sessions}
            features={pkg.features}
            isRecommended={selectedPackage === pkg.title}
            onClick={() => setSelectedPackage(pkg.title)}
          />
        ))}
      </div>

      <button
        type="button"
        className="mt-8 text-lg font-semibold text-primary transition-colors hover:text-primary/80 cursor-pointer"
        onClick={() => navigate("/packages")}
      >
        Compare all package features {">"}
      </button>
    </>
  );
}
