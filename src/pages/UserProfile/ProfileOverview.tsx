import InfoTagCard from "../../components/common/UserProfile/InfoTagCard";
import { BowArrow, Dumbbell } from "lucide-react";
import React, { useRef, useState } from "react";
import ProfileHeader from "@/components/common/UserProfile/ProfileHeader";
import userAvatar from "@/assets/user2.jpg";

interface ProfileOverviewProps {
  aboutMe: string;
  fitnessGoal: string;
  preferredTraining: string;
}

export default function ProfileOverview({
  aboutMe,
  fitnessGoal,
  preferredTraining,
}: ProfileOverviewProps) {
  const uploadInp = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvatarUrl] = useState<string | undefined>();

  const changePhoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setAvatarUrl(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground">Profile Overview</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Manage your personal information and preferences
        </p>
      </div>

      <ProfileHeader
        name="Mohamed Alaa"
        member={2022}
        sessionComplete={48}
        activePackage="Single Pack"
        nextSession="Today, 9:00 AM"
        avatarUrl={avatarUrl ?? userAvatar}
        onAvatarClick={() => uploadInp.current?.click()}
        onEditProfile={() => console.log("edit profile")}
      />

      {/* Hidden file input */}
      <input
        type="file"
        accept="image/jpeg,image/gif,image/png"
        hidden
        ref={uploadInp}
        onChange={changePhoto}
      />

      {/* About Me */}
      <div className="rounded-2xl border border-border bg-card p-6">
        <h3 className="text-base font-semibold text-foreground mb-3">
          About Me
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed">
          {aboutMe}
        </p>
      </div>

      {/* Info Tags */}
      <div className="flex flex-col sm:flex-row gap-4">
        <InfoTagCard
          icon={<BowArrow size={18} />}
          label="Fitness Goal"
          value={fitnessGoal}
        />
        <InfoTagCard
          icon={<Dumbbell size={18} />}
          label="Preferred Training"
          value={preferredTraining}
        />
      </div>
    </div>
  );
}
