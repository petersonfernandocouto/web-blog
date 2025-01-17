import React from 'react'
import Image from 'next/image';
import Banner from '../IMG/bool.png'

import RDR2V from '../IMG/RDR2V.png'
import Death from '../IMG/DeathStrandingV.png'
import Dark from '../IMG/DarkSV.png'
import Cyber from '../IMG/CyberV.png'

import EAFC25V from '../IMG/EAFC25V.png'
import NBAV from '../IMG/NBAV.png'
import UFC5V from '../IMG/UFC5V.png'
import WWE from '../IMG/WWEV.png'


const Jogos = () => {
  return (

    <div className='mb-10'>
        
        <Image
                  src={Banner}
                  alt={`error`}
                  style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
                  className={`w-full h-auto max-h-[500px] object-cover transition-opacity duration-500 ease-in-out`}
                />


        <h1 className='text-center text-3xl 2xl:text-[50px] font-bold'> Jogos </h1>

        <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

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

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
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

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>


            </div>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

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

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
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

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>


            </div>

        </div>

{/*Linha 2 */}

            <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={EAFC25V}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>EAFC 25</p>
                    <p className='lg:text-[17px] font-bold'>R$:35,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={NBAV}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>NBA2K</p>
                    <p className='lg:text-[17px] font-bold'>R$:25,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>


            </div>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={UFC5V}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>UFC 5</p>
                    <p className='lg:text-[17px] font-bold'>R$:35,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={WWE}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold'>WWE2K 2025</p>
                    <p className='lg:text-[17px] font-bold'>R$:30,00</p>
                    <p className='lg:text-[17px] font-bold'>Xbox one/ Series S/X</p>

                    <div className='flex justify-center items-center mt-5'>
                        <a href='#' target='_blank' rel='noopener noreferrer'>
                                <button className='bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center  font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]'>
                                    Comprar
                                </button>
                        </a>
                    </div>
                </div>


            </div>

            </div>
        
{/*Linha 3 */}








{/*Linha 4 */}
        
      
    </div>
  )
}

export default Jogos
