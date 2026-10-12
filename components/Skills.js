import { skills } from "@/data/site";

export default function Skills() {
  return (
    <section id="keahlian" className="section section--tint">
      <div className="wrap">
        <h2>Keahlian teknis</h2>
        <div className="skills">
          {skills.map((g) => (
            <div key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
