export type Contato = {
  title: string;
  presencial?: string;
  email?: string;
  tel?: string;
  funcionamento?: string;
  linkExterno?: { href: string; rotulo: string };
};
