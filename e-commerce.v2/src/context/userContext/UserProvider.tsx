import React from "react";
import { UserProvider } from "./UserContext";
import MyApp from "../../pages/_app";

const Main = () => {
  return (
    <UserProvider>
      <MyApp Component={undefined} pageProps={undefined} />
    </UserProvider>
  );
};

export default Main;
