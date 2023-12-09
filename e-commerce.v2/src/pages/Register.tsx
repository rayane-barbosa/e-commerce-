import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { fetchCep } from "../api/apiService";
import { Button, Container, Form, Input } from "../styles/forms.styles";

type FormValues = {
  fullName: string;
  email: string;
  phone: string;
  address: {
    cep: string;
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
  };
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
};

const Register: React.FC = () => {
  const [cep, setCep] = useState("");
  const [address, setAddress] = useState(null);

  const handleCepBlur = async () => {
    if (cep.length === 8) {
      const data = await fetchCep(cep);
      if (data) {
        setAddress(data);
      }
    }
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Aqui você pode chamar uma função para registrar o usuário
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="fullName"
          {...register("fullName", { required: "Nome completo é obrigatório" })}
          placeholder="Nome completo"
        />
        {errors.fullName && <p>{errors.fullName.message}</p>}

        <Input
          name="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: { value: /^\S+@\S+$/i, message: "Email inválido" },
          })}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email.message}</p>}

        <Input
          name="phone"
          {...register("phone", {
            required: "Telefone é obrigatório",
            pattern: {
              value: /^[0-9]{10,11}$/,
              message: "Telefone inválido",
            },
          })}
          placeholder="Telefone"
        />

        <Input
          name="address.cep"
          {...register("address.cep", { required: "CEP é obrigatório" })}
          onChange={(e) => setCep(e.target.value)}
          onBlur={handleCepBlur}
          placeholder="CEP"
        />
        <Input
          name="address.street"
          {...register("address.street", { required: "Rua é obrigatória" })}
          placeholder="Rua"
          value={address?.street || ""}
        />
        {errors.address?.street && <p>{errors.address.street.message}</p>}

        <Input
          name="address.number"
          {...register("address.number", { required: "Número é obrigatório" })}
          placeholder="Número"
          value={address?.number || ""}
        />
        {errors.address?.number && <p>{errors.address.number.message}</p>}

        <Input
          name="address.complement"
          {...register("address.complement")}
          placeholder="Complemento"
          value={address?.complement || ""}
        />

        <Input
          name="address.district"
          {...register("address.district", {
            required: "Bairro é obrigatório",
          })}
          placeholder="Bairro"
          value={address?.district || ""}
        />
        {errors.address?.district && <p>{errors.address.district.message}</p>}

        <Input
          name="address.city"
          {...register("address.city", { required: "Cidade é obrigatória" })}
          placeholder="Cidade"
          value={address?.city || ""}
        />
        {errors.address?.city && <p>{errors.address.city.message}</p>}

        <Input
          name="address.state"
          {...register("address.state", { required: "Estado é obrigatório" })}
          placeholder="Estado"
          value={address?.state || ""}
        />
        {errors.address?.state && <p>{errors.address.state.message}</p>}

        <Input
          name="password"
          type="password"
          {...register("password", {
            required: "Senha é obrigatória",
            minLength: {
              value: 8,
              message: "Senha deve ter pelo menos 8 caracteres",
            },
          })}
          placeholder="Senha"
        />
        {errors.password && <p>{errors.password.message}</p>}

        <Input
          name="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Confirmação de senha é obrigatória",
            validate: (value) =>
              value === getValues().password || "As senhas não coincidem",
          })}
          placeholder="Confirme a senha"
        />
        {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}

        <label>
          <Input
            name="acceptTerms"
            type="checkbox"
            {...register("acceptTerms", {
              required: "Você deve aceitar os termos e condições",
            })}
          />
          Eu aceito os termos e condições
        </label>
        {errors.acceptTerms && <p>{errors.acceptTerms.message}</p>}

        <Button type="submit">Registrar</Button>
      </Form>
    </Container>
  );
};

export default Register;
