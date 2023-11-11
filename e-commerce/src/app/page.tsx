"use client";
import React from "react";
import LoginPage from "./login/page.tsx";
import { Header } from "./components/header/header.tsx";
import { FooterPage } from "./components/footer/footer.tsx";
import HomePage from "./home/page.tsx";

export default function Home() {
  return (
    <main>
      <HomePage />
    </main>
  );
}
