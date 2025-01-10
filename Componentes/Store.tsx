import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import Form from './Form';


const Store = () => {
  return (

    <div>
      
      <h1 className='text-center text-3xl 2xl:text-[50px] font-bold'>Contato</h1>
    
    
          <div className='flex flex-col lg:flex-row justify-center items-center mt-5 pt-5 lg:gap-[150px] 2xl:gap-[250px]'>

              <div className='lg:mb-36 mb-8'>

                      

                <div className='py-3 lg:mt-8'>

                      <div className='flex gap-3'>

                            <FaPhone className='text-[28px] 2xl:text-[38px] text-[#F75922]' />
                            <h2 className='text-[18px] 2xl:text-[28px] font-bold'>Fone: (19)99195-5915</h2>

                      </div>

                      <div className='flex py-3 gap-3'>

                            <IoIosMail className='text-[28px] 2xl:text-[38px] text-[#F75922]' />    
                            <h2 className='text-[18px] 2xl:text-[28px] font-bold'>Email: peterson_fernando16@hotmail.com</h2>

                      </div>


                </div>
                      
                      <h1 className='text-[18px] font-bold lg:pl-[41px] 2xl:text-[28px]'>Jogos Apartir de R$:20,00 Reais!</h1>

                      <h1 className='text-[18px] font-bold lg:pl-[41px] 2xl:text-[28px]'>Trabalhamos com mídia parental XBOX.</h1>

                      <h2 className='text-[18px] font-bold lg:pl-[41px] 2xl:text-[28px]'>Preenche o formulario ou entre em contato conosco</h2>

              </div>

              <div >

                <Form />
              
              </div>     
          
          
          </div>

    </div>

  )
}

export default Store
