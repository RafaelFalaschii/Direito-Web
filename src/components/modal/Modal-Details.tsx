import type { Description } from './Modal-description';

type ModalProps = {
  description: Description;
  onClose: () => void;
};

export default function ModalEquipe({ description, onClose }: ModalProps) {
  return (
    <section  className="fixed inset-0 bg-black  opacity-95 flex items-center justify-center z-50">
      <div className="relative bg-white p-4  rounded shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl ">
        <article className="flex flex-col  gap-2 items-center text-gray-700 text-justify ">
            <button
              onClick={onClose}
              className="absolute top-2 right-4 text-2xl font-bold text-gray-600 hover:text-black cursor-pointer"
            >
              &times;
            </button>
          
            <img
              src={description.image}
              alt={description.name}
               className="max-w-40 max-h-40 object-cover rounded"
            />
            
            <h2 className="text-2xl font-bold">{description.name}</h2>
              <p className="text-sm">{description.oab}</p>
              <p className="font-bold ">{description.area}</p>
            <p className="mt-3  whitespace-pre-line">{description.description}
            </p>
          </article>
        </div>
    </section>
  );
}