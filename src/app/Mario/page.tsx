"use client";

import React from 'react'
import Mario from '../../../ComponentesDeJogos/Mariocss/Mario'

import { MenuIcon } from "lucide-react";
import { IoGameControllerOutline } from "react-icons/io5";
import { useState } from "react";
import Footer from '../../../Componentes/Footer';
import ScrollToTop from '../../../Componentes/ScrollToTop';

function Page() {

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenuOnClick = (sectionId: string) => {
      setIsMenuOpen(false);
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

  return (
    <div>

        <div className=" mt-0 pt-0">
        
                        {/*Menu abaixo */}
                        <div className="flex fixed items-center z-40 bg-[#000E29] w-screen lg:hidden px-6 py-6 shadow-lg ">
                        <h1 className="text-white font-audiowide">GamesCut</h1>
        
                        <button
                        onClick={toggleMenu}
                        className="fixed flex items-center right-0 p-4 z-40 lg:hidden lg:bg-none  rounded-lg"
                        >
                        <MenuIcon size={28} className="text-[#F75922] font-bold" />
                        </button>
                        </div>
        
                        {/* Menu */}
                        <header className=" md:h-16 xl:px-28 flex items-center bg-[#000E29]  text-[#F75922]  font-bold mb-[75px] lg:mb-0">
        
                        <div className="hidden lg:flex bg-[#F75922] rounded-lg h-20 w-auto px-4 items-center justify-center mt-[20px] z-50">
        
                        <a href="#" className="flex items-center">
                        <IoGameControllerOutline className="text-white text-2xl mr-2" />
                        <h1 className="text-white font-audiowide">GamesCut</h1>
                        </a>
        
                        </div>
        
                        <div
                        className={`fixed lg:relative top-0 left-0 bg-[#000E29]  z-20 lg:bg-transparent bg-opacity-95 text-center overflow-hidden transition-all duration-500 flex flex-col lg:flex-row gap-8 items-center justify-center w-full lg:h-full lg:opacity-100 ${
                        isMenuOpen ? "h-full opacity-100" : "h-0 opacity-0"
                        }`}
                        >
                        <nav className="lg:flex-1 justify-end flex gap-8 flex-col lg:flex-row lg:ml-16">
                        <a
                            className=" hover:text-[#b927cc] transition-all duration-500"
                            href="/"
                            onClick={() => closeMenuOnClick("#")}
                        >
                            Home
                        </a>
        
                        <a
                            className="hover:text-[#b927cc] transition-all duration-500"
                            href="/Consoles"
                            onClick={() => closeMenuOnClick("#about")}
                        >
                            Consoles
                        </a>
        
                        <a
                            className="hover:text-[#b927cc] transition-all duration-500"
                            href="/Vendas"
                            onClick={() => closeMenuOnClick("#services")}
                        >
                            Loja De Jogos
                        </a>
                        <a
                            className="hover:text-[#b927cc] transition-all duration-500"
                            href="/"
                        >
                            Aguardados
                        </a>
                        </nav>
                        </div>
        
                        </header>
        
        </div>

        <div>


            <Mario />


        </div>

        <div className='mt-10'>


            

                    <Footer /> 

            

        </div>

        <ScrollToTop />
      
    </div>
  )
}

export default Page
