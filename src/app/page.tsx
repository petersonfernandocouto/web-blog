"use client";


import HomePage from "../../Componentes/HomePage";
import Category from "../../Componentes/Category";
import Menu from "../../Componentes/Menu";


export default function Home() {

 

  return (
    <>
      <div className=" mt-0 pt-0">

        <Menu />

      </div>
      
      
      <div className=" mt-0 pt-0">
        <HomePage />
      </div>

      <Category />    

    </>
  );
}
