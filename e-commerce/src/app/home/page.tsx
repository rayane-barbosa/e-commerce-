"use client";
import React from "react";
import BannerCarousel from "./components/banner/banner";
import { Header } from "../components/header/header";
import { FooterPage } from "../components/footer/footer.tsx";
import { ProductCatalog } from "../components/productDetails/productCatalog";

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
