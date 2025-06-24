import { Link } from 'react-router-dom';

type ButtonProps = {
  title: string;
  to?: string;
  href?: string;
  onClick?: () => void; 
};

export default function Button({ title, href, to, onClick }: ButtonProps) {
  const commonProps = {
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Botão de mais informações",
    onClick,
  };

  if (to) {
    return <Link className="relative mb-10 inline-block font-bold text-white cursor-pointer uppercase before:content-[''] before:absolute before:min-w-24 before:h-1 before:bg-[#c49c68] before:left-0 before:-bottom-1 hover:before:min-w-12 hover:before:duration-400 hover:text-[#c49c68] transition duration-300" to={to} {...commonProps}>{title}</Link>;
  }

  if (href) {
    return <a className="relative mb-10 inline-block font-bold text-white cursor-pointer uppercase before:content-[''] before:absolute before:min-w-24 before:h-1 before:bg-[#c49c68] before:left-0 before:-bottom-1 hover:before:min-w-12 hover:before:duration-400 hover:text-[#c49c68] transition duration-300" href={href} {...commonProps}>{title}</a>;
  }

  return <button className="relative mb-10 inline-block font-bold text-white cursor-pointer uppercase before:content-[''] before:absolute before:min-w-24 before:h-1 before:bg-[#c49c68] before:left-0 before:-bottom-1 hover:before:min-w-12 hover:before:duration-400 hover:text-[#c49c68] transition duration-300" onClick={onClick} aria-label="Botão de mais informações">{title}</button>;
}
    