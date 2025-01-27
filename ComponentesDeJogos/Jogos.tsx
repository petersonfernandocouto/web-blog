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

import RES4 from '../IMG/RES4V.png'
import RES8 from '../IMG/RES8V.png'
import OutTri from '../IMG/OutTriV.png'
import Out2 from '../IMG/Out2V.png'

import DBZZERO from '../IMG/DBZZEROV.png'
import DBZKAKA from '../IMG/DBZKAKAV.png'
import Naruto from '../IMG/NarutoV.png'
import Sonic from '../IMG/SonicV.png'

import Alan from '../IMG/ALANV.png'
import Cup from '../IMG/Cuphead.png'
import GTAV from '../IMG/GTA5V.png'
import Harry from '../IMG/hogwartslegacyV.png'

const Jogos = () => {
  return (

    <div className='bg-[#00143D]'>
        
        <Image
                  src={Banner}
                  alt={`error`}
                  style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
                  className={`w-full h-auto max-h-[500px] object-cover transition-opacity duration-500 ease-in-out`}
                />


        <h1 className='text-center text-3xl 2xl:text-[50px] font-bold mt-10'> Mais Pedidos </h1>

        <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={RDR2V}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Red Dead 2</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>Death stranding</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 25,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>Dark Souls 3</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>CyberPunk 2077</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>EAFC 25</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>NBA2K</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 25,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>UFC 5</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                    <p className='lg:text-[22px] font-bold pl-2'>WWE2K 2025</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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

            <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={RES4}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Res Evil 4 remake</p>
                    <p className='lg:text-[17px] font-bold pl-2'> <span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox Series S/X</p>

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
                            src={RES8}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Res Evil 8</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={OutTri}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Outlast trials</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 25,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={Out2}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Outlast 2</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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







{/*Linha 4 */}


        <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={DBZZERO}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>DBZ Sparking Zero </p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox Series S/X</p>

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
                            src={DBZKAKA}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>DBZ KAKAROTO</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 25,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={Naruto}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Naruto storm</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={Sonic}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Sonic</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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



{/*Linha 5 */}

        <div className='lg:flex justify-center mx-6 lg:mx-0 items-center  lg:gap-10 lg:mt-10'>

            <div className='flex gap-4 mt-10 lg:mt-0 lg:gap-10'>

                <div className='flex flex-col bg-[#000E29] border-[4px] border-[#000E29] rounded-tl-[40px] rounded-tr-[40px]'>
                    <Image 
                            src={Alan}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Alan Wake 2</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'>A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox Series S/X</p>

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
                            src={Cup}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>CupHead</p>
                    <p className='lg:text-[17px] font-bold pl-2'> <span className='lg:text-[14px]'>A partir</span>  R$: 25,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={GTAV}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Gta V</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'> A partir</span> R$: 35,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox one/ Series S/X</p>

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
                            src={Harry}
                            alt='IMG'
                            style={{ width: 'auto', height: '250px', maxHeight: '500px' }}
                            className='mb-7 rounded-tl-[40px] rounded-tr-[40px] '
                    /> 
                    <p className='lg:text-[22px] font-bold pl-2'>Hogwarts Legacy</p>
                    <p className='lg:text-[17px] font-bold pl-2'><span className='lg:text-[14px]'> A partir</span> R$: 30,00</p>
                    <p className='lg:text-[17px] font-bold pl-2'>Xbox Series S/X</p>

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


{/*Linha 6 */}
        
      
    </div>
  )
}

export default Jogos
