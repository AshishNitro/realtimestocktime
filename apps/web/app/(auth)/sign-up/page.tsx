"use client";
import React from "react";
import InputField from "../../../components/forms/InputField";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import SelectField from "@/components/forms/SelectField";
import { INVESTMENT_GOALS, PREFERRED_INDUSTRIES } from "@/lib/Nav_constant";
import FooterLink from "@/components/forms/FooterLink";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      country: "",
      investmentGoals: "Growth",
      riskTolerance: "Medium",
      preferredIndustry: "Technology",
    },
    mode: "onBlur",
  });

  const onSumbit = async (data: SignUpFormData) => {};

  return (
    <>
      <h1 className="form-title">SignUp Here</h1>
      <form onSubmit={handleSubmit(onSumbit)} className="space-y-5">
        <InputField
          name="Full Name"
          label="Full Name"
          placeholder="Ashish Sharma"
          register={register}
          error={errors.fullName}
          validation={{ required: "Full name id req", minLenght: 2 }}
        />

        <InputField
          name="email"
          label="Email Address"
          placeholder="ashishnitro5@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email id req",
            pattern: /^\S+@\S+$/i,
            mesaage: "real Email req",
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="put your Ex number here let me help you"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password req",
            minLenth: 6,
          }}
        />

        <SelectField
          name="investmentGoals"
          label="Investment Goals"
          placeholder="Select your investment goals"
          options={INVESTMENT_GOALS}
          control={control}
          error={errors.investmentGoals}
          required
        />

        <SelectField
          name="preferredIndustry"
          label="Preferred Industry"
          placeholder="Select your preferred industry"
          options={PREFERRED_INDUSTRIES}
          control={control}
          error={errors.preferredIndustry}
          required
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn w-full mt-5"
        >
          {isSubmitting
            ? "Creating Account..."
            : "Start your Investment Journey"}
        </Button>

        <FooterLink
          text="Already have an account?"
          linkText="Sign in"
          href="/sign-in"
        />
      </form>
    </>
  );
};

export default SignUpPage;
