import Logo from '../../assets/logo-advocacia.png';

export default function Nav(){
    return(
        <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
            <nav className="flex justify-between items-center">
                <figure>
                    <a href="/home" className='max-w-24 flex items-center transition duration-300 hover:scale-110'>
                        <img src={Logo} alt="Ícone advocacia | Falaschi" className='m-w-full '/>
                        <h1 className='text-white text-sm font-bold'>Advocacia Falaschi</h1>
                    </a>
                </figure>

                <a className='text-white text-xs cursor-pointer font-bold bg-[#c49c68] rounded-lg p-2 transition duration-300 hover:bg-white hover:text-[#c49c68] hover:scale-105' href='#'>(44) 9 2121-3434</a>
            </nav>
        </div>
    )
}