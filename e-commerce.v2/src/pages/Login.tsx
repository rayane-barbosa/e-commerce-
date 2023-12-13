import React from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Input } from "../styles/forms.styles";

type FormValues = {
  email: string;
  password: string;
};

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Aqui você pode chamar uma função para fazer o login do usuário
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
        />
        {errors.email && <p>Email é obrigatório.</p>}

        <Input
          name="password"
          type="password"
          {...register("password", { required: true })}
          placeholder="Senha"
        />
        {errors.password && <p>Senha é obrigatória.</p>}

        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
