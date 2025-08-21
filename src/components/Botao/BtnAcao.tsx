type BtnAcaoProps = {
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
};

export default function BtnAcao({
  onClick,
  children,
  className,
  type = 'button',
  disabled = false,
}: BtnAcaoProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-backBtn text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-hoverBtn disabled:opacity-50 ${className}`}
    >
      {children}
    </button>
  );
}
