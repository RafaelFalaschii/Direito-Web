import BH from '../../assets/bg-headerpages.png'
import Nav from '../utils/Nav-pages';

type HeaderProps = {
  title: string;
};

export default function Header({ title }: HeaderProps){
    return(
        <header className="relative h-auto  bg-cover bg-center"  style={{ backgroundImage: `url(${BH})` }}>
            <div className="container m-auto p-2 max-w-md sm:max-w-screen-sm sm:px-4 md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl">
                <Nav />

                <main className='h-[30vh] flex flex-col gap-4 items-center justify-center text-white'>
                    <h2 className='font-bold text-5xl'>{title}</h2>
                    <a href="/home">/ Home /</a>
                </main>
            </div>
        </header>
    )
}