"use client";
import { register } from "module";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data: any) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        className="inputForms"
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />
      <input
        className="inputForms"
        type="tel"
        placeholder="Mobile number"
        {...register("Mobile number", {
          required: true,
          minLength: 6,
          maxLength: 12,
        })}
      />

      <input
        className="inputForms"
        type="text"
        placeholder="CEP"
        {...register("cep")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Rua"
        {...register("endereco")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Bairro"
        {...register("bairro")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Número"
        {...register("numero")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Complemento"
        {...register("complemento")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Cidade"
        {...register("cidade")}
      />
      <input
        className="inputForms"
        type="text"
        placeholder="Estado"
        {...register("estado")}
      />
      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: true,
          maxLength: 8,
          minLength: 6,
        })}
      />
      <input
        type="password"
        placeholder="Password Validation"
        {...register("Password Validation", {
          required: true,
          maxLength: 8,
          minLength: 6,
        })}
      />
       <input type="checkbox" placeholder="Li e concondo com os termos de uso" {...register} />


      <input type="submit"
       />
    </form>
  );
};
