import AcessoCard from "../../../components/Cards/AcessoCard";
import { HOME_CARDS } from "../homeCards";

export default function AcessosSection() {
  return (
    <section className="acessos">
      {HOME_CARDS.map((c) => (
        <AcessoCard
          key={c.href}
          imgSrc={c.imgSrc}
          imgAlt={c.imgAlt}
          title={c.title}
          description={c.description}
          href={c.href}
        />
      ))}
    </section>
  );
}
