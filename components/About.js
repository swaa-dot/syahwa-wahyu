import { about } from "@/data/site";

export default function About() {
  return (
    <section id="tentang" className="section">
      <div className="wrap about">
        <div>
          <h2>Tentang saya</h2>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="prose">{p}</p>
          ))}
        </div>
        <dl className="facts">
          {about.facts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
