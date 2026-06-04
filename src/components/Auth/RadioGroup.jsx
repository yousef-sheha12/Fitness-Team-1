import { Controller } from "react-hook-form";
import CheckedInput from "@/components/Auth/CheckedInput";

export default function RadioGroup({
  label,
  name,
  options,
  control,
  error,
  onChangeTransform,
  valueTransform,
}) {
  return (
    <div className="flex flex-col gap-2">
      <p className="text-(--white-color) text-sm font-semibold">{label}</p>
      <Controller
        control={control}
        name={name}
        render={({ field }) => (
          <div className="flex flex-wrap gap-2">
            {options.map((item) => (
              <CheckedInput
                key={item}
                label={item}
                type="radio"
                name={name}
                value={item}
                checked={
                  valueTransform
                    ? valueTransform(field.value, item)
                    : field.value === item
                }
                onChange={() =>
                  field.onChange(
                    onChangeTransform ? onChangeTransform(item) : item,
                  )
                }
              />
            ))}
          </div>
        )}
      />

      {error && <p className="text-red-400 text-xs">{error}</p>}
    </div>
  );
}
