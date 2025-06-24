import HP from  '../components/utils/Header-pages';
import Footer from '../layout/Footer';
import BA from '../assets/sobre-nos-921.jpg';

import { FadeInOnScroll } from "../components/scroll/Scroll";

export default function About(){
    return(
        <section>
            <HP title='Sobre nós' />
                <section>
                    <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">


                        <article className='py-4 flex flex-col items-center gap-10 text-gray-200 lg:flex-row lg:justify-between'>
                            <div className='space-y-4 text-justify font-light lg:max-w-lg'>
                                <h2 className="relative pt-20 sm:pt-25 text-2xl text-white font-bold before:content-['|||'] before:absolute before:left-3 before:bottom-23 before:text-6xl before:leading-none before:font-normal before:text-[#c49c68]">
                                    Conheça mais nosso escritório de advocacia
                                </h2>

                                <p>
                                    Com atuação pautada pela ética, excelência e comprometimento, 
                                    nosso escritório de advocacia oferece soluções jurídicas personalizadas 
                                    para pessoas físicas e empresas. Buscamos sempre compreender a fundo as necessidades 
                                    de cada cliente, fornecendo orientação clara, segura e eficaz em diversas áreas do Direito.
                                </p>

                                <p>
                                    Nossa equipe é formada por profissionais altamente qualificados, 
                                    preparados para atuar com seriedade e transparência, promovendo um atendimento 
                                    humanizado e próximo. Valorizamos a confiança depositada em nossos serviços e 
                                    trabalhamos com dedicação para assegurar os melhores resultados possíveis.
                                </p>

                                <p>
                                    Seja para prevenir litígios, mediar conflitos ou representar interesses no 
                                    Judiciário, estamos prontos para oferecer suporte jurídico completo e confiável.
                                </p>
                            </div>

                            <figure className='relative max-w-md '>      
                                <img src={BA} alt="Conheça um pouco do nosso escritorio de advocacia" className='relative pl-4 pt-8 w-full z-[1]'/>
                                <div className="z-0 before:content-[''] before:absolute before:inset-0 before:border-8 before:max-w-72 before:max-h-64 before:border-[#c49c68]"></div>
                            </figure>
                        </article>

                    <FadeInOnScroll>
                        <ul className='py-7 flex flex-col gap-10 text-center text-gray-200 font-light md:flex-row md:justify-around'>
                            <li className='max-w-full  md:max-w-sm'>
                                <h3 className='font-bold text-2xl text-white'>
                                    Nossa Missão
                                </h3>
                                <p>
                                    Atuar com excelência na prestação de serviços jurídicos, oferecendo 
                                    soluções seguras, eficazes e personalizadas para cada cliente.
                                </p>
                            </li>

                            
                            <li className='max-w-full  md:max-w-sm'>
                                <h3 className='font-bold text-2xl text-white'>
                                    Nossa Visão
                                </h3>
                                <p>
                                    Ser referência em advocacia pela confiança, qualidade e comprometimento, 
                                    tornando-se um escritório reconhecido pela atuação ética e pelos resultados 
                                    sólidos alcançados para nossos clientes. 
                                </p>
                            </li>

                            
                            <li className='max-w-full  md:max-w-sm '>
                                <h3 className='font-bold text-2xl text-white'>
                                    Nossos Valores
                                </h3>
                                <p>
                                    Ética, transparência, respeito ao cliente, responsabilidade social, comprometimento 
                                    com a verdade, excelência técnica, confidencialidade e constante busca por atualização.
                                </p>
                            </li>
                        </ul>
                    </FadeInOnScroll>
                    </div>
                </section>
            <Footer />
        </section>
    )
}