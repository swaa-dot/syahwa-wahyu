"use client";

import { useId, useState } from "react";

const TABS = [
  { key: "situation", label: "Situation" },
  { key: "task", label: "Task" },
  { key: "action", label: "Action" },
  { key: "result", label: "Result" },
];

export default function StarTabs({ star }) {
  const [active, setActive] = useState("situation");
  const uid = useId();

  function onKeyDown(e) {
    const keys = TABS.map((t) => t.key);
    const i = keys.indexOf(active);
    let next = null;
    if (e.key === "ArrowRight") next = keys[(i + 1) % keys.length];
    if (e.key === "ArrowLeft") next = keys[(i - 1 + keys.length) % keys.length];
    if (e.key === "Home") next = keys[0];
    if (e.key === "End") next = keys[keys.length - 1];
    if (next) {
      e.preventDefault();
      setActive(next);
      document.getElementById(`${uid}-tab-${next}`)?.focus();
    }
  }

  return (
    <div className="star">
      <div role="tablist" aria-label="Penjelasan STAR" className="star__tabs" onKeyDown={onKeyDown}>
        {TABS.map((t) => (
          <button
            key={t.key}
            role="tab"
            type="button"
            id={`${uid}-tab-${t.key}`}
            aria-selected={active === t.key}
            aria-controls={`${uid}-panel-${t.key}`}
            tabIndex={active === t.key ? 0 : -1}
            className="star__tab"
            onClick={() => setActive(t.key)}
          >
            {t.label}
          </button>
        ))}
      </div>

      {TABS.map((t) => (
        <div
          key={t.key}
          role="tabpanel"
          id={`${uid}-panel-${t.key}`}
          aria-labelledby={`${uid}-tab-${t.key}`}
          hidden={active !== t.key}
          className="star__panel"
        >
          {Array.isArray(star[t.key]) ? (
            <ul>
              {star[t.key].map((line, i) => (
                <li key={i}>{line}</li>
              ))}
            </ul>
          ) : (
            <p>{star[t.key]}</p>
          )}
        </div>
      ))}
    </div>
  );
}
