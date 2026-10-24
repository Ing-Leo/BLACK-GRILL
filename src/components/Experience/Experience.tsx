// ==========================================
// INICIO: IMPORTACIONES
// ==========================================
import './Experience.scss'
// FIN: IMPORTACIONES

// ==========================================
// INICIO: COMPONENTE EXPERIENCE
// ==========================================
function Experience() {
  return (
    // INICIO: SECCIÓN DE EXPERIENCIA
    <section
      className="experience"
      id="experiencia"
      aria-labelledby="experience-title"
    >

      {/* INICIO: CONTENIDO */}
      <div className="experience__content">

        <p className="experience__eyebrow">
          NUESTRA ESENCIA
        </p>

        <h2 className="experience__title" id="experience-title">
          EL SABOR DEL CARBÓN
          <span> NO SE IMPROVISA</span>
        </h2>

        <p className="experience__description">
          En BLACK GRILL creemos que una buena hamburguesa comienza
          con el fuego, ingredientes cuidadosamente seleccionados
          y el tiempo necesario para lograr un sabor inolvidable.
        </p>

        {/* INICIO: CARACTERÍSTICAS */}
        <div className="experience__features">

          {/* INICIO: CARACTERÍSTICA 1 */}
          <article className="experience__feature">
            <span className="experience__icon" aria-hidden="true">
              🔥
            </span>

            <h3>Fuego real</h3>

            <p>
              El carbón aporta ese aroma y sabor característicos
              de una hamburguesa a la parrilla.
            </p>
          </article>
          {/* FIN: CARACTERÍSTICA 1 */}

          {/* INICIO: CARACTERÍSTICA 2 */}
          <article className="experience__feature">
            <span className="experience__icon" aria-hidden="true">
              🍔
            </span>

            <h3>Sabor auténtico</h3>

            <p>
              Hamburguesas preparadas para disfrutar cada
              bocado y compartir buenos momentos.
            </p>
          </article>
          {/* FIN: CARACTERÍSTICA 2 */}

          {/* INICIO: CARACTERÍSTICA 3 */}
          <article className="experience__feature">
            <span className="experience__icon" aria-hidden="true">
              ❤️
            </span>

            <h3>Pasión por la parrilla</h3>

            <p>
              Cuidamos cada preparación para ofrecer una
              experiencia llena de sabor.
            </p>
          </article>
          {/* FIN: CARACTERÍSTICA 3 */}

        </div>
        {/* FIN: CARACTERÍSTICAS */}

      </div>
      {/* FIN: CONTENIDO */}

    </section>
    // FIN: SECCIÓN DE EXPERIENCIA
  )
}
// FIN: COMPONENTE EXPERIENCE

export default Experience