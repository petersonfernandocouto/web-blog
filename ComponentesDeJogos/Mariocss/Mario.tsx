import React from 'react'
import Image from 'next/image';
import IMGMario from '../../IMG/Super Mario Bros O Filme.png'

import MarioWord from '../../IMG/SuperMarioWorld.jpg'
import Mario64 from '../../IMG/mario64.jpg'
import MarioOdyssey from '../../IMG/supermarioodyssey.jpg'


function Mario() {

  
  return (
    <div>

        <Image 
                 src={IMGMario}
                 alt='IMG'
                 className='w-[100%] lg:h-[430px]'
         />
      

        <div className='bg-[#000E29] pb-20'>

                <h1 className='text-center text-3xl font-bold pt-10'>Super Mario</h1>

                  <p className='text-center font-bold mt-10 w-[90%] lg:w-[70%] mx-auto'>

                    Lançado em 13 de setembro de 1985 para o Nintendo Entertainment System (NES), Super Mario Bros. é um dos jogos mais icônicos da história dos videogames. Desenvolvido pela Nintendo, com a direção de Shigeru Miyamoto, o jogo apresentou ao mundo o encanador Mario e seu irmão Luigi, em uma jornada para resgatar a Princesa Peach das garras do vilão Bowser.

                    O jogo revolucionou o gênero de plataforma com sua jogabilidade fluida, design de fases inovador e uma trilha sonora memorável composta por Koji Kondo. Seu impacto foi tão grande que ajudou a revitalizar a indústria dos videogames após a crise de 1983, estabelecendo a Nintendo como uma gigante do setor.

                    Ao longo dos anos, Super Mario Bros. gerou inúmeras sequências e variações, consolidando Mario como o mascote oficial da Nintendo e uma das figuras mais reconhecidas do mundo dos games. Mesmo décadas depois, o jogo continua sendo referência e é celebrado por fãs e desenvolvedores como um marco na história dos videogames.

                  </p>


        </div>

        <div className='mt-10'> 

          <h1 className='text-center text-3xl font-bold pt-10'>Os Mais Populares</h1>

            <div className='lg:flex gap-4 p-10'>  

                  <div className='flex flex-col items-center'>

                    <Image 
                        src={MarioWord} 
                        alt='ERROR' 
                        className='rounded-3xl w-[450px] lg:w-[360px] lg:h-[250px]'
                    />

                    <h1 className='text-xl font-bold my-4'>Super Mario Word</h1>    

                    <p className='text-[17px] font-bold lg:text-[15px] text-center lg:w-[80%]'>Super Mario World foi lançado em 21 de novembro de 1990 para o Super Nintendo Entertainment System (SNES). O jogo trouxe gráficos aprimorados, novas mecânicas e a estreia do icônico Yoshi, expandindo ainda mais o universo de Mario. Com 96 fases secretas e uma jogabilidade fluida.</p>


                  </div>

                  <div className='flex flex-col items-center pt-10 lg:pt-0'>

                    <Image 
                        src={Mario64} 
                        alt='ERROR' 
                        className='rounded-3xl w-[450px] lg:w-[360px] lg:h-[250px]'
                    />

                    <h1 className='text-xl font-bold my-4'>Super Mario 64</h1>    

                    <p className='text-[17px] font-bold lg:text-[15px] text-center lg:w-[80%]'>Super Mario 64 foi lançado em 23 de junho de 1996 para o Nintendo 64. O jogo revolucionou os games 3D com sua jogabilidade livre, trazendo Mario para um mundo aberto com exploração inovadora e desafios únicos no Castelo da Peach.</p>


                  </div>

                  <div className='flex flex-col items-center pt-10 lg:pt-0'>

                    <Image 
                        src={MarioOdyssey} 
                        alt='ERROR' 
                        className='rounded-3xl w-[450px] lg:w-[360px] lg:h-[250px]'
                    />

                    <h1 className='text-xl font-bold my-4'>Super Mario Word</h1>    

                    <p className='text-[17px] font-bold lg:text-[15px] text-center lg:w-[80%]'>Super Mario Odyssey foi lançado em 27 de outubro de 2017 para o Nintendo Switch. O jogo trouxe mundos vastos e exploráveis, mecânicas inovadoras com Cappy e uma jogabilidade criativa, tornando-se um dos títulos mais aclamados da série.</p>


                  </div>
                

            </div>
        </div>
    
    
    </div>

  )
}

export default Mario
