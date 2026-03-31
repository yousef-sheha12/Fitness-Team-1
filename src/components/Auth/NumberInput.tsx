import type { UseFormRegister, FieldError, Path } from "react-hook-form";
import type { InfoFormData } from "@/lib/schemas/info.schema";

interface Props {
  label: string;
  field: Path<InfoFormData>;
  placeholder: string;
  min: number;
  max: number;
  register: UseFormRegister<InfoFormData>;
  error?: FieldError;
}

export default function NumberInput({
  label,
  field,
  placeholder,
  min,
  max,
  register,
  error,
}: Props) {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <label className="text-sm font-semibold text-(--white-color)">
        {label}
      </label>
      <input
        type="number"
        {...register(field, { valueAsNumber: true })}
        placeholder={placeholder}
        min={min}
        max={max}
        className="h-11 rounded-lg bg-(--darkGrey-color) border border-(--gray-color) text-white px-3 text-sm focus:outline-none focus:border-(--main-color)"
      />
      {error && <p className="text-red-400 text-xs">{error.message}</p>}
    </div>
  );
}
