"use client";
import React from "react";
import LoginPage from "./login/page.tsx";
import { Header } from "./components/Header/Header.tsx";
import { FooterPage } from "./components/Footer/Footer.tsx";
import HomePage from "./Home/page.tsx";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
