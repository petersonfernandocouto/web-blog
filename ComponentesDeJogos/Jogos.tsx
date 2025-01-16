import React from 'react'
import Image from 'next/image';

import RDR2V from '../IMG/RDR2V.png'
import Death from '../IMG/DeathStrandingV.png'
import Dark from '../IMG/DarkSV.png'
import Cyber from '../IMG/CyberV.png'



const Jogos = () => {
  return (

    <div>

        <h1 className='text-center text-3xl 2xl:text-[50px] font-bold'> Jogos </h1>

        <div className='lg:flex justify-center items-center gap-10'>

            <div className='flex gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={RDR2V}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>Red Dead 2</p>
                    <p className='lg:text-[17px] font-bold'>R$:35,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>
                </div>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={Death}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>Death stranding</p>
                    <p className='lg:text-[17px] font-bold'>R$:25,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>
                </div>


            </div>

            <div className='flex gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={Dark}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>Dark Souls 3</p>
                    <p className='lg:text-[17px] font-bold'>R$:35,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>
                </div>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={Cyber}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>CyberPunk 2077</p>
                    <p className='lg:text-[17px] font-bold'>R$:30,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>
                </div>


            </div>

        </div>

{/*Linha 2 */}

        <div>

            <div>


            </div>

            <div>


            </div>

        </div>
        
{/*Linha 3 */}
        
      
    </div>
  )
}

export default Jogos
