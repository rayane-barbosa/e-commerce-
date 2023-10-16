"use client"
import React from 'react';
import BannerCarousel from '../components/home/banner'
import { Header } from '../components/header/header'
import { FooterPage } from '../components/footer/footer'
import { ProductCatalog } from '../components/productDetails/productCatalog';

export default function Home() {
    return (
        <div>
            <Header />
            
            <BannerCarousel />

            <ProductCatalog />

            <FooterPage />
        </div>
    )
}