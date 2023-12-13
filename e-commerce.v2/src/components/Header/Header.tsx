import React, { useContext } from "react";
import { Li, Nav, StyledHeader, StyledLink, Ul } from "./Header.styles";
import Link from "next/link";
import { UserContext } from "../../context/userContext/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const navLinks = [
  { name: "Arteabox.com", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
  { name: "Minha Conta", path: "/minha-conta" },
];

function Header() {
  const { user, cart, logoutUser } = useContext(UserContext); //

  return (
    <StyledHeader>
      <Nav>
        <Ul>
          {navLinks.map((link) => (
            <Li key={link.name}>
              <Link href={link.path} passHref>
                <StyledLink>{link.name}</StyledLink>
              </Link>
            </Li>
          ))}
          {user ? (
            <Li>
              <FontAwesomeIcon icon={faUser} />
              <span>Bem-vindo, {user.name}!</span>
              <button onClick={logoutUser}>Logout</button>
            </Li>
          ) : (
            <Li>
              <FontAwesomeIcon icon={faUser} />
              <Link href="/login" passHref>
                <StyledLink>Login</StyledLink>
              </Link>
            </Li>
          )}
          <Li>
            <Link href="/cart" passHref>
              <StyledLink>
                Carrinho ({cart ? cart.products.length : 0})
              </StyledLink>
            </Link>
          </Li>
        </Ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
