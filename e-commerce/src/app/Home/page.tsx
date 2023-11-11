"use client";
import React from "react";
import BannerCarousel from "./components/banner/banner";
import { Header } from "../components/Header/Header.tsx";
import { FooterPage } from "../components/Footer/Footer.tsx";
import { ProductCatalog } from "../components/ProductDetails/productCatalog.tsx";

export default function HomePage() {
  return (
    <div>
      <Header />

      <BannerCarousel />

      <ProductCatalog />

      <FooterPage />
    </div>
  );
}
