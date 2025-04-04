
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Pages
import Home from './Pages/Home.tsx';
import Article from './Pages/Article.tsx';

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Routes>
          <Route path="/PetitFinancieros" element={<Home />} />
          <Route path="/PetitFinancieros/article/:id" element={<Article />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;


// import { useState } from 'react';
// import { Search, Menu, X, ChevronRight, ArrowLeft } from 'lucide-react';
// import logo from './assets/logo.png';
// import ypf from './assets/ypf.webp';
// import dolar from './assets/dolar.webp';
// import pullaro from './assets/pullaro.webp';
// import calzado from './assets/calzado.webp';
// import parada from './assets/parada.webp';
// import nafta from './assets/nafta.webp';
// import fondos from './assets/fondos.png';

// // Main App Component
// const PetitFinancieros = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState('Rosario');
//   const [selectedArticle, setSelectedArticle] = useState<{
//     id: number;
//     title: string;
//     category: string;
//     imageUrl: string;
//     summary: string;
//     date: string;
//     content: string;
//   } | null>(null);

//   // Sections of the news blog
//   const sections = [
//     'INFORMACIÓN GENERAL', 'TECNOLOGÍA', 'EDUCACIÓN', 'ECONOMÍA', 'SANTA FE', 
//     'DEPORTES',
//   ];

//   // Hardcoded news data
//   const featuredNews = [
//     {
//       id: 1,
//       title: "Nueva parada segura en Estación Siberia",
//       category: "SANTA FE",
//       imageUrl: parada,
//       summary: "Se instaló una nueva parada segura beneficiando a los vecinos de la zona.",
//       date: "03 Abril, 2025",
//       content: "La instalación de una nueva parada segura en la Estación Siberia representa un avance significativo para la seguridad y el confort de los usuarios del transporte público. Esta iniciativa, que se enmarca dentro del plan de mejora de infraestructura urbana, incluye iluminación LED, cámaras de seguridad, botón de pánico conectado directamente con el 911, y una estructura moderna que protege a los usuarios de las inclemencias del tiempo.\n\nLos vecinos de la zona han expresado su satisfacción con esta nueva implementación, que responde a un reclamo histórico del barrio. El proyecto, que demandó una inversión de aproximadamente $15 millones, beneficiará a más de 5,000 usuarios diarios que utilizan esta estación como punto de transferencia.\n\n\"Esta es apenas una de las 25 paradas seguras que instalaremos este año en distintos puntos de la ciudad\", señaló el Secretario de Transporte municipal durante la inauguración. \"Estamos comprometidos con mejorar la experiencia del transporte público y garantizar la seguridad de todos los usuarios\".\n\nAdemás de los elementos de seguridad, la parada cuenta con accesibilidad para personas con movilidad reducida y paneles informativos con los horarios y recorridos de las líneas de colectivo."
//     },
//     {
//       id: 2,
//       title: "El Gobernador Pullaro presentó los resultados del Plan de Alfabetización Santafesino Raíz",
//       category: "Región",
//       imageUrl: pullaro,
//       summary: "El plan ha mostrado resultados positivos en toda la provincia de Santa Fe.",
//       date: "02 Abril, 2025",
//       content: "En un acto realizado en la ciudad de Santa Fe, el Gobernador Maximiliano Pullaro presentó los resultados preliminares del Plan de Alfabetización Santafesino Raíz, una iniciativa que busca reducir los índices de analfabetismo en la provincia y mejorar las competencias de lectoescritura en niños y adolescentes.\n\nSegún los datos presentados, el plan ha logrado una reducción del 15% en los índices de analfabetismo funcional en las zonas más vulnerables de la provincia, beneficiando a más de 35,000 niños y 12,000 adultos que participaron en los programas implementados durante el último año.\n\n\"Estos resultados nos llenan de orgullo y nos motivan a seguir fortaleciendo las políticas educativas en nuestra provincia\", expresó Pullaro. \"La educación es la base fundamental para el desarrollo de nuestra sociedad y estamos comprometidos a garantizar que todos los santafesinos tengan acceso a una educación de calidad\".\n\nEl Plan Raíz se implementa a través de una red de 1,200 alfabetizadores distribuidos en toda la provincia, quienes trabajan en escuelas, bibliotecas populares y centros comunitarios. Además, el programa incluye la distribución de material didáctico especialmente diseñado para diferentes grupos etarios y la formación continua de docentes en metodologías de enseñanza innovadoras.\n\nLa Ministra de Educación provincial, presente en el acto, destacó que el plan continuará expandiéndose durante los próximos dos años, con una inversión adicional de $500 millones para llegar a más localidades y ampliar su alcance."
//     },
//     {
//       id: 3,
//       title: "Nuevo aumento de los Combustibles",
//       category: "INFORMAECIÓN GENRAL",
//       imageUrl: nafta,
//       summary: "Los precios de los combustibles vuelven a subir en todo el país.",
//       date: "02 Abril, 2025",
//       content: "A partir de la medianoche de hoy, los precios de los combustibles experimentarán un nuevo incremento en todas las estaciones de servicio del país. Según anunciaron las principales petroleras, el aumento promedio será del 5,8% para las naftas y del 6,2% para el gasoil.\n\nEste es el tercer incremento en lo que va del año, acumulando un aumento total de aproximadamente 18% desde enero. Las empresas justifican esta medida por la fluctuación del tipo de cambio, el incremento en los precios internacionales del crudo y la actualización de los impuestos que gravan a los combustibles.\n\nLa nafta súper pasará a costar en promedio $765 por litro en la Ciudad de Santa Fe, mientras que el gasoil común se ubicará en los $805. Los combustibles premium verán incrementos ligeramente superiores, con la nafta premium alcanzando los $885 por litro.\n\nDesde la Confederación de Entidades del Comercio de Hidrocarburos (CECHA) advirtieron que este aumento tendrá un impacto directo en los costos logísticos y, consecuentemente, en los precios de los productos de consumo masivo. Por su parte, las cámaras de transporte ya anunciaron que solicitarán un incremento en las tarifas para compensar el aumento en sus costos operativos.\n\nEl Gobierno Nacional, a través del Ministerio de Economía, indicó que están evaluando medidas para mitigar el impacto de estos aumentos en los sectores más vulnerables, aunque no brindaron detalles específicos sobre cuáles serían estas acciones."
//     }
//   ];

//   const secondaryNews = [
//     {
//       id: 4,
//       title: "Encuentro de trabajo entre el Ministerio de Desarrollo Productivo y la Cámara de Industria del Calzado y Afines de Santa Fe",
//       category: "ECONOMÍA",
//       imageUrl: calzado,
//       summary: "Reunión productiva para impulsar la industria local del calzado.",
//       date: "01 Abril, 2025",
//       content: "El Ministerio de Desarrollo Productivo de la provincia de Santa Fe mantuvo un encuentro con representantes de la Cámara de Industria del Calzado y Afines para analizar la situación actual del sector y desarrollar estrategias conjuntas que impulsen su crecimiento.\n\nDurante la reunión, se abordaron temas cruciales como el acceso al financiamiento para la modernización tecnológica, la capacitación de mano de obra especializada, y la apertura de nuevos mercados tanto a nivel nacional como internacional.\n\nLa industria del calzado representa un sector estratégico para la economía provincial, con más de 120 empresas que generan aproximadamente 5,000 empleos directos y 8,000 indirectos. Sin embargo, en los últimos años ha enfrentado desafíos significativos debido a la competencia internacional y el incremento en los costos de producción.\n\n\"Estamos comprometidos a trabajar junto al sector privado para fortalecer nuestra industria local\", afirmó el ministro durante el encuentro. \"Hemos diseñado un programa específico de apoyo que incluye líneas de crédito a tasas preferenciales y asistencia técnica para mejorar los procesos productivos\".\n\nPor su parte, el presidente de la Cámara destacó la importancia de estas iniciativas y solicitó la implementación de medidas que protejan la producción local frente a la importación de productos a precios de dumping. \"Valoramos el diálogo abierto con el gobierno provincial y esperamos que estas conversaciones se traduzcan en acciones concretas que beneficien a todo el sector\", expresó.\n\nComo resultado del encuentro, se conformó una mesa de trabajo permanente que se reunirá mensualmente para dar seguimiento a las iniciativas acordadas y evaluar su implementación."
//     },
//     {
//       id: 5,
//       title: "Jornada de alta volatilidad en los mercados",
//       category: "ECONOMÍA",
//       imageUrl: dolar,
//       summary: "Los mercados internacionales experimentaron fuertes fluctuaciones.",
//       date: "01 Abril, 2025",
//       content: "Los mercados financieros internacionales experimentaron hoy una jornada de extrema volatilidad, con fuertes caídas en las principales bolsas del mundo seguidas de una recuperación parcial hacia el cierre de la sesión.\n\nEl índice S&P Merval de la Bolsa de Comercio de Buenos Aires no fue ajeno a esta tendencia y registró una caída inicial del 4,8%, para luego recuperarse y cerrar con una baja del 2,3%. Las acciones más afectadas fueron las del sector energético y financiero.\n\nEn Wall Street, el Dow Jones retrocedió un 3,2% al mediodía, pero logró recortar pérdidas y finalizó con una caída del 1,8%. El Nasdaq, índice tecnológico, mostró un comportamiento similar con un descenso del 2,1% al cierre.\n\nLos analistas atribuyen esta volatilidad a una combinación de factores, entre ellos la publicación de datos económicos débiles en Estados Unidos y Europa, las tensiones geopolíticas en varias regiones, y la incertidumbre sobre las próximas decisiones de política monetaria de los principales bancos centrales.\n\n\"Estamos viendo una corrección natural después de varios meses de subas sostenidas\", explicó Martín Rodríguez, economista jefe de una importante consultora financiera. \"Los inversores están reevaluando sus expectativas sobre el crecimiento económico global y ajustando sus carteras en consecuencia\".\n\nLos mercados de bonos también mostraron movimientos significativos, con un aumento en la demanda de activos considerados seguros, como los bonos del Tesoro estadounidense. El rendimiento del bono a 10 años cayó a su nivel más bajo en seis meses.\n\nEn el mercado cambiario, el dólar se fortaleció frente a la mayoría de las monedas, mientras que el oro, tradicional refugio en tiempos de incertidumbre, alcanzó un nuevo récord histórico al superar los 2,800 dólares por onza."
//     },
//     {
//       id: 6,
//       title: "YPF implementará tecnología de Google para aplicar a su app",
//       category: "Info General",
//       imageUrl: ypf,
//       summary: "La petrolera mejorará su aplicación con tecnología de vanguardia.",
//       date: "31 Marzo, 2025",
//       content: "YPF anunció hoy la firma de un acuerdo estratégico con Google para implementar tecnología de inteligencia artificial y computación en la nube en su aplicación móvil, con el objetivo de mejorar la experiencia de usuario y optimizar sus operaciones.\n\nLa nueva versión de la app YPF, que estará disponible a partir del próximo mes, incorporará funcionalidades avanzadas como reconocimiento de voz para la búsqueda de estaciones de servicio, un asistente virtual para resolver consultas de los usuarios, y un sistema de predicción de consumo basado en los hábitos de conducción.\n\n\"Esta alianza con Google representa un paso significativo en nuestra estrategia de transformación digital\", afirmó el director de Innovación de YPF durante la presentación. \"Estamos comprometidos a ofrecer soluciones innovadoras que simplifiquen la vida de nuestros clientes y mejoren su experiencia con nuestra marca\".\n\nEntre las nuevas funcionalidades destacadas se encuentra \"YPF Route\", un sistema de navegación integrado que no solo guiará a los usuarios a la estación de servicio más cercana, sino que también calculará la ruta más eficiente en términos de consumo de combustible, considerando factores como el tráfico en tiempo real, la topografía del terreno y el rendimiento específico del vehículo.\n\nAdemás, la aplicación incorporará un sistema de pago móvil mejorado que permitirá a los usuarios abonar directamente desde su auto sin necesidad de descender del vehículo, utilizando tecnología de reconocimiento facial para autenticar la transacción.\n\n\"La combinación de nuestra infraestructura física con las capacidades digitales más avanzadas nos permite ofrecer una propuesta de valor única en el mercado\", agregó el ejecutivo. \"Estamos reinventando la experiencia de repostaje para adaptarla a las necesidades del consumidor moderno\".\n\nGoogle, por su parte, destacó que esta colaboración forma parte de su estrategia para expandir el uso de sus tecnologías en sectores tradicionales de la economía. \"Estamos entusiasmados de trabajar con YPF para impulsar la innovación en la industria energética\", señaló el director de Alianzas Estratégicas de Google para Latinoamérica."
//     }
//   ];

//   // Filter news by active section
//   const filteredNews = [...featuredNews, ...secondaryNews].filter(
//     news => activeSection === 'Rosario' || news.category === activeSection
//   );

//   // Handle viewing full article
//   const handleViewArticle = (article: {
//     id: number;
//     title: string;
//     category: string;
//     imageUrl: string;
//     summary: string;
//     date: string;
//     content: string;
//   }) => {
//     setSelectedArticle(article);
//     window.scrollTo(0, 0);
//   };

//   // Handle going back to news list
//   const handleBackToNews = () => {
//     setSelectedArticle(null);
//   };

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Header */}
//       <header className="bg-white shadow-md">
//         <div className="container mx-auto px-4 py-3">
//           <div className="flex items-center justify-between">
//             {/* Logo */}
//             <div 
//               className="flex items-center space-x-2 cursor-pointer"
//               onClick={handleBackToNews}
//             >
//               <img 
//                 className="h-10 w-60"
//                 src={logo} 
//                 alt="Petit Financieros" 
//               />
//             </div>
            
//             {/* Search bar - desktop */}
//             <div className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100 w-64">
//               <input 
//                 type="text" 
//                 placeholder="Buscar noticias..." 
//                 className="bg-transparent outline-none flex-grow text-sm"
//               />
//               <Search className="h-4 w-4 text-gray-500" />
//             </div>
            
//             {/* Mobile menu button */}
//             <button 
//               className="md:hidden p-2"
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             >
//               {mobileMenuOpen ? <X /> : <Menu />}
//             </button>
            
//             {/* Date display - desktop */}
//             <div className="hidden md:block text-sm text-gray-600">
//               Jueves, 03 de Abril 2025
//             </div>
//           </div>
          
//           {/* Navigation desktop */}
//           <nav className="hidden md:flex mt-4 space-x-6 overflow-x-auto pb-2">
//             {sections.map(section => (
//               <button
//                 key={section}
//                 className={`text-sm font-medium whitespace-nowrap transition ${
//                   activeSection === section 
//                     ? 'text-blue-700 border-b-2 border-blue-700' 
//                     : 'text-gray-600 hover:text-blue-700'
//                 }`}
//                 onClick={() => {
//                   setActiveSection(section);
//                   setSelectedArticle(null);
//                 }}
//               >
//                 {section}
//               </button>
//             ))}
//           </nav>
          
//           {/* Mobile menu */}
//           {mobileMenuOpen && (
//             <div className="md:hidden mt-3 bg-white p-4 rounded shadow-lg absolute left-0 right-0 z-10">
//               <div className="flex items-center border rounded-full px-3 py-1 bg-gray-100 mb-4">
//                 <input 
//                   type="text" 
//                   placeholder="Buscar noticias..." 
//                   className="bg-transparent outline-none flex-grow text-sm"
//                 />
//                 <Search className="h-4 w-4 text-gray-500" />
//               </div>
              
//               <div className="flex flex-col space-y-3">
//                 {sections.map(section => (
//                   <button
//                     key={section}
//                     className={`text-sm font-medium text-left px-2 py-1 rounded ${
//                       activeSection === section 
//                         ? 'bg-blue-50 text-blue-700'
//                         : 'text-gray-600'
//                     }`}
//                     onClick={() => {
//                       setActiveSection(section);
//                       setSelectedArticle(null);
//                       setMobileMenuOpen(false);
//                     }}
//                   >
//                     {section}
//                   </button>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </header>
      
//       {/* Main content */}
//       <main className="container mx-auto px-4 py-6">
//         {selectedArticle ? (
//           /* Full Article View */
//           <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
//             <button 
//               onClick={handleBackToNews}
//               className="flex items-center text-blue-600 hover:text-blue-800 p-4"
//             >
//               <ArrowLeft className="h-4 w-4 mr-1" /> Volver a noticias
//             </button>
            
//             <img 
//               src={selectedArticle.imageUrl} 
//               alt={selectedArticle.title} 
//               className="w-full h-64 md:h-96 object-cover"
//             />
            
//             <div className="p-6">
//               <div className="flex items-center mb-4">
//                 <span className="text-sm font-semibold text-blue-600 mr-3">
//                   {selectedArticle.category}
//                 </span>
//                 <span className="text-sm text-gray-500">
//                   {selectedArticle.date}
//                 </span>
//               </div>
              
//               <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//                 {selectedArticle.title}
//               </h1>
              
//               <div className="prose max-w-none text-gray-700">
//                 {selectedArticle.content.split('\n\n').map((paragraph, index) => (
//                   <p key={index} className="mb-4">{paragraph}</p>
//                 ))}
//               </div>
//             </div>
//           </div>
//         ) : (
//           /* News Listing View */
//           <>
//             {/* Section Title */}
//             <div className="flex items-center mb-6">
//               <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2>
//               <div className="ml-3 flex-grow h-px bg-gray-300"></div>
//             </div>
            
//             {activeSection === 'Rosario' && (
//               <>
//                 {/* Featured articles - 3 column grid for larger screens */}
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                   {featuredNews.map((article) => (
//                     <div 
//                       key={article.id} 
//                       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                       onClick={() => handleViewArticle(article)}
//                     >
//                       <img 
//                         src={article.imageUrl} 
//                         alt={article.title} 
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                         <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                           {article.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
//                         <div className="mt-3 text-xs text-gray-500">{article.date}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {/* Secondary articles - 2:1 grid */}
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//                   <div className="lg:col-span-2">
//                     <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
//                       <img 
//                         src={fondos} 
//                         alt="Noticia destacada" 
//                         className="w-full h-64 object-cover"
//                       />
//                       <div className="p-5">
//                         <span className="text-xs font-semibold text-blue-600">Destacado</span>
//                         <h2 className="font-bold text-2xl mt-1 hover:text-blue-700">
//                           Santa Fe recibe fondos para obras de infraestructura clave
//                         </h2>
//                         <p className="text-gray-600 mt-3">
//                           El gobierno provincial anunció la llegada de fondos para continuar con las obras de infraestructura 
//                           que beneficiarán a varios municipios de la región. Se espera que estas inversiones mejoren significativamente 
//                           la calidad de vida de los ciudadanos.
//                         </p>
//                         <div className="mt-4 text-sm text-gray-500">03 Abril, 2025</div>
//                       </div>
//                     </div>
//                   </div>
                  
//                   {/* Right column - secondary news */}
//                   <div className="space-y-6">
//                     {secondaryNews.map((article) => (
//                       <div 
//                         key={article.id} 
//                         className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row lg:flex-col cursor-pointer"
//                         onClick={() => handleViewArticle(article)}
//                       >
//                         <img 
//                           src={article.imageUrl} 
//                           alt={article.title} 
//                           className="sm:w-1/3 lg:w-full h-40 object-cover"
//                         />
//                         <div className="p-3 flex-grow">
//                           <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                           <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
//                             {article.title}
//                           </h3>
//                           <div className="mt-2 text-xs text-gray-500">{article.date}</div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </>
//             )}
            
//             {/* Filtered section content */}
//             {activeSection !== 'Rosario' && (
//               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//                 {filteredNews.length > 0 ? (
//                   filteredNews.map((article) => (
//                     <div 
//                       key={article.id} 
//                       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                       onClick={() => handleViewArticle(article)}
//                     >
//                       <img 
//                         src={article.imageUrl} 
//                         alt={article.title} 
//                         className="w-full h-48 object-cover"
//                       />
//                       <div className="p-4">
//                         <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                         <h3 className="font-bold text-md mt-1 hover:text-blue-700">
//                           {article.title}
//                         </h3>
//                         <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
//                         <div className="mt-3 text-xs text-gray-500">{article.date}</div>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="col-span-full text-center py-12">
//                     <p className="text-gray-500">No hay noticias disponibles en esta sección actualmente.</p>
//                   </div>
//                 )}
//               </div>
//             )}
            
//             {/* More news button */}
//             <div className="mt-8 text-center">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-full inline-flex items-center">
//                 Más noticias <ChevronRight className="ml-1 h-4 w-4" />
//               </button>
//             </div>
//           </>
//         )}
//       </main>
      
//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-8">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row justify-between">
//             <div className="mb-6 md:mb-0">
//               <div className="flex items-center space-x-2 mb-4">
//                 <img 
//                   src={logo} 
//                   alt="Petit Financieros" 
//                   className="h-10 w-60"
//                 />
//               </div>
//               <p className="text-gray-400 text-sm">
//                 Tu fuente confiable para noticias financieras y generales de la región.
//               </p>
//             </div>
            
//             <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
//               <div>
//                 <h5 className="font-medium mb-3">Secciones</h5>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   {sections.slice(0, 3).map(section => (
//                     <li 
//                       key={section} 
//                       className="hover:text-white cursor-pointer"
//                       onClick={() => {
//                         setActiveSection(section);
//                         setSelectedArticle(null);
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       {section}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h5 className="font-medium mb-3">Más secciones</h5>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   {sections.slice(3, 6).map(section => (
//                     <li 
//                       key={section} 
//                       className="hover:text-white cursor-pointer"
//                       onClick={() => {
//                         setActiveSection(section);
//                         setSelectedArticle(null);
//                         window.scrollTo(0, 0);
//                       }}
//                     >
//                       {section}
//                     </li>
//                   ))}
//                 </ul>
//               </div>
              
//               <div>
//                 <h5 className="font-medium mb-3">Enlaces</h5>
//                 <ul className="space-y-2 text-sm text-gray-400">
//                   <li className="hover:text-white cursor-pointer">Sobre nosotros</li>
//                   <li className="hover:text-white cursor-pointer">Contacto</li>
//                   <li className="hover:text-white cursor-pointer">Términos y condiciones</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
          
//           <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
//             © 2025 Petit Financieros. Todos los derechos reservados.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PetitFinancieros;