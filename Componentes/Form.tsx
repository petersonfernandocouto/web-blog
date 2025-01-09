import React from 'react'


const Form = () => {


  return (

    <div className='bg-[#000E29] flex flex-col justify-center rounded-[20px] lg:w-[500px] w-[80%] lg:h-[450px]'>
      
        <h1 className='text-[28px] text-center font-bold pt-14 pb-7'>Qual Jogo Busca?</h1>


        <form className='flex flex-col gap-4 items-center'>

                <input
                    id="name"
                    typeof="text"
                    placeholder="Seu nome"
                    className="bg-white w-[90%] lg:h-[40px] rounded-[10px] lg:p-4"
                />

                <input
                    id="Jogo"
                    typeof="text"
                    placeholder="Jogos (EX:Red Dead 2)"
                    className="bg-white w-[90%] lg:h-[40px] rounded-[10px] lg:p-4"
                />

                <input
                    id="Mensagem"
                    typeof="text"
                    placeholder="Mensagem"
                    className="bg-white w-[90%] lg:h-[40px] rounded-[10px] lg:p-4"
                />

                
                <button className='bg-[#F75922] lg:my-3 lg:hover:-translate-y-2 transition-transform duration-700 hover:text-[#000E29] font-bold w-[90%] lg:h-[50px] rounded-[10px] '>Enviar</button>

            <br />

        </form>
        


    </div>


  )
}

export default Form
