"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Register } from './pages/register/registerPage.tsx';
import { Login } from './pages/login/loginPage';



export default function Home() {
  return (
    <main >
      
        
        <Register />
        
        
      
            
    </main>
  )
}
