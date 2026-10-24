// ==========================================
// INICIO: IMPORTACIONES
// ==========================================
import './Footer.scss'
// FIN: IMPORTACIONES

// ==========================================
// INICIO: COMPONENTE FOOTER
// ==========================================
function Footer() {
  // INICIO: OBTENER AÑO ACTUAL
  const anioActual = new Date().getFullYear()
  // FIN: OBTENER AÑO ACTUAL

  return (
    // INICIO: PIE DE PÁGINA
    <footer className="footer">

      {/* INICIO: CONTENIDO PRINCIPAL */}
      <div className="footer__content">

        {/* INICIO: MARCA */}
        <div className="footer__brand">

          <a className="footer__logo" href="#inicio">
            <span aria-hidden="true">🔥</span>
            BLACK GRILL
          </a>

          <p className="footer__description">
            El auténtico sabor de las hamburguesas preparadas al carbón.
          </p>

        </div>
        {/* FIN: MARCA */}

        {/* INICIO: NAVEGACIÓN */}
        <nav className="footer__navigation" aria-label="Navegación del pie de página">

          <h2 className="footer__heading">
            Explora
          </h2>

          <a href="#inicio">Inicio</a>
          <a href="#menu">Nuestro menú</a>
          <a href="#experiencia">Nuestra experiencia</a>
          <a href="#contacto">Contacto</a>

        </nav>
        {/* FIN: NAVEGACIÓN */}

        {/* INICIO: CONTACTO */}
        <div className="footer__contact">

          <h2 className="footer__heading">
            Contáctanos
          </h2>

          <p>
            ¿Se te antojó una hamburguesa?
          </p>

          <a href="#contacto">
            Encuentra nuestra información
          </a>

        </div>
        {/* FIN: CONTACTO */}

      </div>
      {/* FIN: CONTENIDO PRINCIPAL */}

      {/* INICIO: BARRA INFERIOR */}
      <div className="footer__bottom">

        <p>
          © {anioActual} BLACK GRILL. Todos los derechos reservados.
        </p>

        <a href="#inicio">
          Volver arriba ↑
        </a>

      </div>
      {/* FIN: BARRA INFERIOR */}

    </footer>
    // FIN: PIE DE PÁGINA
  )
}
// FIN: COMPONENTE FOOTER

export default Footer