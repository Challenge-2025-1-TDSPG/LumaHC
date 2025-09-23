type BtnExternoProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  target?: '_blank' | '_self';
};

/**
 * Botão para links externos
 * Usado para navegação para fora da aplicação
 */
export default function BtnExterno({
  href,
  children,
  className = '',
  target = '_blank',
}: BtnExternoProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      className={`
        inline-flex items-center justify-center
        px-3 py-1.5
        text-sm sm:text-base
        bg-backBtn text-white font-bold rounded-md
        transition-colors duration-300 hover:bg-hoverBtn
        break-words whitespace-normal     /* <<< permite quebra de linha */
        ${className}
      `}
    >
      {children}
    </a>
  );
}
