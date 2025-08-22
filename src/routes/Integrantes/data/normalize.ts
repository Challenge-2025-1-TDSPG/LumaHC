import type { Membro } from './members';
import { GitHub, LinkedIn } from '../../../components/data/imagens';

export function getSocials(m: Membro) {
  const socials = [];
  if (m.linkedin) socials.push({ href: m.linkedin, icon: LinkedIn, alt: 'LinkedIn' });
  if (m.github) socials.push({ href: m.github, icon: GitHub, alt: 'GitHub' });
  return socials;
}
