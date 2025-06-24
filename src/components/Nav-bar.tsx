import Logo from '../assets/logo-advocacia.png';
import MenuMobile from '../components/MenuMobile/Menu'

export default function Nav(){
    return(
        <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
        <nav className="flex justify-between items-center">
            <figure>
                <a href="/home" className='max-w-24 flex items-center transition duration-300 hover:scale-110'>
                    <img src={Logo} alt="Ícone advocacia | Falaschi" className='m-w-full'/>
                    <h1 className='text-white text-sm font-bold'>Advocacia Falaschi</h1>
                </a>
            </figure>

            <ul className="hidden lg:flex lg:gap-10 text-white">
                <a href="#home" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>HOME</a>
                <a href="#sobre" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>SOBRE NÓS</a>
                <a href="#serviços" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>ATUAÇÃO</a>
                <a href="#equipe" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>EQUIPE</a>
                <a href="#blog" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>BLOG</a>
                <a href="#contato" className='transition duration-300 hover:scale-125 hover:text-[#c49c68]'>CONTATO</a>
            </ul>

                <a className='text-white text-xs cursor-pointer font-bold bg-[#c49c68] rounded-lg p-2 hidden transition duration-300 xl:block hover:bg-white hover:text-[#c49c68] hover:scale-105' href='#'>(44) 9 2121-3434</a>

                <MenuMobile />
            </nav>
        </div>
    )
}



