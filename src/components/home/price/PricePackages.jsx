import PackageCard from "@/components/common/PackageCard";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";






































import { getPackages } from "@/lib/api/PackagesApi";

export default function PricePackages() {
  const [selectedPackage, setSelectedPackage] = useState("Monthly Pack");
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["packages"],
    queryFn: async () => {
      const packages = await getPackages();
      return packages.map((pkg) => ({
        id: pkg.id,
        title: pkg.title + " Pack",
        price: "EGP " + pkg.price,
        sessions: pkg.sessions + " SESSIONS",
        features: pkg.features,
      }));
    },
    retry: false,
  });
  const packages = data || [];

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
