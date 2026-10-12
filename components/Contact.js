import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="kontak" className="section section--dark">
      <div className="wrap">
        <h2>Kontak</h2>
        <p className="lead">
          Terbuka untuk kesempatan magang, kerja penuh waktu, atau proyek kolaborasi. Kirim email, saya balas secepatnya.
        </p>
        <p>
          <a className="contact__mail" href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <ul className="contact__links">
          <li><a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
        </ul>
      </div>
    </section>
  );
}
