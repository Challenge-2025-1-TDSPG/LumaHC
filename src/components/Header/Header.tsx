import { useState } from "react";
import { logo } from "@/data/imagesData";
import MainMenu from "./MainMenu";
import BtnMenu from "../Botao/BtnMenu";
import BtnSearch from "../Botao/BtnSearch";
import SearchBox from "./SerchBox";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const submitSearch = () => {
    if (!menuOpen) setMenuOpen(true); // garante ver o filtro no mobile
  };

  return (
    <header className="relative w-full bg-gradient-to-b from-fromColor to-toColor py-5 z-[2]">
      {/* Evita 'container' para não dar salto entre 641–767px */}
      <nav className="mx-auto max-w-screen-lg w-full px-4">
        {/* Linha do topo */}
        <div className="flex items-center w-full">
          {/* Logo à esquerda */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={logo}
              alt="Imagem da logo do Lumahc"
              className="w-20 h-20 rounded-full p-[3px]"
            />
          </div>

          {/* Ícones à direita (até 1023px) */}
          <div className="lg:hidden shrink-0 flex items-center gap-2">
            <BtnSearch onClick={() => setSearchOpen(v => !v)} />
            <BtnMenu open={menuOpen} onClick={() => setMenuOpen(v => !v)} />
          </div>
        </div>

        {/* SearchBox abaixo do topo (não quebra layout) */}
        {searchOpen && (
          <div className="mt-2">
            <SearchBox
              open={true}
              value={query}
              onChange={setQuery}
              onSubmit={submitSearch}
              onClose={() => setSearchOpen(false)}
            />
          </div>
        )}

        {/* Menu principal: empilhado e 100% largura; abre/fecha no mobile */}
        <div className={`mt-3 ${menuOpen ? "block" : "hidden"} lg:block`}>
          <MainMenu /* filter={query} se quiser filtrar labels */ />
        </div>
      </nav>
    </header>
  );
}
