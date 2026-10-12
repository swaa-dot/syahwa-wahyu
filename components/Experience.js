import { experience, education } from "@/data/site";

function Timeline({ items }) {
  return (
    <ol className="timeline">
      {items.map((it, i) => (
        <li key={i}>
          <h4>{it.role}</h4>
          <p className="timeline__org">{it.org}</p>
          <p className="timeline__period">{it.period}</p>
          {it.points?.length > 0 && (
            <ul>
              {it.points.map((p, j) => (
                <li key={j}>{p}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ol>
  );
}

export default function Experience() {
  return (
    <section id="pengalaman" className="section">
      <div className="wrap">
        <h2>Pengalaman dan pendidikan</h2>
        <div className="exp">
          <div>
            <h3>Pengalaman</h3>
            <Timeline items={experience} />
          </div>
          <div>
            <h3>Pendidikan</h3>
            <Timeline items={education} />
          </div>
        </div>
      </div>
    </section>
  );
}
