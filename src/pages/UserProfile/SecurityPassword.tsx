import { LockKeyholeIcon } from "lucide-react";
import InputField from "../../components/Auth/InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, type signUpFormData } from "@/lib/schemas/signup.schema";

export default function SecurityPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<signUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: signUpFormData) => {
    console.log(data);
  };

  return (
    <div className="flex flex-col gap-6 px-4 sm:px-10">
      <h2 className="text-xl sm:text-3xl font-bold text-white">
        Security & Password
      </h2>

      <div className="border border-(--gray-color) rounded-xl p-4 sm:p-6 flex flex-col gap-5">
        <h4 className="text-xl text-center sm:text-3xl mt-2 font-semibold text-white">
          Change Password
        </h4>
        <div className="flex flex-col items-center justify-center sm:flex-row gap-4 p-8">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4"
          >
            <InputField
              label="Current Password"
              placeholder="Enter your new password"
              type="password"
              register={register("password")}
              error={errors.password}
              icon={<LockKeyholeIcon size={16} />}
            />
            <InputField
              label="New Password"
              placeholder="Enter your new password"
              type="password"
              register={register("password")}
              error={errors.password}
              icon={<LockKeyholeIcon size={16} />}
            />
            <InputField
              label="Confirm New Password"
              placeholder="Re-enter your new password"
              type="password"
              register={register("password")}
              error={errors.password}
              icon={<LockKeyholeIcon size={16} />}
            />
            <button className="w-full sm:w-147 mx-auto mt-2 h-12 text-sm font-semibold text-white bg-primary border border-primary rounded-sm hover:bg-primary/80 transition-colors duration-200 cursor-pointer">
              Update Password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
