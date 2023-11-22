import React from "react";
import { Links } from "@/components/atoms/Links/Links.tsx";

//criar um componente que recebe um array de links e renderiza eles
// escolher um state ou contex para que o link /myAccount só apareça quando o usuário estiver logado e redirecionar para o myAccount page que deve renderizar informações do usuário
// se o cliente não estiver deve mostrar o link de /login que irá redirecionar para a página de login
// o componente deve ser renderizado no header que deve aparecer em todas as páginas

export const Navbar = () => {
  return (
    <div>
      <Links to="/login" text={"Login"}></Links>
      <Links to="/myAccount" text={"My Account"}></Links>
    </div>
  );
};
