import React, { useRef, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FiArrowUpRight, FiPrinter, FiMail, FiMapPin, FiChevronDown } from "react-icons/fi";
import { journey } from "./careerData";
import Skills from "./Skills";
import "./career.css";

export default function Career() {
  const [filter, setFilter] = useState("Todo");
  const content = useRef(null);
  function printCV() {
    // Printing must include collapsed and filtered content, not just the current view.
    const details = [...content.current.querySelectorAll("details")];
    const previous = details.map(item => item.open);
    details.forEach(item => { item.open = true; });
    const restore = () => { details.forEach((item, index) => { item.open = previous[index]; }); };
    window.addEventListener("afterprint", restore, { once: true });
    window.print();
  }
  return (
    <main className="career-page" ref={content} id="main-content">
      <Container>
        <header className="career-header">
          <div><p className="career-eyebrow">UN POCO MÁS SOBRE MÍ</p><h1>Mi recorrido<span>.</span></h1><p className="career-lead">Aprender, crear y conectar ideas.</p><p className="career-summary">Soy Juliana Pansowy Furno, programadora y estudiante de Ingeniería en Sistemas de la Información. Me considero comprometida, creativa y con gran interés por el mundo de los sistemas. Disfruto trabajar en equipo y aportar ideas que sumen valor.</p>
          <p className="career-location"><FiMapPin aria-hidden="true" /> Buenos Aires, Argentina</p></div>
          <aside className="career-profile"><span className="career-eyebrow">PERFIL PROFESIONAL</span><h2>Tecnología con<br /><span>mirada creativa.</span></h2><p>Desarrollo de software<br />Diseño UX/UI<br />Inteligencia artificial aplicada</p><div className="career-actions no-print"><button className="career-button primary" onClick={printCV}><FiPrinter aria-hidden="true" /> Guardar CV en PDF</button><a className="career-button" href="mailto:julipansofurno@gmail.com"><FiMail aria-hidden="true" /> Contactar</a></div><small className="no-print">Elegí «Guardar como PDF» en la ventana de impresión.</small></aside>
        </header>
        <section className="journey-section" aria-labelledby="journey-heading">
          <div className="section-intro"><p className="career-eyebrow">EXPERIENCIA + FORMACIÓN</p><h2 id="journey-heading">El camino hasta acá<span>.</span></h2><p>Abrí cada etapa para conocer un poco más.</p></div>
          <div className="career-filters no-print" role="group" aria-label="Filtrar recorrido">
            {["Todo", "Experiencia", "Formación"].map(label => <button type="button" key={label} aria-pressed={filter === label} onClick={() => setFilter(label)}>{label}</button>)}
          </div>
          <div className="career-timeline">
            {journey.map((item, index) => <article key={item.id} className={`journey-item ${filter !== "Todo" && filter !== item.category ? "filtered-out" : ""}`}>
              <div className="journey-date"><span>{item.date}</span><span className="journey-category">{item.category}</span></div>
              <details open={index === 0}>
                <summary><div><h3>{item.title}</h3><p>{item.subtitle}</p></div><FiChevronDown className="journey-chevron" aria-hidden="true" /></summary>
                <ul>{item.items.map(text => <li key={text}>{text}</li>)}</ul>
                {item.id === "ort" && <Link className="career-text-link no-print" to="/creaciones">Explorar mis proyectos de ORT <FiArrowUpRight aria-hidden="true" /></Link>}
              </details>
            </article>)}
          </div>
        </section>
        <Skills />
        <section className="career-bottom" aria-label="Idiomas y forma de trabajar">
          <article><p className="career-eyebrow">IDIOMAS</p><h2>También nos podemos<br /><span>entender en…</span></h2><dl className="language-list"><div><dt>Castellano</dt><dd>Idioma de comunicación</dd></div><div><dt>Inglés</dt><dd>Nivel First Certificate</dd></div></dl></article>
          <article><p className="career-eyebrow">MÁS ALLÁ DEL CÓDIGO</p><h2>Lo que llevo<br /><span>a cada proyecto.</span></h2><ul className="skill-tags"><li>Compromiso</li><li>Creatividad</li><li>Trabajo en equipo</li><li>Aprendizaje constante</li></ul><p>Y cuando no estoy programando: viajar, mirar Netflix y compartir tiempo con mi familia y amigos.</p></article>
        </section>
        <section className="career-contact"><div><p className="career-eyebrow">SIGAMOS EN CONTACTO</p><h2>¿Creamos algo juntos?</h2><a href="mailto:julipansofurno@gmail.com">julipansofurno@gmail.com</a></div><div className="career-actions"><a className="career-button" href="https://www.linkedin.com/in/juliana-pansowy-furno-5538a12a1/" target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight aria-hidden="true" /></a><a className="career-button" href="https://github.com/JulianaPansowyFurno" target="_blank" rel="noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a></div></section>
      </Container>
    </main>
  );
}
