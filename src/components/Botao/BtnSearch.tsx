type BtnSearchProps = {
  onClick?: () => void;
};

export default function BtnSearch({ onClick }: BtnSearchProps) {
  return (
    <button
      onClick={onClick}
      className="p-2 rounded hover:bg-white/10 text-white"
      aria-label="Abrir pesquisa"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg" width="24" height="24"
        viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="w-6 h-6"
      >
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    </button>
  );
}

