import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { getProfile } from "@/lib/api/Auth/auth.api";
import { updateProfile } from "@/lib/api/profile.api";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

export default function PersonalInfoForm({ onSave }) {
  const queryClient = useQueryClient();
  const { user: globalUser } = useAuth();
  const { data: profile } = useQuery({ queryKey: ["profile"], queryFn: getProfile });
  
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      dob: "",
      gender: "",
      location: "",
    }
  });

  useEffect(() => {
    const p = profile?.user || globalUser;
    if (p) {
      reset({
        name: p.name || "",
        email: p.email || "",
        phone: p.phone || "",
        dob: p.dob || "",
        gender: p.gender || "",
        location: p.location || "",
      });
    }
  }, [profile, globalUser, reset]);

  const mutation = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      queryClient.invalidateQueries(["profile"]);
      if (onSave) onSave();
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white">
        Personal Information
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="border border-(--gray-color) rounded-xl p-4 sm:p-6 flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Full Name
            </label>
            <Input
              {...register("name")}
              placeholder="Mohamed Alaa Ahmed"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Email Address
            </label>
            <Input
              {...register("email")}
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
              {...register("phone")}
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
              {...register("dob")}
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
              {...register("gender")}
              placeholder="Male"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-md font-semibold text-(--gray-color)">
              Location
            </label>
            <Input
              {...register("location")}
              placeholder="Maadi, Cairo"
              className="bg-(--lightGrey-color) border-[#3A3A3A] h-11 text-white placeholder:text-(--gray-color)"
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={mutation.isPending}
          className="w-full sm:w-147 mx-auto h-12 text-sm font-semibold text-white bg-primary border border-primary rounded-sm hover:bg-primary/80 transition-colors duration-200 cursor-pointer disabled:opacity-50"
        >
          {mutation.isPending ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}
