import { useEffect, useRef } from "react";

type SearchBoxProps = {
  open: boolean;
  value: string;
  onChange: (v: string) => void;
  onSubmit: () => void;
  onClose: () => void;
  className?: string; // permite passar "absolute right-0 top-full" etc.
};

export default function SearchBox({
  open, value, onChange, onSubmit, onClose, className = "",
}: SearchBoxProps) {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => { if (open) ref.current?.focus(); }, [open]);

  // ESC fecha
  useEffect(() => {
    const h = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);

  if (!open) return null;

  return (
    <form
      onSubmit={(e) => { e.preventDefault(); onSubmit(); }}
      role="search"
      aria-label="Pesquisar no menu"
      className={`flex items-center gap-2 bg-white/10 rounded-xl px-3 py-2 backdrop-blur-sm ${className}`}
    >
      <input
        ref={ref}
        type="search"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Pesquisar…"
        className="bg-transparent outline-none text-white placeholder-white/70 w-48"
      />
      <button type="button" onClick={onClose} aria-label="Fechar" className="text-white/80 hover:text-white">✕</button>
      <button type="submit" className="bg-white text-black rounded-lg px-3 py-1 text-sm font-medium hover:bg-white/90">
        Buscar
      </button>
    </form>
  );
}
