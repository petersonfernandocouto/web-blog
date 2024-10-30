import React from 'react';
import Image from 'next/image';
import IMG from '../IMG/IMGGamer.jpg';
import { SlGameController } from "react-icons/sl";

import { BsEmojiGrin } from "react-icons/bs";
import { BsEmojiAstonished } from "react-icons/bs";
import { GiPistolGun } from "react-icons/gi";
import { IoFootball } from "react-icons/io5";
import { FaCarCrash } from "react-icons/fa";
import { MdOutlineLiveTv } from "react-icons/md";

const Gameplays = () => {
  return (

    
    <div className='bg-[#000E29] lg:flex justify-center items-center mt-5 pt-5'>

      
      
      {/* Div esquerda com a imagem, ocupando 30% em telas lg */}
      <div className='bg-[#F75922] lg:w-[30%] w-[80%] flex flex-col justify-center items-center rounded-[20px] mt-14 mx-auto'>
        <Image 
          src={IMG}
          alt='IMG'
          style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
          className='mt-7 rounded-[40px] px-4'
        />  

        <div className='text-white text-[70px] py-10'>

            <SlGameController />

        </div>

        <h1 className='text-[28px] font-bold'>Gameplays todos os dias</h1>
          
        <h1 className='text-[28px] font-bold py-8'>Visite nosso canal</h1>  

        <a href='https://www.tiktok.com/@gamescutzbr' target='_blank' rel='noopener noreferrer'>
          <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center mb-7 font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
            Acessar o Canal
          </button>
        </a>

      </div>
      
      {/* Div direita com o texto, ocupando 70% em telas lg */}
      <div className='lg:w-[60%] p-4 flex flex-col justify-center items-center gap-8 lg:gap-10'>
        
        <div className='flex gap-28 lg:gap-56'>
              <div> 
                    <div className='bg-[#F75922] p-4 rounded-full'>
                    <BsEmojiGrin className='text-white text-[45px]' />
                    </div>
                    <h1 className='text-[20px] mt-4 text-center font-bold'>Humor</h1>
              </div>

              <div>
                    <div className='bg-[#F75922] p-4 rounded-full'>
                        <BsEmojiAstonished className='text-white text-[45px]' />
                    </div>

                    <h1 className='text-[20px] mt-4 text-center font-bold'>Terror</h1>
              </div>

        </div>

        <div className='flex gap-28 lg:gap-56'>
              <div> 
                    <div className='bg-[#F75922] p-4 rounded-full'>
                    <GiPistolGun className='text-white text-[45px]' />
                    </div>
                    <h1 className='text-[20px] mt-4 text-center font-bold'>FPS</h1>
              </div>

              <div>
                    <div className='bg-[#F75922] p-4 rounded-full'>
                        <IoFootball className='text-white text-[45px]' />
                    </div>

                    <h1 className='text-[20px] mt-4 text-center font-bold'>Futebol</h1>
              </div>

        </div>

        <div className='flex gap-28 lg:gap-56'>
              <div> 
                    <div className='bg-[#F75922] p-4 rounded-full'>
                    <FaCarCrash className='text-white text-[45px]' />
                    </div>
                    <h1 className='text-[20px] mt-4 text-center font-bold'>GTA</h1>
              </div>

              <div>
                    <div className='bg-[#F75922] p-4 rounded-full'>
                        <MdOutlineLiveTv className='text-white text-[45px]' />
                    </div>

                    <h1 className='text-[20px] mt-4 text-center font-bold'>Lives</h1>
              </div>

        </div>


      </div>

    </div>
  );
}

export default Gameplays;
