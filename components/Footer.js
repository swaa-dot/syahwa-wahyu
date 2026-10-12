import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <p>&copy; {new Date().getFullYear()} {site.name}. Dibuat dengan Next.js.</p>
      </div>
    </footer>
  );
}
