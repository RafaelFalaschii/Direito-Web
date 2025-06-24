import Bg from '../assets/sobre-nos-921.jpg';
import BS from './utils/Button';
import { FadeInOnScroll } from "../components/scroll/Scroll";

export default function About(){
    return(
        <section className='h-auto' id='sobre'>
             <FadeInOnScroll>
                <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    <article className="py-4 text-gray-200 md:flex md:justify-between md:items-center">
                        <div className='space-y-6 xl:max-w-xl'>
                            <h2 className="font-bold text-2xl md:text-4xl">
                                Conheça nosso escritorio de advocacia
                            </h2>
                            <p className='text-left'>
                                Atuamos com ética, excelência e estratégia para oferecer soluções jurídicas personalizadas. 
                                Nossa equipe é formada por profissionais qualificados, prontos para atender com transparência 
                                e foco nos melhores resultados.
                            </p>
                            
                            <BS title='SAIBA MAIS' href='/sobre'/>
                            
                        </div>

                        <figure className='relative max-w-md '>
                            <img src={Bg} alt="Conheça um pouco do nosso escritorio de advocacia" className='relative pl-4 pt-8 w-full z-[1]'/>
                            <div className="z-0 before:content-[''] before:absolute before:inset-0 before:border-8 before:max-w-72 before:max-h-64 before:border-[#c49c68]"></div>
                        </figure>
                    </article>
                </div>
            </FadeInOnScroll>
        </section>
    )
}