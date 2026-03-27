import userAvatar from "@/assets/user2.jpg";
import InfoTagCard from "../../components/common/UserProfile/InfoTagCard";
import { BowArrow, Dumbbell } from "lucide-react";
import ActionButton from "../../components/common/UserProfile/ActionButton";
import React, { useRef, useState } from "react";

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
  const UpoladInp = useRef<HTMLInputElement>(null);
  const [avatarUrl, setAvtarUrl] = useState<undefined | string>();

  // Uplaod Photo
  const changePohoto = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const file = e.target.files?.[0];
    if (!file) return;
    const preview = URL.createObjectURL(file);
    setAvtarUrl(preview);
  };
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-2xl sm:text-2xl font-bold text-white">
        Profile Overview
      </h2>

      <div className="flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
          <img
            src={avatarUrl ?? userAvatar}
            alt="Profile"
            className="w-24 h-24 sm:w-38 sm:h-38 rounded-full object-cover shrink-0"
          />

          <div className="flex flex-col items-center sm:items-start gap-2">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div>
                <ActionButton
                  text="Upload New"
                  width="w-full sm:w-60"
                  onClick={() => UpoladInp?.current?.click()}
                />
                <input
                  type="file"
                  accept="image/jpeg,image/gif,image/png"
                  hidden
                  ref={UpoladInp}
                  onChange={(e) => {
                    changePohoto(e);
                  }}
                />
              </div>
              <ActionButton
                text="Remove"
                variant="outline"
                width="w-full sm:w-60"
                onClick={() => setAvtarUrl(undefined)}
              />
            </div>
            <span className="font-medium text-sm text-(--gray-color) text-center sm:text-left">
              JPG, GIF or PNG. Max size of 800K
            </span>
          </div>
        </div>

        {/* About Me */}
        <div className="flex flex-col gap-4 sm:gap-8 mt-6 sm:mt-12">
          <h3 className="font-medium text-xl sm:text-3xl">About Me</h3>
          <p className="text-(--gray-color) sm:text-2xl leading-tight">
            {aboutMe}
          </p>
          <hr className="border-(--gray-color) mt-2 mb-4" />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <InfoTagCard
            icon={<BowArrow size={23} className="text-white" />}
            label="Fitness Goal"
            value={fitnessGoal}
          />
          <InfoTagCard
            icon={<Dumbbell size={23} className="text-white" />}
            label="Preferred Training"
            value={preferredTraining}
          />
        </div>

        <hr className="border-(--gray-color) mt-4 mb-4" />
      </div>
    </div>
  );
}
