type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export function PageHero({ eyebrow, title, description, image }: PageHeroProps) {
  return (
    <section className="sub-hero">
      <div className="sub-hero-media" style={{ backgroundImage: `url("${image}")` }} />
      <div className="sub-hero-overlay" />
      <div className="container sub-hero-content">
        <p className="sub-hero-eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
