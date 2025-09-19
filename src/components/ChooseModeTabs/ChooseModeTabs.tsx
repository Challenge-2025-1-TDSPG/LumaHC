import BtnAcao from '@/components/Button/BtnAcao';
import { useTabs } from '@/hooks/useTabs';
import type { Modo } from '@/types/tabs';

type ChooseModeTabsProps = {
  app: React.ReactNode; // conteúdo do painel "App"
  nav: React.ReactNode; // conteúdo do painel "Navegador"
  labelApp?: string; // rótulo do botão App
  labelNav?: string; // rótulo do botão Navegador
  defaultMode?: Modo; // modo inicial (default: 'app')
  idBase?: string; // base para ids/aria (default: 'modo')
  className?: string; // classes extras no wrapper
  unmountInactive?: boolean; // se true, desmonta o painel inativo
};

/**
 * Componente de abas para escolha entre App e Navegador
 * Sistema completo de tabs com acessibilidade (WAI-ARIA)
 * Suporta navegação por teclado e controle de foco
 * Usado nas páginas de tutorial para alternar entre modos
 */
export default function ChooseModeTabs({
  app,
  nav,
  labelApp = 'Use App',
  labelNav = 'Use Browser',
  defaultMode = 'app',
  idBase = 'mode',
  className,
  unmountInactive = false,
}: ChooseModeTabsProps) {
  // Hook customizado para controle das tabs (acessibilidade e navegação)
  const {
    setActiveTab, // Função para trocar a tab ativa
    listRef, // Ref para o container da lista de tabs
    tabId, // Função utilitária para gerar id da tab
    panelId, // Função utilitária para gerar id do painel
    isActive, // Função para verificar se a tab está ativa
    onKeyDown, // Handler para navegação por teclado
  } = useTabs({ defaultMode, idBase });

  return (
    <div className={className}>
      <div
        ref={listRef}
        role='tablist'
        aria-label='Escolha como quer cadastrar'
        onKeyDown={onKeyDown}
        className='flex flex-wrap justify-center gap-3'
      >
        {/* Botão da tab App */}
        <BtnAcao
          variant='primary'
          role='tab'
          id={tabId('app')}
          aria-selected={isActive('app')}
          aria-controls={panelId('app')}
          tabIndex={isActive('app') ? 0 : -1}
          onClick={() => setActiveTab('app')}
          className={`rounded-xl border border-borderColor ${
            isActive('app')
              ? 'bg-backBtn text-white hover:bg-hoverBtn'
              : 'bg-navBtn text-fontTertiary hover:bg-navHoverBtn hover:text-white'
          }`}
        >
          {labelApp}
        </BtnAcao>

        {/* Botão da tab Navegador */}
        <BtnAcao
          variant='primary'
          role='tab'
          id={tabId('nav')}
          aria-selected={isActive('nav')}
          aria-controls={panelId('nav')}
          tabIndex={isActive('nav') ? 0 : -1}
          onClick={() => setActiveTab('nav')}
          className={`rounded-xl border border-borderColor ${
            isActive('nav')
              ? 'bg-backBtn text-white hover:bg-hoverBtn'
              : 'bg-navBtn text-fontTertiary hover:bg-navHoverBtn hover:text-white'
          }`}
        >
          {labelNav}
        </BtnAcao>
      </div>

      {unmountInactive ? (
        <>
          {isActive('app') && (
            <section
              id={panelId('app')}
              role='tabpanel'
              aria-labelledby={tabId('app')}
              className='w-full mt-2'
            >
              {app}
            </section>
          )}
          {isActive('nav') && (
            <section
              id={panelId('nav')}
              role='tabpanel'
              aria-labelledby={tabId('nav')}
              className='w-full mt-2'
            >
              {nav}
            </section>
          )}
        </>
      ) : (
        <>
          <section
            id={panelId('app')}
            role='tabpanel'
            aria-labelledby={tabId('app')}
            hidden={!isActive('app')}
            className='w-full mt-2'
          >
            {app}
          </section>

          <section
            id={panelId('nav')}
            role='tabpanel'
            aria-labelledby={tabId('nav')}
            hidden={!isActive('nav')}
            className='w-full mt-2'
          >
            {nav}
          </section>
        </>
      )}
    </div>
  );
}
