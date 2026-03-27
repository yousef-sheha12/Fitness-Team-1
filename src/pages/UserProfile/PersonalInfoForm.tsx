import { Input } from "@/components/ui/input";

interface PersonalInfoFormProps {
  onSave?: () => void;
}

export default function PersonalInfoForm({ onSave }: PersonalInfoFormProps) {
  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Personal Information
      </h2>

      <div className="border border-(--gray-color) rounded-xl p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Full Name
            </label>
            <Input
              placeholder="Mohamed Alaa Ahmed"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Email Address
            </label>
            <Input
              type="email"
              placeholder="mohamedalaa@gmail.com"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Phone Number
            </label>
            <Input
              type="tel"
              placeholder="01234567891"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Date of Birth
            </label>
            <Input
              type="date"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Gender
            </label>
            <Input
              placeholder="Male"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Location
            </label>
            <Input
              placeholder="Maadi, Cairo"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
        </div>

        <button
          onClick={onSave}
          className="w-full sm:w-147 mx-auto h-12 text-sm font-semibold text-white bg-primary border border-primary rounded-sm hover:bg-primary/80 transition-colors duration-200 cursor-pointer">
          Save Changes
        </button>
      </div>
    </div>
  );
}
