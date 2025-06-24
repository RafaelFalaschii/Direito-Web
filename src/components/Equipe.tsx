import Advogado1 from '../assets/advogado-1.jpg';
import Advogado2 from '../assets/advogado-2.jpg';
import Advogado3 from '../assets/advogado-3.jpg';
import Advogado4 from '../assets/advogado-4.jpg';

import { useState } from "react";
import BS from '../components/utils/Button';
import { FadeInOnScroll } from "../components/scroll/Scroll";
import ModalEquipe from "./modal/Modal-Details";
import { descriptions } from "./modal/Modal-description";

export default function Equipe(){
    const [selected, setSelected] = useState<number | null>(null);

    return(
     <FadeInOnScroll>
        <section id='equipe'>
            <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <h2 className="font-bold text-2xl text-gray-200 text-center py-4 md:text-4xl">
                    Conheça nossa equipe
                </h2>
                <p className="text-center text-gray-200 ">
                    Nossa equipe é formada por profissionais qualificados, comprometidos com a ética, a excelência e a busca por soluções jurídicas eficazes.
                     Atuamos de forma integrada para oferecer um atendimento personalizado, sempre focado nas necessidades dos nossos clientes.
                </p>

        <article className="pt-4 flex flex-col flex-wrap gap-2 justify-center items-center text-center text-gray-200 md:flex-row md:justify-around">
                <figure>
                        <img src={Advogado1} alt="Imagem do nosso Advogado" />

                        <figcaption className='p-4 transition-transform duration-300 hover:bg-red-900 hover:text-[#c49c68] hover:-translate-y-8 '>
                            <h3>Ricardo Monteiro</h3>
                            <p>OAB-GO 11111</p>
                            <p>Direito Penal</p>

                            <BS title='VER CURRÍCULO'  onClick={() => setSelected(0)} />
                        </figcaption>
                </figure>

                <figure>
                        <img src={Advogado2} alt="Imagem do nosso Advogado" />

                        <figcaption className='p-4 transition-transform duration-300 hover:bg-red-900 hover:text-[#c49c68] hover:-translate-y-8 '>
                            <h3>Fernando Almeida</h3>
                            <p>OAB-GO 22222</p>
                            <p>Direito do Consumidor </p>

                             <BS title='VER CURRÍCULO' onClick={() => setSelected(1)} />
                        </figcaption>
                </figure>

                <figure>
                        <img src={Advogado3} alt="Imagem da nossa Advogada" />

                        <figcaption className='p-4 transition-transform duration-300 hover:bg-red-900 hover:text-[#c49c68] hover:-translate-y-8 '>
                            <h3>Mariana Tavares</h3>
                            <p>OAB-GO 33333</p>
                            <p>Direito Civil</p>

                            <BS title='VER CURRÍCULO' onClick={() => setSelected(2)} />
                        </figcaption>
                </figure>

                <figure>
                        <img src={Advogado4} alt="Imagem do nosso Advogado" />

                        <figcaption className='p-4 transition-transform duration-300 hover:bg-red-900 hover:text-[#c49c68] hover:-translate-y-8 '>
                            <h3>Eduardo Vasconcelos</h3>
                            <p>OAB-GO 44444</p>
                            <p>Direito Trabalhista</p>

                            <BS title='VER CURRÍCULO' onClick={() => setSelected(3)} />
                        </figcaption>
                </figure>
                    
                {selected !== null && (
                    <ModalEquipe
                    description={descriptions[selected]}
                    onClose={() => setSelected(null)}
                />
                )};
            </article>
        </div>
    </section>
</FadeInOnScroll>
)
}