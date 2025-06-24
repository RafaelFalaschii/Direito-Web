import Foooter from '../assets/bg-footer.png';
import Logo from '../assets/logo-advocacia.png';
import { FadeInOnScroll } from "../components/scroll/Scroll";

import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoLogoFacebook, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";


export default function Footer(){
    return(
        <section className='h-auto bg-cover bg-center' style={{ backgroundImage: `url(${Foooter})` }} id='contato'>
            <FadeInOnScroll>
                <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                    

            <section className='flex flex-col items-center md:flex-row md:justify-around'>
                <div className='text-white'>
                    <h2 className='py-4 text-[#c49c68] font-bold'>Entre em contato conosco!</h2>

                    <address className='flex items-center gap-2'>
                        <FaLocationDot className='text-[#c49c68]' aria-label='Icone da Localização da Advocacia'/> 
                    localização: Umuarama-PR / CEP: 12345-678
                    </address>

                    <address className='flex items-center gap-2'>
                        <BsFillTelephoneFill className='text-[#c49c68]' aria-label='Icone do Telefone da Advocacia'/>
                        (44) 2121-3434
                    </address>
                
                    <address className='flex items-center gap-2'>
                        <IoLogoWhatsapp className='text-[#c49c68]' aria-label='Icone do whatssap da Advocacia'/>
                        (44) 9 3435-3637
                    </address>

                    <address className='flex items-center gap-2'>
                        <MdEmail  className='text-[#c49c68] ' aria-label='Icone do Email da Advocacia'/> 
                        advocaciafalaschi@gmail.com.br
                    </address>
                </div>
                
                <figure className='max-w-40 lg:max-w-56'>
                    <a href="#home" className='inline-block transition duration-500 hover:scale-110'>
                        <img src={Logo} alt="Ícone advocacia | Falaschi" className='w-full'/>
                    </a>
                </figure>

                <div>
                    <h4 className='py-4 text-[#c49c68] font-bold'>Sobre a empresa</h4>
                
                    <p className='text-white max-w-sm'>
                        Escritório de advocacia comprometido com a ética, 
                        transparência e excelência no atendimento. Atuamos com foco na defesa dos 
                        direitos dos nossos clientes, oferecendo soluções jurídicas eficazes.
                    </p>

                <ul className='flex gap-4 pt-2'>
                    <li className='text-[#c49c68] text-3xl border-2 rounded-lg border-white p-1 transition duration-700 cursor-pointer hover:bg-white hover:rounded-full'><IoLogoFacebook aria-label='Icone do Facebook da Advocacia'/></li>  
                    <li className='text-[#c49c68] text-3xl border-2 rounded-lg border-white p-1 transition duration-700 cursor-pointer hover:bg-white hover:rounded-full'><IoLogoInstagram aria-label='Icone do Instagram da Advocacia'/></li>  
                    <li className='text-[#c49c68] text-3xl border-2 rounded-lg border-white p-1 transition duration-700 cursor-pointer hover:bg-white hover:rounded-full'><IoLogoTwitter aria-label='Icone do Twitter da Advocacia'/></li> 
                    <li className='text-[#c49c68] text-3xl border-2 rounded-lg border-white p-1 transition duration-700 cursor-pointer hover:bg-white hover:rounded-full'><IoLogoLinkedin aria-label='Icone do Linkedin da Advocacia'/></li>    
                </ul>
                </div>
            </section>
        </div>
        </FadeInOnScroll>
            <p className='text-center text-gray-200 bg-neutral-800 font-bold'>© 2025 - Advocacia | Falaschi</p>
        </section>
        
            
     
    )
}