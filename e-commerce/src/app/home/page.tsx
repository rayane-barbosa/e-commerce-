"use client"
import React from 'react';
import BannerCarousel from '../components/home/banner'
import { Header } from '../components/header/header'
import { FooterPage } from '../components/footer/footer'

export default function Home() {
    return (
        <div>
            <Header />
            
            <BannerCarousel />

            <FooterPage />
        </div>
    )
}