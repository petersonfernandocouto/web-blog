import React from 'react';
import Mario from '../IMG/Mario.jpg';
import Image from 'next/image';
import Consoles from '../IMG/console.jpg'
import Thebest from '../IMG/Melhores Games.png'
import FPS from "../IMG/cs2.png"
import GTAVice from '../IMG/Capa-GTVI.png'
import Crash from '../IMG/Crash.png'

const Category = () => {
  return (
    <div>

      <h1 className="text-center text-3xl font-bold">Categorias</h1>

      {/* Adiciona flexbox e centraliza o conteúdo com espaçamento inline */}
      <div 
        className="flex flex-col lg:flex-row justify-center items-center mt-7 gap-4" 
        
      >

        <div className='flex gap-4 mb-12 lg:mb-0' >
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold '>Mario</h1> 
              <br />
              <Image 
                src={Mario} 
                alt='Mario'
                style={{ width: 'auto', height: '320px', maxHeight: '500px', }}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc] '
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>Consoles</h1> 
              <br />
              <Image 
                src={Consoles} 
                alt='Consoles'
                style={{ width: 'auto', height: '320px', maxHeight: '500px',}}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc]'
              />
            </a>
        </div>

        <div className='flex gap-4  mb-12 lg:mb-0'>
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>GOAT</h1> 
              <br />
              <Image 
                src={Thebest} 
                alt='Thebest'
                style={{ width: 'auto', height: '320px', maxHeight: '500px',}}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc]'
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>FPS</h1> 
              <br />
              <Image 
                src={FPS} 
                alt='FPS'
                style={{ width: 'auto', height: '320px', maxHeight: '500px' }}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc]'
              />
            </a>
        </div>

        <div className='flex gap-4  mb-12 lg:mb-0'>
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>GTA 6</h1> 
              <br />
              <Image 
                src={GTAVice} 
                alt='GTAVice'
                style={{ width: 'auto', height: '320px', maxHeight: '500px' }}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc]'
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold '>Plataformas</h1> 
              <br />
              <Image 
                src={Crash} 
                alt='Plataformas'
                style={{ width: 'auto', height: '320px', maxHeight: '500px' }}
                className='lg:hover:-translate-y-2 transition-transform duration-700 border-4 border-[#F75922] rounded-[40px] lg:hover:border-[#b927cc]'
              />
            </a>
        </div>     

      </div>

      
      
    </div>
  );
}

export default Category;
