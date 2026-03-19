import OtherTrainers from "@/components/trainer-profile/OtherTrainers";
import ScheduleSession from "@/components/trainer-profile/ScheduleSession";
import TrainerCertifictions from "@/components/trainer-profile/TrainerCertifictions";
import TrainerDescription from "@/components/trainer-profile/TrainerDescription";
import TrainerInfo from "@/components/trainer-profile/TrainerInfo";
import TrainingPackages from "@/components/trainer-profile/TrainingPackages";

export default function TrainerProfile() {
  return (
    <>
      <TrainerInfo />
      <TrainerDescription />
      <TrainerCertifictions />
      <TrainingPackages />
      <OtherTrainers />
      <ScheduleSession />
    </>
  );
}
