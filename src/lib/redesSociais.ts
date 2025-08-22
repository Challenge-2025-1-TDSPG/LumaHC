import type { Membro } from '@/types/membro';
import type { RedeSocial } from '@/types/redeSocial';
import { GitHub, LinkedIn } from '../data/imagens';

export function mapearRedesDoMembro(m: Membro): RedeSocial[] {
  const socials: RedeSocial[] = [];
  if (m.linkedin) socials.push({ href: m.linkedin, icon: LinkedIn, alt: 'LinkedIn' });
  if (m.github) socials.push({ href: m.github, icon: GitHub, alt: 'GitHub' });
  return socials;
}
