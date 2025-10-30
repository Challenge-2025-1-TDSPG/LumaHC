import type { IconType } from 'react-icons';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface HomeCard extends NavItem {
  Icon: IconType;
  title: string;
  description: string;
}

export type CarouselOptions = {
  autoMs?: number;
  loop?: boolean;
};

export interface MainMenuProps {
  filter?: string;
}
