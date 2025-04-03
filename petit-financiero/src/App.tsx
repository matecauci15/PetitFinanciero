import { useState } from 'react';
import { Search, Menu, X, ChevronRight } from 'lucide-react';
import logo from './assets/Logopetit.png';
import ypf from './assets/ypf.webp';
import dolar from './assets/dolar.webp';
import pullaro from './assets/pullaro.webp';
import calzado from './assets/calzado.webp';
import parada from './assets/parada.webp';
import nafta from './assets/nafta.webp';
import fondos from './assets/fondos.png';

// Main App Component
const PetitFinancieros = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('Rosario');

  // Sections of the news blog
  const sections = [
    'Rosario', 'Región', 'Policiales', 'Argentina', 'Mundo', 
    'Deportes', 'Info General', 'Todo show', 'Politica'
  ];

  // Hardcoded news data
  const featuredNews = [
    {
      id: 1,
      title: "Nueva parada segura en Estación Siberia",
      category: "Rosario",
      imageUrl: parada,
      summary: "Se instaló una nueva parada segura beneficiando a los vecinos de la zona.",
      date: "03 Abril, 2025"
    },
    {
      id: 2,
      title: "El Gobernador Pullaro presentó los resultados del Plan de Alfabetización Santafesino Raíz",
      category: "Región",
      imageUrl: pullaro,
      summary: "El plan ha mostrado resultados positivos en toda la provincia de Santa Fe.",
      date: "02 Abril, 2025"
    },
    {
      id: 3,
      title: "Nuevo aumento de los Combustibles",
      category: "Argentina",
      imageUrl: nafta,
      summary: "Los precios de los combustibles vuelven a subir en todo el país.",
      date: "02 Abril, 2025"
    }
  ];

  const secondaryNews = [
    {
      id: 4,
      title: "Encuentro de trabajo entre el Ministerio de Desarrollo Productivo y la Cámara de Industria del Calzado y Afines de Santa Fe",
      category: "Politica",
      imageUrl: calzado,
      summary: "Reunión productiva para impulsar la industria local del calzado.",
      date: "01 Abril, 2025"
    },
    {
      id: 5,
      title: "Jornada de alta volatilidad en los mercados",
      category: "Mundo",
      imageUrl: dolar,
      summary: "Los mercados internacionales experimentaron fuertes fluctuaciones.",
      date: "01 Abril, 2025"
    },
    {
      id: 6,
      title: "YPF implementará tecnología de Google para aplicar a su app",
      category: "Info General",
      imageUrl: ypf,
      summary: "La petrolera mejorará su aplicación con tecnología de vanguardia.",
      date: "31 Marzo, 2025"
    }
  ];

  // Filter news by active section
  const filteredNews = [...featuredNews, ...secondaryNews].filter(
    news => activeSection === 'Rosario' || news.category === activeSection
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <img 
              className='h-10 w-60'
              src={logo} alt="Petit Financieros" />
              {/* <span className="text-2xl font-bold text-blue-800">Petit</span>
              <span className="text-2xl font-bold text-red-600">Financieros</span> */}
            </div>
            
            {/* Search bar - desktop */}
            <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100 w-64">
              <input 
                type="text" 
                placeholder="Buscar noticias..." 
                className="bg-transparent outline-none flex-grow text-sm"
              />
              <Search className="h-4 w-4 text-gray-500" />
            </div>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
            
            {/* Date display - desktop */}
            <div className="hidden md:block text-sm text-gray-600">
              Jueves, 03 de Abril 2025
            </div>
          </div>
          
          {/* Navigation desktop */}
          <nav className="hidden md:flex mt-4 space-x-6 overflow-x-auto pb-2">
            {sections.map(section => (
              <button
                key={section}
                className={`text-sm font-medium whitespace-nowrap transition ${
                  activeSection === section 
                    ? 'text-blue-700 border-b-2 border-blue-700' 
                    : 'text-gray-600 hover:text-blue-700'
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            ))}
          </nav>
          
          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden mt-3 bg-white p-4 rounded shadow-lg absolute left-0 right-0 z-10">
              <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100 mb-4">
                <input 
                  type="text" 
                  placeholder="Buscar noticias..." 
                  className="bg-transparent outline-none flex-grow text-sm"
                />
                <Search className="h-4 w-4 text-gray-500" />
              </div>
              
              <div className="flex flex-col space-y-3">
                {sections.map(section => (
                  <button
                    key={section}
                    className={`text-sm font-medium text-left px-2 py-1 rounded ${
                      activeSection === section 
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-600'
                    }`}
                    onClick={() => {
                      setActiveSection(section);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {section}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
      
      {/* Main content */}
      <main className="container mx-auto px-4 py-6">
        {/* Section Title */}
        <div className="flex items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2>
          <div className="ml-3 flex-grow h-px bg-gray-300"></div>
        </div>
        
        {activeSection === 'Rosario' && (
          <>
            {/* Featured articles - 3 column grid for larger screens */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {featuredNews.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className="font-bold text-lg mt-1 hover:text-blue-700 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
                    <div className="mt-3 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Secondary articles - 2:1 grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={fondos} 
                    alt="Noticia destacada" 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-blue-600">Destacado</span>
                    <h2 className="font-bold text-2xl mt-1 hover:text-blue-700 cursor-pointer">
                      Santa Fe recibe fondos para obras de infraestructura clave
                    </h2>
                    <p className="text-gray-600 mt-3">
                      El gobierno provincial anunció la llegada de fondos para continuar con las obras de infraestructura 
                      que beneficiarán a varios municipios de la región. Se espera que estas inversiones mejoren significativamente 
                      la calidad de vida de los ciudadanos.
                    </p>
                    <div className="mt-4 text-sm text-gray-500">03 Abril, 2025</div>
                  </div>
                </div>
              </div>
              
              {/* Right column - secondary news */}
              <div className="space-y-6">
                {secondaryNews.map((article) => (
                  <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row lg:flex-col">
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="sm:w-1/3 lg:w-full h-40 object-cover"
                    />
                    <div className="p-3 flex-grow">
                      <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                      <h3 className="font-bold text-sm mt-1 hover:text-blue-700 cursor-pointer">
                        {article.title}
                      </h3>
                      <div className="mt-2 text-xs text-gray-500">{article.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        
        {/* Filtered section content */}
        {activeSection !== 'Rosario' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredNews.length > 0 ? (
              filteredNews.map((article) => (
                <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className="font-bold text-md mt-1 hover:text-blue-700 cursor-pointer">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
                    <div className="mt-3 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">No hay noticias disponibles en esta sección actualmente.</p>
              </div>
            )}
          </div>
        )}
        
        {/* More news button */}
        <div className="mt-8 text-center">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full inline-flex items-center">
            Más noticias <ChevronRight className="ml-1 h-4 w-4" />
          </button>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                src={logo} 
                alt="Petit Financieros" 
                className='h-10 w-60'
                />
              </div>
              <p className="text-gray-400 text-sm">
                Tu fuente confiable para noticias financieras y generales de la región.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h5 className="font-medium mb-3">Secciones</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  {sections.slice(0, 3).map(section => (
                    <li key={section} className="hover:text-white cursor-pointer">
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-3">Más secciones</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  {sections.slice(3, 6).map(section => (
                    <li key={section} className="hover:text-white cursor-pointer">
                      {section}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h5 className="font-medium mb-3">Enlaces</h5>
                <ul className="space-y-2 text-sm text-gray-400">
                  <li className="hover:text-white cursor-pointer">Sobre nosotros</li>
                  <li className="hover:text-white cursor-pointer">Contacto</li>
                  <li className="hover:text-white cursor-pointer">Términos y condiciones</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
            © 2025 Petit Financieros. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PetitFinancieros;