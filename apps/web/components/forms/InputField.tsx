import { cn } from "@/lib/utils";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import React from "react";

const InputField = ({
  name,
  label,
  placeholder,
  type = "text",
  register,
  error,
  validation,
  disabled,
  value,
}: FormInputProps) => {
  return (
    <div className="space-y-2">
      <Label className="form-lable" htmlFor={name}>
        {label}
      </Label>
      <Input
        type={type}
        id={name}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        className={cn(
          "form-input",
          { "opacity-50 cursor-not-allowed": disabled },
          error && "border-red-500"
        )}
        {...register(name, validation)}
      />
      {error && <p className="text-sm text-color-500">{error.message}</p>}
    </div>
  );
};

export default InputField;
