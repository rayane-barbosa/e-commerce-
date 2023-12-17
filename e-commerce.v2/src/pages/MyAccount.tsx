"use client";

import React, { useContext } from "react";
import { UserContext } from "../context/userContext/UserContext";

const MyAccount: React.FC = () => {
  const { user } = useContext(UserContext); // Utilize o contexto de usuário

  return (
    <div>
      <h1>My Account</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name}!</p>
          {/* Adicione outros componentes relacionados à conta aqui */}
        </div>
      ) : (
        <p>Please log in to view your account information.</p>
      )}
    </div>
  );
};

export default MyAccount;
