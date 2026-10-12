import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap">
        <h1>{site.headline}</h1>
        <p className="hero__lead">{site.intro}</p>
        <div className="actions">
          <a className="btn btn--primary" href="#proyek">Lihat proyek</a>
          <a className="btn btn--ghost" href="#kontak">Hubungi saya</a>
        </div>
      </div>
    </section>
  );
}
