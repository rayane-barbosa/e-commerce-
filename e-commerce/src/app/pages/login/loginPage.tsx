"use client";
import React from "react";
import '../../../../public/formsStyle.css'
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../../../errorHandler/ErrorMessage.tsx";

export interface IFormLoginValues {
  Email: string;
  Password: string;
}

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLoginValues>();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const loginErrorMessages: Record<string, string> = {
    required: "This field is required",
    pattern: "Invalid email format",
    maxLength: "Password is too long",
    minLength: "Password is too short",
  }


return (
    <form className="form-align" onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register('Email', { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={!!errors.Email}
      />
      <ErrorMessage errorType={errors.Email?.type} messages={loginErrorMessages} />

      <input
        type="password"
        placeholder="Password"
        {...register('Password', { required: true, maxLength: 8, minLength: 6 })}
        aria-invalid={!!errors.Password}
      />
      <ErrorMessage errorType={errors.Password?.type} messages={loginErrorMessages} />

      <input type="submit" disabled={!!Object.keys(errors).length} />
    </form>
  );
};
