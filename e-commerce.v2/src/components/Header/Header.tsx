"use client";

import React, { useContext } from "react";
import { Nav, StyledHeader, StyledLink, Ul } from "./Header.styles";
import Link from "next/link";
import { UserContext } from "../../context/userContext/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "../../context/cartContext/CartContext";
import { useRouter } from "next/router";

const navLinks = [
  { name: "Arteabox.com", path: "/" },
  { name: "Sobre", path: "/sobre" },
  { name: "Contato", path: "/contato" },
  { name: "Minha Conta", path: "/minha-conta" },
];

function Header() {
  const { user, logoutUser } = useContext(UserContext);
  const { cart } = useContext(CartContext);
  const router = useRouter();

  return (
    <StyledHeader>
      <Nav>
        <Ul>
          {navLinks.map((link) => (
            <li
              key={link.name}
              className={router.pathname === link.path ? "active" : ""}
            >
              <Link href={link.path} passHref>
                <StyledLink>{link.name}</StyledLink>
              </Link>
            </li>
          ))}

          {user ? (
            <li>
              <FontAwesomeIcon icon={faUser} />
              <span>Bem-vindo, {user.name}!</span>
              <button onClick={logoutUser}>Logout</button>
            </li>
          ) : (
            <li>
              <FontAwesomeIcon icon={faUser} />
              <Link href="/login" passHref>
                <StyledLink>Login</StyledLink>
              </Link>
            </li>
          )}
          <li>
            <Link href="/cart" passHref>
              <StyledLink>Carrinho ({cart ? cart.items.length : 0})</StyledLink>
            </Link>
          </li>
        </Ul>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
