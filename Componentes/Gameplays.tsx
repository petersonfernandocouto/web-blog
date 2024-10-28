import React from 'react';
import Image from 'next/image';
import IMG from '../IMG/IMGGamer.jpg';
import { SlGameController } from "react-icons/sl";


const Gameplays = () => {
  return (
    <div className='bg-[#000E29] lg:flex justify-center items-center'>
      
      {/* Div esquerda com a imagem, ocupando 30% em telas lg */}
      <div className='bg-[#F75922] lg:w-[40%] w-[80%] flex flex-col justify-center items-center rounded-[20px] mt-14 mx-auto'>
        <Image 
          src={IMG}
          alt='IMG'
          style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
          className='mt-7 rounded-[40px]'
        />  

        <div className='text-white text-[70px] py-10'>

            <SlGameController />

        </div>

        <h1 className='text-[28px] font-bold'>Gameplays todos os dias</h1>
          
        <h1 className='text-[28px] font-bold py-8'>Visite nosso canal em</h1>  

        <a href='https://www.tiktok.com/@gamescutzbr' target='_blank' rel='noopener noreferrer'>
          <button className='bg-[#00143D] text-white font-semibold rounded-[15px] px-6 py-3 text-center mb-7'>
            Canal
          </button>
        </a>

      </div>
      
      {/* Div direita com o texto, ocupando 70% em telas lg */}
      <div className='lg:w-[60%] p-4'>
        <h1 className="text-white text-center lg:text-left text-3xl font-bold">Teste</h1>
      </div>

    </div>
  );
}

export default Gameplays;
