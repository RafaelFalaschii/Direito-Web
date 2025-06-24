import { useEffect, useRef, useState } from 'react';
import { TiThMenu } from 'react-icons/ti';
import { IoCloseSharp } from 'react-icons/io5';

export default function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <div className="lg:hidden relative z-50">
      <button
        onClick={toggleMenu}
        className="text-white text-3xl relative z-50 cursor-pointer"
      >
        {menuOpen ? <IoCloseSharp /> : <TiThMenu />}
      </button>

      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-40">
          <nav ref={menuRef} className="flex flex-col items-center gap-10 font-bold text-2xl text-gray-600">
            <a href="#home" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>HOME</a>
            <a href="#sobre" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>SOBRE NÓS</a>
            <a href="#servicos" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>ATUAÇÃO</a>
            <a href="#equipe" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>EQUIPE</a>
            <a href="#blog" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>BLOG</a>
            <a href="#contato" onClick={toggleMenu} className='hover:scale-110 hover:text-white transition'>CONTATO</a>
          </nav>
        </div>
      )}
    </div>
  );
}