import Services from '../assets/bg-services.png';
import Tecnologia from '../assets/bg-tecnologia.png';
import Consumidor from '../assets/bg-consumidor.png';
import Trabalhista from '../assets/bg-trabalhista.png';
import Comercial from '../assets/bg-comercial.png';
import Civil from '../assets/bg-civil.png';
import { FadeInOnScroll } from "../components/scroll/Scroll";

import { TbPrison } from "react-icons/tb";
import { RiComputerFill } from "react-icons/ri";
import { GiShoppingCart } from "react-icons/gi";
import { PiUserListBold } from "react-icons/pi";
import { RiUserCommunityFill } from "react-icons/ri";
import { MdFamilyRestroom } from "react-icons/md";



export default function Serviços(){
    return (
        
            <section className="h-auto  bg-cover bg-center" style={{ backgroundImage: `url(${Services})` }} id='serviços'>
                <FadeInOnScroll>
                    <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                        <h2 className='pt-4 text-gray-200 text-center font-bold text-2xl md:text-4xl'>
                            Áreas de atuação
                        </h2>
                        <p className='text-gray-200 text-center py-4'>
                            Nosso escritório atua em diversas áreas do Direito, oferecendo soluções jurídicas personalizadas para atender às necessidades dos nossos clientes. 
                            Abaixo, você pode conhecer melhor cada área de especialização e entender como podemos ajudar em diferentes situações legais.
                        </p>

                        <div className='grid grid-cols-1 grid-rows-1 gap-4 py-4 text-white font-bold md:grid-cols-2 lg:grid-cols-3 '>
                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Services})`}}>
                                <TbPrison className='text-9xl' aria-label="Ícone de Direito Penal" role='img'/>
                                <h3 className='text-xl'>Direito Penal</h3>
                            </article >

                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Tecnologia})`}}>
                            <RiComputerFill className='text-9xl' aria-label="Ícone de Direito da Tecnologia da Informação" role='img'/>
                                <h3 className='text-xl'>Direito da Tecnologia da Informação</h3>
                            </article>

                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Consumidor})`}}>
                                <GiShoppingCart className='text-9xl' aria-label="Ícone de Direito do Consumidor" role='img'/>
                                <h3 className='text-xl'>Direito do Consumidor</h3>
                            </article>

                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Trabalhista})`}}>
                                <PiUserListBold className='text-9xl' aria-label="Ícone de Direito Trabalhista" role='img'/>
                                <h3 className='text-xl'>Direito Trabalhista</h3>
                            </article>

                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Comercial})`}}>
                                <RiUserCommunityFill className='text-9xl' aria-label="Ícone de Direito Comercial" role='img'/>
                                <h3 className='text-xl'>Direito Comercial</h3>
                            </article>

                            <article className='w-full min-h-96 flex flex-col items-center justify-center bg-cover bg-center' style={{ backgroundImage: `url(${Civil})`}}>
                                <MdFamilyRestroom className='text-9xl' aria-label="Ícone de Direito Civil" role='img'/>
                                <h3 className='text-xl'>Direito Civil</h3>
                            </article>
                        </div>
                    </div>
                </FadeInOnScroll>
            </section>
     
    )
}