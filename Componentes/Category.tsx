import React from 'react';
import Mario from '../IMG/Mario.jpg';
import Image from 'next/image';
import Consoles from '../IMG/console.jpg'
import Thebest from '../IMG/Melhores Games.png'
import FPS from "../IMG/cs2.png"
import GTAVice from '../IMG/Capa-GTVI.png'

const Category = () => {
  return (
    <div>

      <h1 className="text-center" style={{ fontSize: '34px' }}>Categorias</h1>

      {/* Adiciona flexbox e centraliza o conteúdo com espaçamento inline */}
      <div 
        className="flex flex-col lg:flex-row justify-center items-center mt-7" 
        style={{ gap: '15px' }}  // Adiciona espaçamento entre as divs
      >

        <div className='flex' style={{ gap: '15px'}}>
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>Mario</h1> 
              <br />
              <Image 
                src={Mario} 
                alt='Mario'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>Consoles</h1> 
              <br />
              <Image 
                src={Consoles} 
                alt='Consoles'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>
        </div>

        <div className='flex' style={{ gap: '15px'}}>
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>Melhores Games</h1> 
              <br />
              <Image 
                src={Thebest} 
                alt='Thebest'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>FPS</h1> 
              <br />
              <Image 
                src={FPS} 
                alt='FPS'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>
        </div>

        <div className='flex' style={{ gap: '15px'}}>
            {/* Primeiro card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>GTA 6</h1> 
              <br />
              <Image 
                src={GTAVice} 
                alt='GTAVice'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>

            {/* Segundo card */}
            <a href="#">
              <h1 className='text-2xl text-center text-[#F75922] font-bold'>Plataformas</h1> 
              <br />
              <Image 
                src={GTAVice} 
                alt='Plataformas'
                style={{ width: 'auto', height: '360px', maxHeight: '500px', border: '5px solid #F75922', borderRadius: '40px' }}
              />
            </a>
        </div>     

      </div>

      
      
    </div>
  );
}

export default Category;
