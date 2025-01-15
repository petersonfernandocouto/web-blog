import React from 'react'
import RDR2 from '../IMG/Redeadimg.jpg'
import FIFA25 from '../IMG/EAFC25.jpg'
import Harry from '../IMG/hogwartslegacy.jpg'
import Koji from '../IMG/deathstranding.jpg'
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import Link from "next/link";


const JogoEPreco = () => {

    const { ref: residentialRef, inView: residentialInView } = useInView({triggerOnce: true,});
    const { ref: commercialRef, inView: commercialInView } = useInView({triggerOnce: true,});
    const { ref: deepRef, inView: deepInView } = useInView({ triggerOnce: true });
    const { ref: WindowCleRef, inView: WindowCleInView } = useInView({triggerOnce: true,});


  return (


    <div className='bg-[#000E29]'>
    

            <div className="flex flex-col justify-around items-center w-full  bg-cover lg:pt-10 pb-20">

            

                    <div className="flex flex-col items-center w-full  mt-10 mb-10 lg:mb-0 ">

                        <h1 className="text-center text-3xl 2xl:text-[50px] font-bold ">
                            Recomendações
                        </h1>

                    </div>

                    <div className="flex flex-col gap-4 ">

                        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
                                <div
                                        ref={residentialRef}
                                        className={`flex flex-col text-white lg:w-[500px] transition-all duration-1000  ${
                                        residentialInView
                                            ? "opacity-100 translate-x-0"
                                            : "opacity-0 -translate-x-full"
                                        } `}
                                    >
                                        <Image
                                        className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px] "
                                        src={Harry}
                                        width={0}
                                        height={0}
                                        quality={100}
                                        alt="hero-img"
                                        />
                                        <div className="flex flex-col items-start px-4 pt-5 lg:px-0">
                                            <h3 className="text-xl font-bold">Hogwarts Legacy</h3>
                                            <p className="text-[17px] lg:text-lg">
                                            Apartir de R$:25,00 
                                            </p>

                                            <p className="text-[15px] lg:text-lg pt-3">Um jogo de ação e RPG ambientado no universo mágico de Harry Potter, mas situado no final do século XIX, muito antes dos eventos dos livros e filmes. Nele, você assume o papel de um aluno recém-chegado a Hogwarts com habilidades mágicas únicas, permitindo que você explore a escola, participe de aulas, faça amigos e enfrente forças das trevas.</p>
                                        </div>
                                </div>

                            <div
                                    ref={commercialRef}
                                    className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                                    commercialInView
                                        ? "opacity-100 translate-x-0"
                                        : "opacity-0 -translate-x-full"
                                    }`}
                                    style={{ transitionDelay: commercialInView ? "1s" : "0s" }} // nesta linha eu manipulo o delay. a div irá aparecer após 1 segundo em relação a div que vem antes
                                >
                                    <Image
                                    className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
                                    src={FIFA25}
                                    width={0}
                                    height={0}
                                    quality={100}
                                    alt="hero-img"
                                    />
                                    <div className="flex flex-col items-start px-4 pt-5 lg:px-0">
                                            <h3 className="text-xl font-bold">EA Sports FC 25</h3>
                                                <p className="text-[17px] lg:text-lg">
                                                Apartir de R$:35,00 
                                                </p>

                                            <p className="text-[15px] lg:text-lg pt-3">O jogo traz uma experiência realista de futebol, com gráficos aprimorados, jogabilidade refinada e atualizações nas mecânicas de passe, drible e finalização. Os jogadores podem controlar seus times favoritos em ligas e torneios ao redor do mundo, desfrutar de modos como Carreira, Ultimate Team e Pro Clubs.</p>
                                    </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-10 lg:flex-row px-4 lg:gap-20 2xl:gap-40 lg:mt-12">
                        <div
                            ref={deepRef}
                            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                            deepInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-full"
                            }`}
                            style={{ transitionDelay: deepInView ? "1s" : "0s" }}
                        >
                            <Image
                            className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
                            src={RDR2}
                            width={0}
                            height={0}
                            quality={100}
                            alt="hero-img"
                            />
                            <div className="flex flex-col items-start px-4 pt-5 lg:px-0">

                                 <h3 className="text-xl font-bold">Red Dead Redemption 2</h3>
                                     <p className="text-[17px] lg:text-lg">
                                            Apartir de R$:35,00 
                                     </p>

                                    <p className="text-[15px] lg:text-lg pt-3">Você assume o papel de Arthur Morgan, um fora-da-lei membro da gangue Van der Linde, enquanto enfrenta forças da lei, rivais de gangue e os desafios de sobreviver em um mundo em mudança. Com um vasto mundo aberto, o jogo oferece exploração detalhada, missões envolventes, interações profundas com personagens e uma narrativa emocional.</p>
                            </div>
                        </div>

                        <div
                            ref={WindowCleRef}
                            className={`flex flex-col items-center text-white lg:w-[500px] transition-all duration-1000  ${
                            WindowCleInView
                                ? "opacity-100 translate-x-0"
                                : "opacity-0 -translate-x-full"
                            }`}
                            style={{ transitionDelay: WindowCleInView ? "1.5s" : "0s" }}
                        >
                            <Image
                            className="rounded-3xl w-[450px] lg:w-[560px] lg:h-[300px]"
                            src={Koji}
                            width={0}
                            height={0}
                            quality={100}
                            alt="hero-img"
                            />
                            <div className="flex flex-col items-start px-4 pt-5 lg:px-0">

                                    <h3 className="text-xl font-bold">Death Stranding</h3>
                                        <p className="text-[17px] lg:text-lg">
                                            Apartir de R$:25,00 
                                        </p>

                                    <p className="text-[15px] lg:text-lg pt-3">Sam Porter Bridges, um entregador encarregado de reconectar cidades isoladas em um mundo devastado por eventos sobrenaturais. O jogo combina exploração, entrega de cargas, construção de infraestruturas e combate contra entidades misteriosas, tudo enquanto você tenta restaurar a conexão entre os remanescentes da humanidade. Com uma narrativa única, visual deslumbrante e jogabilidade inovadora.</p>
                            </div>

                        </div>

                        </div>


                    </div>

            </div>

            <nav className='flex justify-center items-center'>
                <Link
                    className="bg-[#00143D] text-white rounded-[15px] px-6 py-3 text-center mb-7 font-bold lg:hover:-translate-y-2 transition-transform duration-700 lg:hover:bg-[#000E29] lg:hover:text-[#F75922]"
                    href="/"
                    >
                    Ver Mais
                </Link>


            </nav>

    </div>

    


  )
}

export default JogoEPreco
