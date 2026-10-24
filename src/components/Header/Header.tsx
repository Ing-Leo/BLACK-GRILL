
// ==========================================
// BLACK GRILL
// Archivo: src/components/Header/Header.tsx
// Responsabilidad: Encabezado y navegación responsiva
// ==========================================

import { useState } from 'react'
import './Header.scss'

function Header() {
  // ==========================================
  // 1. ESTADO DEL MENÚ MÓVIL
  // ==========================================

  const [menuAbierto, setMenuAbierto] = useState(false)

  // ==========================================
  // 2. CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
  // ==========================================

  const cerrarMenu = () => {
    setMenuAbierto(false)
  }

  // ==========================================
  // 3. RENDERIZADO DEL ENCABEZADO
  // ==========================================

  return (
    <header className="header">

      {/* ======================================
          3.1 LOGOTIPO
      ====================================== */}

      <a
        className="header__brand"
        href="#inicio"
        onClick={cerrarMenu}
        aria-label="BLACK GRILL, ir al inicio"
      >
        <span className="header__brand-icon" aria-hidden="true">
          🔥
        </span>

        <span className="header__brand-name">
          BLACK GRILL
        </span>
      </a>

      {/* ======================================
          3.2 BOTÓN DEL MENÚ MÓVIL
      ====================================== */}

      <button
        className="header__toggle"
        type="button"
        aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuAbierto}
        aria-controls="navegacion-principal"
        onClick={() => setMenuAbierto(!menuAbierto)}
      >
        <span aria-hidden="true">
          {menuAbierto ? '✕' : '☰'}
        </span>
      </button>

      {/* ======================================
          3.3 CONTENEDOR DE NAVEGACIÓN
      ====================================== */}

      <div
        className={`header__navigation ${
          menuAbierto ? 'header__navigation--open' : ''
        }`}
        id="navegacion-principal"
      >

        {/* Navegación principal */}

        <nav aria-label="Navegación principal">
          <ul className="header__list">

            <li>
              <a href="#inicio" onClick={cerrarMenu}>
                Inicio
              </a>
            </li>

            <li>
              <a href="#experiencia" onClick={cerrarMenu}>
                Experiencia
              </a>
            </li>

            <li>
              <a href="#menu" onClick={cerrarMenu}>
                Menú
              </a>
            </li>

            <li>
              <a href="#contacto" onClick={cerrarMenu}>
                Ubicación
              </a>
            </li>

          </ul>
        </nav>

        {/* Acción principal */}

        <a
          className="header__button"
          href="#menu"
          onClick={cerrarMenu}
        >
          Ver menú
        </a>

      </div>

    </header>
  )
}

// ==========================================
// 4. EXPORTACIÓN DEL COMPONENTE
// ==========================================

export default Header

