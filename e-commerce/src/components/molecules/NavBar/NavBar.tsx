import React, { useContext } from "react";
import Links from "@/components/atoms/Links/Links.tsx";
import * as Styled from "./NavBar.styles";

//criar um componente que recebe um array de links e renderiza eles
// escolher um state ou context para que o link /myAccount só apareça quando o usuário estiver logado e redirecionar para o myAccount page que deve renderizar informações do usuário
// se o cliente não estiver deve mostrar o link de /login que irá redirecionar para a página de login
// o componente deve ser renderizado no header que deve aparecer em todas as páginas

//deve receber os links como props e renderizar eles usando um map

const pages = [
  {
    to: "/about",
    text: "About Us",
  },
  {
    to: "/myAccount",
    text: "My Account",
  },
  {
    to: "/cart",
    text: "Cart",
  },
  {
    to: "/home",
    text: "Home",
  },
  {
    to: "/favorites",
    text: "Favorites",
  },
];

const UserContext = React.createContext(false);

const NavBar = () => {
  const isLoggedIn = useContext(UserContext);

  return (
    <Styled.NavigationBar>
      {pages.map((page) =>
        (page.to === "myAccount" && isLoggedIn) || page.to !== "myAccount" ? (
          <Links key={page.to} to={page.to} text={page.text} />
        ) : null
      )}
    </Styled.NavigationBar>
  );
};
export default NavBar;
