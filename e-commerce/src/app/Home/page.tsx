"use client";
import React from "react";
import BannerCarousel from "../../components/molecules/BannerHome/BannerHome.tsx";
import { Header } from "../../components/organisms/Header/Header.tsx";
import { FooterPage } from "../../components/organisms/Footer/Footer.tsx";
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
