import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Button, Container, Form, Input } from "../styles/forms.styles";
import { UserContext } from "../context/userContext/UserContext";

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

  const { loginUser } = useContext(UserContext);

  const onSubmit = ({ email }: FormValues) => {
    loginUser({
      email,
    });

    console.log(email);
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
