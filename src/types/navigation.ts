export interface NavItem {
  label: string;
  href: string; //* aqui é a rota
  external?: boolean; //* true = link externo
}

export interface HomeCard extends NavItem {
  imgSrc: string;
  imgAlt: string;
  title: string;
  description: string;
}

export type CarouselOptions = {
  autoMs?: number;
  loop?: boolean;
}
