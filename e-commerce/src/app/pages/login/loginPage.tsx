"use client";
import React from "react";
import "./loginStyle.css";
import { useForm } from "react-hook-form";

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  return (
    
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        aria-invalid={errors.Email ? "true" : "false"}
      />
      {errors.Email && errors.Email.type === "required" && (
        <span role="alert">Email is required</span>
      )}
      {errors.Email && errors.Email.type === "pattern" && (
        <span role="alert">Invalid email format</span>
      )}

      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: true,
          maxLength: 8,
          minLength: 6,
        })}
        aria-invalid={errors.Password ? "true" : "false"}
      />
      {errors.Password && errors.Password.type === "required" && (
        <span role="alert">Password is required</span>
      )}
      {errors.Password && errors.Password.type === "maxLength" && (
        <span role="alert">Password is too long</span>
      )}
      {errors.Password && errors.Password.type === "minLength" && (
        <span role="alert">Password is too short</span>
      )}
      <input type="submit" disabled={!!Object.keys(errors).length} />
    </form>
    
    
  );
};
