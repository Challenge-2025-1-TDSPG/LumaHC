import { Link } from 'react-router-dom';

type BtnInternoProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export default function BtnInterno({ to, children, className = '' }: BtnInternoProps) {
  return (
    <Link
      to={to}
      className={`bg-backBtn text-white px-4 py-2 rounded-md font-bold transition-colors duration-300 hover:bg-hoverBtn ${className}`}
    >
      {children}
    </Link>
  );
}
