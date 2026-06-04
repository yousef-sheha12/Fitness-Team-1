import PackageCard from "../common/PackageCard";
import { useQuery } from "@tanstack/react-query";
import { getPackages } from "@/lib/api/PackagesApi";

export default function TrainingPackages({ trainerId: _trainerId }) {
  const { data: allPackages } = useQuery({
    queryKey: ["packages"],
    queryFn: getPackages,
  });

  const packages = allPackages || [
    {
      title: "single Pack",
      price: "300",
      sessions: "30",
      features: [
        "Try any Trainer",
        "No commitment,full session access",
        "Post Workout-plan",
      ],
      isRecommended: false,
    },
    {
      title: "Monthly Pack",
      price: "1500",
      sessions: "20",
      features: [
        "Try any Trainer",
        "No commitment,full session access",
        "Post Workout-plan",
      ],
      isRecommended: true,
    },
    {
      title: "Premium Pack",
      price: "5000",
      sessions: "25",
      features: [
        "Try any Trainer",
        "No commitment,full session access",
        "Post Workout-plan",
      ],
      isRecommended: false,
    },
  ];

  return (
    <>
      <div className="container w-10/12 mx-auto text-center py-12">
        <h2 className="profile-heading">Training packages</h2>
        <p className="text-gray-400 my-4 py-4">
          Choose a training plan that matches your goals and schedule
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={pkg.id || index}
              title={pkg.title}
              price={pkg.price}
              sessions={pkg.sessions}
              features={pkg.features}
              isRecommended={pkg.id === 2 || pkg.isRecommended}
              trainerId={_trainerId}
            />
          ))}
        </div>
      </div>
    </>
  );
}
