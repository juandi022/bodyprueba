import "./About.css";

export default function About() {
  return (
    <>
      <header className="hero-about">
        <p className="hero-label">Conoce nuestra historia</p>
        <h1>BodyPerfect Gym <span>Más que un gimnasio, una familia</span></h1>
      </header>

      <main>
        <section className="section" id="historia">
          <div className="section-header">
            <p className="label">Desde 2012</p>
            <h2>Nuestra Historia</h2>
            <p className="sub">De un sueño familiar a una realidad transformadora</p>
          </div>
          <div className="history">
            <div>
              <div className="img-frame">
                <img src="/img/imagengymfuera.jpg" alt="BodyPerfect Gym" />
              </div>
              <div className="stats">
                <div className="stat"><span className="stat-n">12+</span><span className="stat-l">Años</span></div>
                <div className="stat"><span className="stat-n">1000+</span><span className="stat-l">Miembros</span></div>
              </div>
            </div>
            <div className="timeline">
              <div className="t-row">
                <div className="t-dot"><i className="fas fa-calendar-alt" /></div>
                <div>
                  <h4>2012 — El comienzo</h4>
                  <p>BodyPerfect Gym inauguró el 15 de noviembre de 2012, marcando el inicio de un proyecto que cambiaría vidas.</p>
                  <p>Nacida de la necesidad de un espacio donde la disciplina fuera prioridad, se convirtió en referente fitness de la región.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark" id="mvv">
          <div className="section-header">
            <p className="label">Lo que nos define</p>
            <h2>Misión · Visión · Valores</h2>
            <p className="sub">Los pilares que nos impulsan cada día</p>
          </div>
          <div className="cards">
            {[
              { icon: "fa-bullseye", title: "Misión",  text: "Transformar la vida de cada persona que cruza nuestras puertas con entrenamiento accesible y de calidad." },
              { icon: "fa-eye",      title: "Visión",  text: "Ser el gimnasio líder de la región donde la disciplina y el crecimiento personal sean parte del día a día." },
              { icon: "fa-heart",    title: "Valores", text: "Principios sólidos que reflejan nuestro compromiso con cada miembro de la comunidad BodyPerfect." },
            ].map(({ icon, title, text }) => (
              <div className="card" key={title}>
                <div className="card-icon"><i className={`fas ${icon}`} /></div>
                <img src="/img/Imagen de WhatsApp 2025-12-04 a las 23.11.59_c81d1579.jpg" alt={title} className="card-img" />
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            ))}
          </div>
          <div className="declaration">
            <h3>Nuestro compromiso</h3>
            <p>Trabajamos para crear un ambiente donde la superación personal, el apoyo comunitario y la excelencia sean nuestra carta de presentación.</p>
            <div className="signature">
              <p>La Familia Aroca</p>
              <span>Fundadores de BodyPerfect Gym</span>
              <img src="/img/firma.jpg" alt="Firma" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}