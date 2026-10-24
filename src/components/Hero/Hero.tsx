import './Hero.scss'

function Hero() {
  return (
    // INICIO: SECCIÓN PRINCIPAL
    <section className="hero" id="inicio" aria-labelledby="hero-title">

      {/* INICIO: VIDEO DE FONDO */}
      <video
        className="hero__video"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      >
        <source src="/videos/5.mp4" type="video/mp4" />
      </video>
      {/* FIN: VIDEO DE FONDO */}

      {/* INICIO: CAPA OSCURA SOBRE EL VIDEO */}
      <div className="hero__overlay" aria-hidden="true"></div>
      {/* FIN: CAPA OSCURA */}

      {/* INICIO: CONTENIDO DE TEXTO */}
      <div className="hero__content">

        <p className="hero__eyebrow">
          EL AUTÉNTICO SABOR DEL CARBÓN
        </p>

        <h1 className="hero__title" id="hero-title">
          EL FUEGO HACE
          <br />
          LA DIFERENCIA
        </h1>

        <p className="hero__description">
          Hamburguesas hechas al carbón, ingredientes frescos
          y un sabor que enciende tus sentidos.
        </p>

        {/* INICIO: BOTONES */}
        <div className="hero__actions">
          <a className="hero__button" href="#menu">
            Descubre nuestro menú
          </a>

          <a className="hero__link" href="#experiencia">
            Conoce nuestra experiencia
          </a>
        </div>
        {/* FIN: BOTONES */}

      </div>
      {/* FIN: CONTENIDO DE TEXTO */}

    </section>
    // FIN: SECCIÓN PRINCIPAL
  )
}

export default Hero