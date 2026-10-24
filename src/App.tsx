// ==========================================
// BLACK GRILL
// Archivo: src/App.tsx
// Responsabilidad: Organizar los componentes
// principales de la página.
// ==========================================

// Importación del encabezado
import Header from './components/Header/Header'
// Importación de la portada principal
import Hero from './components/Hero/Hero'
//Importacion de Menu
import Menu from './components/Menu/Menu'
//Importacion de Experience
import Experience from './components/Experience/Experience'
//Importacion de Contact
import Contact from './components/Contact/Contact'
//Importacion de Footer
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
      {/* ======================================
          ENCABEZADO Y NAVEGACIÓN
          ====================================== */}
      <Header />

      {/* ======================================
          CONTENIDO PRINCIPAL
          ====================================== */}
      <main>
          {/* SECCIÓN 1: PORTADA PRINCIPAL */}
          <Hero />
          {/* FIN: PORTADA */}
          {/* INICIO: MENÚ DE HAMBURGUESAS */}
          <Menu />
          {/* FIN: MENÚ DE HAMBURGUESAS */}
          {/* INICIO: EXPERIENCIA */}
          <Experience />
          {/* FIN: EXPERIENCIA */}
          {/* INICIO: CONTACTO */}
          <Contact />
          {/* FIN: CONTACTO */}
          {/* INICIO: PIE DE PÁGINA */}
          <Footer />
          {/* FIN: PIE DE PÁGINA */}
      </main>
    </>
  )
}

export default App