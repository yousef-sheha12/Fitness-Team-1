import OtherTrainers from "@/components/trainer-profile/OtherTrainers";
import ScheduleSession from "@/components/trainer-profile/ScheduleSession";
import TrainerCertifictions from "@/components/trainer-profile/TrainerCertifictions";
import TrainerDescription from "@/components/trainer-profile/TrainerDescription";
import TrainerInfo from "@/components/trainer-profile/TrainerInfo";
import TrainingPackages from "@/components/trainer-profile/TrainingPackages";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getTrainerById } from "@/lib/api/triners/TrainersApi";

export default function TrainerProfile() {
  const { id } = useParams();
  const { data: trainer, isLoading } = useQuery({
    queryKey: ["trainer", id],
    queryFn: () => getTrainerById(id),
    enabled: !!id,
  });

  if (isLoading) return <div className="text-white text-center py-20">Loading...</div>;
  if (!trainer) return <div className="text-white text-center py-20">Trainer not found.</div>;

  return (
    <>
      <TrainerInfo trainer={trainer} />
      <TrainerDescription trainer={trainer} />
      <TrainerCertifictions trainer={trainer} />
      <TrainingPackages trainerId={id} />
      <OtherTrainers />
      <ScheduleSession trainerId={id} />
    </>
  );
}
