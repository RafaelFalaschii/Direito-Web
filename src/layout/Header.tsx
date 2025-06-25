import Bg from '../assets/bg-advocacia.png';
import Nav from '../components/Nav-bar';


export default function Header() {
    return (
            <header className="relative  md:h-screen bg-cover bg-center"  style={{ backgroundImage: `url(${Bg})` }}id='home'>
                <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                   
                   <Nav />

                    <main className='relative flex flex-col gap-8 text-white h-[70vh] justify-center md:pl-14 md:max-w-xl lg:max-w-3xl'>
                        <h2 className='font-bold z-40  text-2xl md:text-4xl'>
                            Atuação jurídica completa com precisão e excelência.
                        </h2>
                        <p className='text-zinc-500 md:text-lg'>
                            Soluções estratégicas nas principais áreas do Direito, com foco técnico, ética e resultado.
                        </p>
                        
                        <div className="hidden z-0 md:block before:content-[''] before:absolute before:inset-0 before:border-8 before:rounded-lg before:max-w-80 before:max-h-[33rem] before:border-[#c49c68] before:top-2/12"></div>
                    </main>
                </div>
            </header>
 );  
}