import TrainerCard from "../common/TrainerCard";
import trainerImage from "../../assets/img/trainerIMG.png";
import { useQuery } from "@tanstack/react-query";
import { getTerainers } from "@/lib/api/triners/TrainersApi";
import { useParams } from "react-router-dom";

export default function OtherTrainers() {
  const { id } = useParams();
  const { data: allTrainers } = useQuery({
    queryKey: ["trainers"],
    queryFn: getTerainers,
  });

  const trainers = allTrainers 
    ? allTrainers.filter(t => String(t.trainer_id || t.id) !== String(id)).slice(0, 3) 
    : [];

  return (
    <>
      <div className="container w-10/12 mx-auto text-center py-12">
        <h2 className="profile-heading ">Explore Other Trainers</h2>
        <p className="text-gray-400 my-4 py-4"></p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {trainers.length > 0 ? trainers.map(t => (
            <TrainerCard
              key={t.trainer_id || t.id}
              id={t.trainer_id || t.id}
              image={t.profile_image || trainerImage}
              name={t.name}
              rating={t.rating || 4.5}
              price={t.price_per_session || 180}
              specialties={t.specializations || []}
              location={t.location || "cairo"}
            />
          )) : (
            <>
              <TrainerCard
                image={trainerImage}
                name="Kareem Moustafa"
                rating={4.5}
                price={180}
                specialties={[
                  "body Transformation",
                  "general Fitness",
                  "Functional Training",
                ]}
                location="cairo"
              />
              <TrainerCard
                image={trainerImage}
                name="Kareem Moustafa"
                rating={4.5}
                price={180}
                specialties={[
                  "body Transformation",
                  "general Fitness",
                  "Functional Training",
                ]}
                location="cairo"
              />
              <TrainerCard
                image={trainerImage}
                name="Kareem Moustafa"
                rating={4.5}
                price={180}
                specialties={[
                  "body Transformation",
                  "general Fitness",
                  "Functional Training",
                ]}
                location="cairo"
              />
            </>
          )}
        </div>
      </div>
    </>
  );
}
