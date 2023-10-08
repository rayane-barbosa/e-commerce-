"use client";
import { register } from "module";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import '../../../../public/formsStyle.css'
import { ErrorMessage } from "@/errorHandler/ErrorMessage";


interface IFormRegisterValues {
  Email: string;
  Password: string;
  MobileNumber: string;
  cep: string;
  endereco: string;
  bairro: string;
  numero: number;
  complemento: string;
  cidade: string;
  estado: string;
  PasswordValidation: string;
  checkbox: boolean;
}


export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormRegisterValues>();

  const onSubmit = (data: any) => console.log(data);
  console.log(errors);

  const registerErrorMessages: Record<string, string> = {
    required: "This field is required",
    pattern: "Invalid format",
    maxLength: "is too long",
    minLength: "is too short",

  }


  return (
    <form className="form-align"
    onSubmit={handleSubmit(onSubmit)}>
      <input
        className="inputForms"
        type="text"
        placeholder="Email"
        {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
      />

      <ErrorMessage errorType={errors.Email?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="tel"
        placeholder="Mobile number"
        {...register("MobileNumber", {
          required: true,
          pattern: /^\d+$/,
          minLength: 6,
          maxLength: 12,
        })}
      />
      <ErrorMessage errorType={errors.MobileNumber?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="CEP"
        {...register("cep" ,{
          required: true,
          pattern: /^\d+$/,
          minLength: 8,
          maxLength: 8,
        })}
      />

      <ErrorMessage errorType={errors.cep?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="Rua"
        {...register("endereco", {
          required: true,
          minLength: 3,
          maxLength: 50,
          })}
      />
      <ErrorMessage errorType={errors.endereco?.type} messages={registerErrorMessages} />
      
      <input
        className="inputForms"
        type="text"
        placeholder="Bairro"
      {...register("bairro" ,{
          required: true,
          minLength: 3,
          maxLength: 50,
        })}
      />

      <ErrorMessage errorType={errors.bairro?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="Número"
        {...register("numero", {
          required: true,
          minLength: 1,
          maxLength: 10,
        })}
      />

      <ErrorMessage errorType={errors.numero?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="Complemento"
        {...register("complemento", {
          required: false,
          minLength: 1,
          maxLength: 50,
        })}
      />

      <ErrorMessage errorType={errors.complemento?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="Cidade"
        {...register("cidade", {
          required: true,
          minLength: 3,
          maxLength: 50,
        })}
      />

      <ErrorMessage errorType={errors.cidade?.type} messages={registerErrorMessages} />

      <input
        className="inputForms"
        type="text"
        placeholder="Estado"
        {...register("estado", {
          required: true,
          minLength: 2,
          maxLength: 2,
        })}
      />

      <ErrorMessage errorType={errors.estado?.type} messages={registerErrorMessages} />

      <input
        type="password"
        placeholder="Password"
        {...register("Password", {
          required: true,
          maxLength: 8,
          minLength: 6,
        })}
      />
      <ErrorMessage errorType={errors.Password?.type} messages={registerErrorMessages} />
      <input
        type="password"
        placeholder="Password Validation"
        {...register("PasswordValidation", {
          required: true,
          maxLength: 8,
          minLength: 6,
        })}
      />
      <ErrorMessage errorType={errors.PasswordValidation?.type} messages={registerErrorMessages} />

      <a>Li e concondo com os termos de uso <input type="checkbox" placeholder="" {...register("checkbox", {
          required: true,
        })} aria-invalid={!!errors.checkbox} />     
       </a>
      <ErrorMessage errorType={errors.checkbox?.type} messages={registerErrorMessages} />
      


      <input type="submit"
       />
    </form>
  );
};
