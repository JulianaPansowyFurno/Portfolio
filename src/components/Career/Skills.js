import React, { useState } from "react";
import { skillGroups } from "./careerData";

export default function Skills() {
  const [active, setActive] = useState("Todas");
  return (
    <section className="career-skills" aria-labelledby="skills-heading">
      <div className="section-intro"><p className="career-eyebrow">MI CAJA DE HERRAMIENTAS</p><h2 id="skills-heading">Distintas herramientas.<br /><span>La misma curiosidad.</span></h2><p>Programación, datos y diseño: conocimientos que sigo conectando y ampliando.</p></div>
      <div className="career-filters no-print" role="group" aria-label="Filtrar habilidades">
        {["Todas", ...skillGroups.map(group => group.title)].map(label => <button key={label} type="button" aria-pressed={active === label} onClick={() => setActive(label)}>{label}</button>)}
      </div>
      <p className="visually-hidden" role="status">{active === "Todas" ? "Todas las categorías de habilidades" : `Habilidades de ${active}`}</p>
      <div className="skills-grid">
        {skillGroups.map(group => <article key={group.title} className={`skill-group ${active !== "Todas" && active !== group.title ? "filtered-out" : ""}`}>
          <span className="skill-number" aria-hidden="true">{group.icon}</span><h3>{group.title}</h3>
          <ul className="skill-tags">{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
        </article>)}
      </div>
    </section>
  );
}
