// ==========================================
// INICIO: IMPORTACIONES
// ==========================================
import './Menu.scss'
// FIN: IMPORTACIONES

// ==========================================
// INICIO: TIPO DE DATO PARA LAS HAMBURGUESAS
// ==========================================
interface Hamburguesa {
  id: number
  nombre: string
  descripcion: string
  precio: number
  imagen: string
  etiqueta?: string
}
// FIN: TIPO DE DATO PARA LAS HAMBURGUESAS

// ==========================================
// INICIO: INFORMACIÓN DE LAS HAMBURGUESAS
// ==========================================
const hamburguesas: Hamburguesa[] = [
  {
    id: 1,
    nombre: 'Black Clásica',
    descripcion:
      'Carne preparada al carbón, pan con ajonjolí y un sabor auténtico.',
    precio: 90,
    imagen: '/img/2.jpeg',
    etiqueta: 'Nuestra especialidad',
  },
  {
    id: 2,
    nombre: 'Black Especial',
    descripcion:
      'Una hamburguesa con doble carne, queso manchego,lechuga,  sabor intenso, preparada a la parrilla.',
    precio: 120,
    imagen: '/img/1.jpeg',
    etiqueta: 'Favorita',
  },
  {
    id: 3,
    nombre: 'Black Grill',
    descripcion:
      'Pan dorado, Doble carne al carbón, doble queso, lechuga y el sabor que distingue a BLACK GRILL.',
    precio: 130,
    imagen: '/img/3.jpeg',
  },
]
// FIN: INFORMACIÓN DE LAS HAMBURGUESAS

// ==========================================
// INICIO: COMPONENTE MENU
// ==========================================
function Menu() {
  return (
    // INICIO: SECCIÓN PRINCIPAL DEL MENÚ
    <section className="menu" id="menu" aria-labelledby="menu-title">

      {/* INICIO: ENCABEZADO DEL MENÚ */}
      <div className="menu__header">

        <p className="menu__eyebrow">
          SABOR QUE SE SIENTE
        </p>

        <h2 className="menu__title" id="menu-title">
          NUESTRAS HAMBURGUESAS
        </h2>

        <p className="menu__description">
          El auténtico sabor de la carne al carbón, acompañado de ingredientes frescos y deliciosas papas.
          ¡Un sabor que conquista desde el primer bocado! 
        </p>

      </div>
      {/* FIN: ENCABEZADO DEL MENÚ */}

      {/* INICIO: CONTENEDOR DE TARJETAS */}
      <div className="menu__grid">

        {/* INICIO: RECORRIDO DE HAMBURGUESAS */}
        {hamburguesas.map((hamburguesa) => (

          // INICIO: TARJETA DE HAMBURGUESA
          <article className="menu__card" key={hamburguesa.id}>

            {/* INICIO: IMAGEN */}
            <div className="menu__image-container">

              <img
                className="menu__image"
                src={hamburguesa.imagen}
                alt={hamburguesa.nombre}
                loading="lazy"
              />

              {/* INICIO: ETIQUETA OPCIONAL */}
              {hamburguesa.etiqueta && (
                <span className="menu__badge">
                  {hamburguesa.etiqueta}
                </span>
              )}
              {/* FIN: ETIQUETA OPCIONAL */}

            </div>
            {/* FIN: IMAGEN */}

            {/* INICIO: INFORMACIÓN */}
            <div className="menu__body">

              <h3 className="menu__name">
                {hamburguesa.nombre}
              </h3>

              <p className="menu__text">
                {hamburguesa.descripcion}
              </p>

              {/* INICIO: PRECIO */}
              <div className="menu__footer">

                <p className="menu__price">
                  ${hamburguesa.precio.toFixed(2)}
                  <span> MXN</span>
                </p>

                <a
                  className="menu__button"
                  href="#contacto"
                  aria-label={`Consultar ${hamburguesa.nombre}`}
                >
                  Consultar
                </a>

              </div>
              {/* FIN: PRECIO */}

            </div>
            {/* FIN: INFORMACIÓN */}

          </article>
          // FIN: TARJETA DE HAMBURGUESA

        ))}
        {/* FIN: RECORRIDO DE HAMBURGUESAS */}

      </div>
      {/* FIN: CONTENEDOR DE TARJETAS */}

    </section>
    // FIN: SECCIÓN PRINCIPAL DEL MENÚ
  )
}
// FIN: COMPONENTE MENU

export default Menu