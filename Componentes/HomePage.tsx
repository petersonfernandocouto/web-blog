import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Imagens para telas pequenas
import RedDead from '../IMG/Redeadimg.jpg';
import GTA from '../IMG/GTA.jpg';
import Cyber from '../IMG/CyberPunk.jpeg';
import DBZ from '../IMG/DBZ.jpg';
import Resident from '../IMG/Resident.jpg';

// Imagens para telas grandes
import GTAPC from '../IMG/GTA6PC.png';
import RedDeadPC from '../IMG/RedDeadpc.png';
import BCPC from '../IMG/CBPC.png';
import DBZPC from '../IMG/DBZPC.png';
import RESPC from '../IMG/RES4PC.png';

const HomePage = () => {
  // Define as imagens iniciais para telas pequenas
  const [images, setImages] = useState([GTA, RedDead, Cyber, DBZ, Resident]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  // Função que troca as imagens de acordo com o tamanho da tela
  useEffect(() => {
    const updateImages = () => {
      if (window.innerWidth >= 1024) {
        // Define imagens para telas lg
        setImages([GTAPC, RedDeadPC, BCPC, DBZPC, RESPC]);
      } else {
        // Define imagens para telas menores
        setImages([GTA, RedDead, Cyber, DBZ, Resident]);
      }
    };

    updateImages(); // Chama a função ao carregar o componente

    // Adiciona um event listener para monitorar mudanças no tamanho da tela
    window.addEventListener('resize', updateImages);
    return () => window.removeEventListener('resize', updateImages);
  }, []);

  // Função para trocar a imagem a cada 7 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true); // Inicia o fade-out
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) =>
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsFading(false); // Reseta para fade-in
      }, 500); // Tempo de fade-out
    }, 7000); // Troca a cada 7000ms (7 segundos)

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar
  }, [images.length]);

  return (
    <div className="relative">
      <a href="#">
        <Image
          src={images[currentImageIndex]}
          alt={`Image-${currentImageIndex}`}
          style={{ width: '100%', height: 'auto', maxHeight: '500px' }}
          className={`w-full h-auto max-h-[500px] object-cover transition-opacity duration-500 ease-in-out ${
            isFading ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </a>
    </div>
  );
};

export default HomePage;
