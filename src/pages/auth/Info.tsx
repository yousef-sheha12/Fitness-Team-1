import RadioGroup from "@/components/Auth/RadioGroup";
import NumberInput from "@/components/Auth/NumberInput";
import Button from "@/components/common/Button";
import AuthLayout from "@/components/layout/AuthLayout";
import { saveFitnessProfile } from "@/lib/api/profile.api";
import { checkedData } from "@/lib/data/checked.data";
import { infoSchema, type InfoFormData } from "@/lib/schemas/info.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const RADIO_FIELDS = [
  {
    label: "What is your gender?",
    name: "gender",
    options: checkedData.gender,
  },
  {
    label: "What is your current fitness level?",
    name: "fitness_level",
    options: checkedData.fitnessLevel,
  },
  {
    label: "How would you like to train?",
    name: "workout_location",
    options: checkedData.workoutLocation,
  },
  {
    label: "How often do you plan to train?",
    name: "preferred_training_days",
    options: checkedData.preferredTrainingDays,
  },
] as const;

const NUMBER_FIELDS = [
  { label: "Age", field: "age", placeholder: "e.g. 25", min: 10, max: 100 },
  {
    label: "Height (cm)",
    field: "height_cm",
    placeholder: "e.g. 175",
    min: 100,
    max: 250,
  },
  {
    label: "Weight (kg)",
    field: "weight_kg",
    placeholder: "e.g. 70",
    min: 30,
    max: 300,
  },
] as const;

export default function Info() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<InfoFormData>({
    resolver: zodResolver(infoSchema),
    defaultValues: {
      gender: "",
      fitness_level: "",
      workout_location: "",
      preferred_training_days: "",
      age: 0,
      height_cm: 0,
      weight_kg: 0,
    },
  });

  const { mutate, isPending } = useMutation({
    mutationFn: saveFitnessProfile,
    onSuccess: () => navigate("/"),
    onError: () => navigate("/"),
  });

  const onSubmit = (data: InfoFormData) => {
    mutate({
      gender: data.gender,
      age: data.age,
      height_cm: data.height_cm,
      weight_kg: data.weight_kg,
      fitness_goal: "lose_weight",
      fitness_level: data.fitness_level,
      workout_location: data.workout_location,
      preferred_training_days: data.preferred_training_days,
    });
  };

  return (
    <AuthLayout>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center items-center justify-center">
          <h2 className="font-bold text-4xl text-(--white-color) mt-5">
            Personalize your training experience
          </h2>
          <p className="text-(--gray-color) text-md font-semibold">
            Tell us a few things about your fitness goals so we can recommend
            the best trainers for you.
          </p>
        </div>

        {RADIO_FIELDS.map(({ label, name, options }) => (
          <RadioGroup
            key={name}
            label={label}
            name={name}
            options={options}
            control={control}
            error={errors[name]?.message}
          />
        ))}

        <div className="flex flex-col gap-4">
          {NUMBER_FIELDS.map(({ label, field, placeholder, min, max }) => (
            <NumberInput
              key={field}
              label={label}
              field={field}
              placeholder={placeholder}
              min={min}
              max={max}
              register={register}
              error={errors[field]}
            />
          ))}
        </div>

        <Button
          text={isPending ? "Saving..." : "Continue"}
          icon={<ArrowRight size={16} />}
          type="submit"
          disabled={isPending}
        />
      </form>
    </AuthLayout>
  );
}
