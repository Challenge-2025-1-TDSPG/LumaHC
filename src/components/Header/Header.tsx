import { useRef, useState } from "react";
import { logo } from "@/data/imagesData";
import MainMenu from "./MainMenu";
import BtnMenu from "../Botao/BtnMenu";
import BtnSearch from "../Botao/BtnSearch";
import SearchBox from "./SearchBox";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const menuRef = useRef<HTMLDivElement>(null);

  const submitSearch = () => {
    if (typeof window !== "undefined" && window.innerWidth < 1024 && !menuOpen) {
      setMenuOpen(true); // abre menu no mobile ao buscar
    }
    setTimeout(() => {
      menuRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);
  };

  return (
    // Header sempre por cima, com gradiente e espaçamento responsivo
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-fromColor to-toColor">
      <div className="mx-auto w-full max-w-screen-lg px-4 sm:px-5 lg:px-6">
        {/* Topo: flex estável e alturas responsivas */}
        <div className="flex items-center justify-between gap-3 h-14 sm:h-16 lg:h-20">
          {/* Logo (tamanhos válidos do Tailwind) */}
          <a className="shrink-0" href="/">
            <img
              src={logo}
              alt="Imagem da logo do LumaHC"
              className="h-10 w-auto sm:h-12 md:h-14 rounded-full p-[3px] select-none"
            />
          </a>

          {/* Ações mobile/tablet (somem no desktop) */}
          <div
            className="
              lg:hidden flex items-center gap-2 sm:gap-3
              pr-[env(safe-area-inset-right)]
            "
          >
            {/* Buscar */}
            <button
              type="button"
              aria-label="Buscar"
              aria-expanded={searchOpen}
              aria-controls="search-popover"
              onClick={() => setSearchOpen(v => !v)}
              className="
                inline-flex items-center justify-center
                h-10 w-10 sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <BtnSearch /> {/* ícone puro (sem <button> interno) */}
            </button>

            {/* Menu */}
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={menuOpen}
              aria-controls="primary-navigation"
              className="
                inline-flex items-center justify-center
                h-10 w-10 sm:h-10 sm:w-10 md:h-11 md:w-11"
            >
              <BtnMenu open={menuOpen} onClick={() => setMenuOpen(v => !v)} />
            </button>
          </div>
        </div>

        {/* Barra de busca – aparece no mobile/tablet quando abrir */}
        {searchOpen && (
          <div id="search-popover" className="mt-2">
            <SearchBox
              open
              value={query}
              onChange={setQuery}
              onSubmit={submitSearch}
              onClose={() => setSearchOpen(false)}
            />
          </div>
        )}

        {/* Menu: mobile (toggle) / desktop (sempre visível) */}
        <div
          id="primary-navigation"
          ref={menuRef}
          className={`mt-3 ${menuOpen ? "block" : "hidden"} lg:block`}
        >
          <MainMenu filter={query} />
        </div>
      </div>
    </header>
  );
}
