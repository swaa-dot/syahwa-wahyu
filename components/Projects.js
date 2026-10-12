import StarTabs from "./StarTabs";
import { projects } from "@/data/site";

export default function Projects() {
  return (
    <section id="proyek" className="section">
      <div className="wrap">
        <h2>Daftar proyek</h2>
        <p className="lead">
          Setiap proyek dijelaskan dengan pola STAR, jadi alurnya mudah diikuti saat wawancara.
        </p>

        <div className="projects">
          {projects.map((p) => (
            <article key={p.slug} className="project">
              <div className="project__meta">
                <h3>{p.title}</h3>
                <p className="project__status">{p.status}</p>
                <ul className="tags" aria-label="Teknologi">
                  {p.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
                {(p.links.live || p.links.repo) && (
                  <p className="project__links">
                    {p.links.live && <a href={p.links.live} rel="noopener noreferrer" target="_blank">Lihat situs</a>}
                    {p.links.repo && <a href={p.links.repo} rel="noopener noreferrer" target="_blank">Kode sumber</a>}
                  </p>
                )}
              </div>
              <div className="project__body">
                <p className="project__summary">{p.summary}</p>
                <StarTabs star={p.star} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
