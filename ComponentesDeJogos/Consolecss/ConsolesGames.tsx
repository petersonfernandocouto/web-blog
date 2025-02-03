import React from 'react';
import Image from 'next/image';
import ConsoleXBOXxPlay from '../../IMG/XBOXxPLAY.jpg';
import Xbox from '../../IMG/Xbox.jpg';
import Play from '../../IMG/PLAY.jpg'
import Nintendo from '../../IMG/nintendo.jpg'


const ConsolesGames = () => {
  return (
    <div>

      <Image src={ConsoleXBOXxPlay} alt="IMG" className="w-[100%] lg:h-[430px]" />

      <h1 className='text-center text-3xl font-bold pt-10 bg-[#472FA6] pb-10'>Games Mais Populares</h1>

      <div>

        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-6 bg-[#198519] p-10">

                
          <h1 className="text-[17px] font-bold  lg:w-[50%]">

          <h1 className='text-[20px] pb-4'>XBOX</h1>    

            O Xbox é a linha de consoles de videogame da Microsoft, lançada para competir no mercado de jogos eletrônicos. O primeiro console, Xbox, foi lançado em 15 de novembro de 2001, trazendo inovações como gráficos avançados e suporte online com o serviço Xbox Live. Seu jogo mais marcante foi Halo: Combat Evolved, que se tornou um grande sucesso e ajudou a popularizar o console.

            Desde então, a Microsoft lançou diversas gerações, como Xbox 360 (2005), Xbox One (2013) e Xbox Series X/S (2020), cada uma trazendo melhorias significativas em hardware, serviços e catálogo de jogos. Entre os principais títulos exclusivos da marca estão Halo, Gears of War, Forza Horizon, Fable e The Elder Scrolls III: Morrowind.

          </h1>

          <Image src={Xbox} alt="IMG" className="rounded-3xl w-[450px] lg:w-[600px] lg:h-[320px]" />

        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-6  bg-[#1b27a8] p-10">

        <Image src={Play} alt="IMG" className="rounded-3xl w-[450px] lg:w-[600px] lg:h-[320px]" />

          <h1 className="text-[17px] font-bold my-4 lg:w-[50%]">

          <h1 className='text-[20px] pb-4'>PLAYSTATION</h1>   

          O primeiro console, PlayStation, chegou em 3 de dezembro de 1994, trazendo gráficos em 3D avançados e jogos em CD, tornando-se um grande sucesso global. Seu título mais icônico foi Gran Turismo, que ajudou a consolidar a marca no setor.

          Desde então, a Sony lançou várias gerações, como PlayStation 2 (2000), PlayStation 3 (2006), PlayStation 4 (2013) e PlayStation 5 (2020), cada uma oferecendo melhorias significativas em hardware, serviços e catálogo de jogos. Entre os principais exclusivos estão God of War, Uncharted, The Last of Us, Spider-Man e Final Fantasy VII.

          </h1>

          
          
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center text-center gap-6 bg-[#a81b22] p-10">

          <h1 className="text-[17px] font-bold my-4 lg:w-[50%]">

          <h1 className='text-[20px] pb-4'>NINTENDO</h1>

          A Nintendo é uma das empresas mais influentes da indústria de videogames, conhecida por sua inovação e personagens icônicos. Seu primeiro console doméstico de grande sucesso foi o Nintendo Entertainment System (NES), lançado em 15 de julho de 1983, revolucionando o mercado com títulos como Super Mario Bros. e The Legend of Zelda.

          Desde então, a Nintendo lançou diversas gerações, como Super Nintendo (1990), Nintendo 64 (1996), Nintendo Wii (2006) e Nintendo Switch (2017), cada uma trazendo inovações marcantes. Entre os principais jogos exclusivos da empresa estão Super Mario, The Legend of Zelda, Pokémon, Metroid e Donkey Kong.
          </h1>

          <Image src={Nintendo} alt="IMG" className="rounded-3xl w-[450px] lg:w-[600px] lg:h-[320px]" />

        </div>

      </div>
    </div>
  );
};

export default ConsolesGames;
