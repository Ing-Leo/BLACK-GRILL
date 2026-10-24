// ==========================================
// INICIO: IMPORTACIONES
// ==========================================
import './Contact.scss'
// FIN: IMPORTACIONES

// ==========================================
// INICIO: COMPONENTE CONTACT
// ==========================================
function Contact() {
  return (
    // INICIO: SECCIÓN DE CONTACTO
    <section
      className="contact"
      id="contacto"
      aria-labelledby="contact-title"
    >

      {/* INICIO: ENCABEZADO */}
      <div className="contact__header">

        <p className="contact__eyebrow">
          ESTAMOS PARA ATENDERTE
        </p>

        <h2 className="contact__title" id="contact-title">
          ¿SE TE ANTOJÓ UNA HAMBURGUESA?
        </h2>

        <p className="contact__description">
          Ven a disfrutar el auténtico sabor del carbón.
          Nos encantará recibirte.
        </p>

      </div>
      {/* FIN: ENCABEZADO */}

      {/* INICIO: INFORMACIÓN DE CONTACTO */}
      <div className="contact__grid">

        {/* INICIO: TARJETA DE UBICACIÓN */}
        <article className="contact__card">

          
            📍<a className="contact__icon"
                  href="https://maps.app.goo.gl/t7mkt3KvkwEXxXXR8"
                  target='_blank'
                  rel="noopener noreferrer"
                  aria-label="Ver ubicación en Google Maps"
            ></a>
          

            {/* Título de la tarjeta */}
            <h3>Ubicación</h3>

            {/* Descripción */}
            <p>
              Encuéntranos y consulta cómo llegar a BLACK GRILL.
            </p>

            {/* Enlace visible para el cliente */}
            <a
              className="contact__note"
              href="https://maps.app.goo.gl/5729UNfLMaLQsReg8"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cómo llegar en Google Maps →
            </a>

        </article>
        {/* FIN: TARJETA DE UBICACIÓN */}

        {/* INICIO: TARJETA DE HORARIO */}
        <article className="contact__card">

          <span className="contact__icon" aria-hidden="true">
            🕒
          </span>

          <h3>Horario</h3>

          <p>
            Del 31 al 2 de Noviembre
          </p>

          <span className="contact__note">
            4:00 pm a 11:00pm
          </span>

        </article>
        {/* FIN: TARJETA DE HORARIO */}

        {/* INICIO: TARJETA DE CONTACTO */}
        <article className="contact__card">

          <span className="contact__icon" aria-hidden="true">
            📱
          </span>

          <h3>Contáctanos</h3>

          <p>
            Whatsapp
          </p>

          <span className="contact__note">
            553418-cincuenta y tres sesenta y dos
          </span>

        </article>
        {/* FIN: TARJETA DE CONTACTO */}

      </div>
      {/* FIN: INFORMACIÓN DE CONTACTO */}

    </section>
    // FIN: SECCIÓN DE CONTACTO
  )
}
// FIN: COMPONENTE CONTACT

export default Contact