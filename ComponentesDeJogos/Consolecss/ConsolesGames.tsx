import React from 'react'

import Image from 'next/image';
import ConsoleXBOXxPlay from '../../IMG/XBOXxPLAY.jpg'
import Xbox from '../../IMG/Xbox.jpg'


const ConsolesGames = () => {


  return (


    <div>

        <Image 
                 src={ConsoleXBOXxPlay}
                 alt='IMG'
                 className='w-[100%] lg:h-[430px]'
         />



         <div className='mt-10'>  


            <div className='flex'>

                    <h1 className='text-[17px] font-bold my-4 text-center'>
                        O Xbox é a linha de consoles de videogame da Microsoft, lançada para competir no mercado de jogos eletrônicos. O primeiro console, Xbox, foi lançado em 15 de novembro de 2001, trazendo inovações como gráficos avançados e suporte online com o serviço Xbox Live. Seu jogo mais marcante foi Halo: Combat Evolved, que se tornou um grande sucesso e ajudou a popularizar o console.

                        Desde então, a Microsoft lançou diversas gerações, como Xbox 360 (2005), Xbox One (2013) e Xbox Series X/S (2020), cada uma trazendo melhorias significativas em hardware, serviços e catálogo de jogos. Entre os principais títulos exclusivos da marca estão Halo, Gears of War, Forza Horizon, Fable e The Elder Scrolls III: Morrowind.
                    </h1>

                    <Image 
                            src={Xbox}
                            alt='IMG'
                            className='rounded-3xl w-[450px] lg:w-[800px] lg:h-[320px]'
                    />

            </div>








         </div>
      
    </div>


  )

}

export default ConsolesGames
