import Botao from "../Botao/Botao";

type AcessoCardProps = {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
  href: string;
};

export default function AcessoCard({ imgSrc, imgAlt, title, description, href }: AcessoCardProps) {
  return (
    <div className='        flex-1 basis-[300px] max-w-[300px]
        flex flex-col justify-between items-center
        bg-[#FDE6C6] rounded-xl p-4 text-center
        shadow-[0_2px_6px_rgba(0,0,0,0.05)]'>
      <div>
        <img src={imgSrc} alt={imgAlt} className="h-[50px] mx-auto mb-2.5" loading="lazy" />
      </div>
      <h3 className="text-lg text-fontPrimary mb-2 font-semibold">{title}</h3>
      <p  className="text-sm text-fontTertiary mb-3">{description}</p>
      <Botao href={href}>Acessar</Botao>
    </div>
  );
}

