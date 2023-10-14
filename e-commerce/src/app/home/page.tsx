"use client"
import React from 'react';
import BannerCarousel from '../components/home/banner'
import { Header } from '../components/header/header'

export default function Home() {
    return (
        <div>
            <Header />
            
            <BannerCarousel />
        </div>
    )
}