"use client";

import { useState } from "react";

export default function Navbar({ name, links }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <a href="#top" className="brand">{name}</a>
        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-utama"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Tutup" : "Menu"}
        </button>
        <nav id="menu-utama" aria-label="Navigasi utama" className={`nav${open ? " is-open" : ""}`}>
          <ul>
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
