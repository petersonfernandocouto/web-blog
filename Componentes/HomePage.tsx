import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import RedDead from '../IMG/Redeadimg.jpg';
import GTA from '../IMG/GTA.jpg';
import Cyber from '../IMG/CyberPunk.jpeg';
import DBZ from '../IMG/DBZ.jpg';
import Resident from '../IMG/Resident.jpg';


const HomePage = () => {
  // Array de imagens
  const images = [GTA, RedDead, Cyber, DBZ, Resident];

  // Estado para controlar o índice da imagem atual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false); // Controle para animação de fade

  // Função que altera a imagem a cada 7 segundos
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

    // Limpa o intervalo quando o componente é desmontado
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative">
      <a href="#">
        <Image
          src={images[currentImageIndex]} // Seleciona a imagem com base no índice
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
