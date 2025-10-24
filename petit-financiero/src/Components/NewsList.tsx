import {
  // ChevronRight,
  Bell,
  Share2,
  Newspaper,
  Award,
  // Flame,
  TrendingUp,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { NewsArticleType } from "../Data/newsData.tsx";
import fondos from "../assets/fondos.png";
import { useState, useEffect } from "react";
import quini from "../assets/quini.png";

import ahora1 from "../assets/ahora1.png";
// import camionetas from "../assets/camionetas.png";
// import losmas from "../assets/losmas.gif";
// import suicidio from "../assets/suicidio.gif";
// import subasta from "../assets/subasta.gif";
// import suramericanos2 from "../assets/juegos.gif";

import iibb from "../assets/iibb.gif";
import alivio from "../assets/alivio.gif";
import miedo from "../assets/miedo.gif";
import obras from "../assets/obras.gif";
import seguridad from "../assets/seguridad.png";
import ingresos from "../assets/ingresos.gif";


import WeatherWidget from "./Weather.tsx";

interface NewsListProps {
  activeSection: string;
  featuredNews: NewsArticleType[];
  secondaryNews: NewsArticleType[];
  otherNews: NewsArticleType[];
  filteredNews: NewsArticleType[];
  handleViewArticle: (id: number) => void;
  hasMoreNews?: boolean;
  searchQuery?: string;
}

// Componente para anuncios publicitarios
const AdBanner: React.FC<{ 
  src: string; 
  alt: string; 
  className?: string; 
  onClick?: () => void;
  href?: string;
}> = ({
  src,
  alt,
  className = "",
  onClick,
  href,
}) => {
  const handleClick = () => {
    if (href) {
      window.open(href, '_blank', 'noopener,noreferrer');
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div className={`bg-gray-100 rounded-lg shadow-md overflow-hidden mb-6 ${className}`}>
      <img
        src={src}
        alt={alt}
        className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
        onClick={handleClick}
      />
    </div>
  );
};

// Componente de paginación mejorado
const Pagination: React.FC<{
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalPages, onPageChange }) => {
  const getVisiblePages = () => {
    const delta = 1;
    const range = [];
    const rangeWithDots = [];

    // Siempre incluir primera página
    if (totalPages <= 7) {
      // Si hay 7 páginas o menos, mostrar todas
      for (let i = 1; i <= totalPages; i++) {
        range.push(i);
      }
      return range;
    }

    // Lógica para páginas con puntos suspensivos
    if (currentPage <= 3) {
      // Cerca del inicio
      for (let i = 1; i <= 4; i++) {
        rangeWithDots.push(i);
      }
      rangeWithDots.push('...');
      rangeWithDots.push(totalPages);
    } else if (currentPage >= totalPages - 2) {
      // Cerca del final
      rangeWithDots.push(1);
      rangeWithDots.push('...');
      for (let i = totalPages - 3; i <= totalPages; i++) {
        rangeWithDots.push(i);
      }
    } else {
      // En el medio
      rangeWithDots.push(1);
      rangeWithDots.push('...');
      for (let i = currentPage - delta; i <= currentPage + delta; i++) {
        rangeWithDots.push(i);
      }
      rangeWithDots.push('...');
      rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="flex justify-center items-center mt-12 mb-8">
      <div className="flex items-center bg-white rounded-full shadow-lg border border-gray-200 overflow-hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`flex items-center px-4 py-3 font-medium transition-all duration-200 ${
            currentPage === 1
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          <span className="hidden sm:inline">Anterior</span>
        </button>

        <div className="flex items-center border-x border-gray-200">
          {visiblePages.map((page, index) => (
            <button
              key={index}
              onClick={() => typeof page === 'number' && onPageChange(page)}
              className={`px-4 py-3 min-w-[44px] font-medium transition-all duration-200 ${
                page === currentPage
                  ? 'bg-blue-600 text-white shadow-md'
                  : typeof page === 'number'
                  ? 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                  : 'text-gray-400 cursor-default'
              }`}
              disabled={typeof page !== 'number'}
            >
              {typeof page === 'number' ? page : <MoreHorizontal className="h-4 w-4" />}
            </button>
          ))}
        </div>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`flex items-center px-4 py-3 font-medium transition-all duration-200 ${
            currentPage === totalPages
              ? 'text-gray-400 cursor-not-allowed'
              : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
          }`}
        >
          <span className="hidden sm:inline">Siguiente</span>
          <ChevronRight className="h-4 w-4 ml-1" />
        </button>
      </div>
    </div>
  );
};

// Componente Masonry para evitar espacios en blanco
// const MasonryGrid: React.FC<{
//   articles: NewsArticleType[];
//   handleViewArticle: (id: number) => void;
// }> = ({ articles, handleViewArticle }) => {
//   return (
//     <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
//       {articles.map((article, index) => (
//         <div
//           key={article.id}
//           className="break-inside-avoid mb-6 bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
//           onClick={() => handleViewArticle(article.id)}
//         >
//           <img
//             src={article.imageUrl || fondos}
//             alt={article.title}
//             className="w-full h-48 object-cover"
//           />
//           <div className="p-4">
//             <div className="flex justify-between items-center mb-2">
//               <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//                 {article.category}
//               </span>
//               <Share2 className="h-4 w-4 text-gray-500 hover:text-blue-600 transition-colors" />
//             </div>
//             <h3 className="font-bold text-lg mb-2 hover:text-blue-700 transition-colors">
//               {article.title}
//             </h3>
//             <p className="text-gray-600 text-sm mb-3 line-clamp-3">
//               {article.summary}
//             </p>
//             <div className="flex justify-between items-center text-xs text-gray-500">
//               <span>{article.date}</span>
//               <div className="flex items-center space-x-2">
//                 <span className="bg-gray-100 px-2 py-1 rounded-full">
//                   {Math.floor(Math.random() * 5) + 2} min
//                 </span>
//                 {index % 3 === 0 && (
//                   <span className="text-red-500 flex items-center">
//                     ♥ {Math.floor(Math.random() * 200) + 50}
//                   </span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// Componente Grid alternativo más balanceado
const BalancedGrid: React.FC<{
  articles: NewsArticleType[];
  handleViewArticle: (id: number) => void;
}> = ({ articles, handleViewArticle }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {articles.map((article, index) => (
        <div
          key={article.id}
          className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-200 flex flex-col ${
            index === 0 ? "md:col-span-2 lg:col-span-2" : ""
          }`}
          onClick={() => handleViewArticle(article.id)}
        >
          <div className="relative">
            <img
              src={article.imageUrl || fondos}
              alt={article.title}
              className={`w-full object-cover ${
                index === 0 ? "h-56" : "h-48"
              }`}
            />
            {index === 0 && (
              <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-full">
                DESTACADO
              </div>
            )}
            {index % 4 === 1 && (
              <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 text-xs font-bold rounded-full">
                TENDENCIA
              </div>
            )}
          </div>
          <div className="p-4 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                {article.category}
              </span>
              <Share2 className="h-4 w-4 text-gray-500 hover:text-blue-600 transition-colors" />
            </div>
            <h3 className={`font-bold mb-2 hover:text-blue-700 transition-colors ${
              index === 0 ? "text-xl" : "text-lg"
            }`}>
              {article.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 flex-1 line-clamp-3">
              {article.summary}
            </p>
            <div className="flex justify-between items-center text-xs text-gray-500 mt-auto">
              <span>{article.date}</span>
              <div className="flex items-center space-x-2">
                <span className="bg-gray-100 px-2 py-1 rounded-full">
                  {Math.floor(Math.random() * 5) + 2} min
                </span>
                {index % 3 === 0 && (
                  <span className="text-red-500 flex items-center">
                    ♥ {Math.floor(Math.random() * 200) + 50}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const NewsList: React.FC<NewsListProps> = ({
  activeSection,
  featuredNews,
  secondaryNews,
  otherNews,
  filteredNews,
  handleViewArticle,
  searchQuery,
  // hasMoreNews = true,
}) => {
  // Estados para paginación
  const [currentPage, setCurrentPage] = useState(1);
  // const [layoutType, setLayoutType] = useState<'balanced' | 'masonry'>('balanced');
  const NEWS_PER_PAGE = 15;

  // Combinar todas las noticias para sección Rosario
  const allRosarioNews = [...featuredNews, ...secondaryNews, ...otherNews];
  
  // Determinar qué noticias usar según la sección
  const newsToShow = activeSection === "Rosario" ? allRosarioNews : filteredNews;
  
  // Cálculos de paginación
  const totalPages = Math.ceil(newsToShow.length / NEWS_PER_PAGE);
  const startIndex = (currentPage - 1) * NEWS_PER_PAGE;
  const endIndex = startIndex + NEWS_PER_PAGE;
  
  // Para Rosario, siempre mostramos las primeras 9 noticias en la primera página (layout especial)
  const getPaginatedNews = () => {
    if (activeSection === "Rosario") {
      if (currentPage === 1) {
        return newsToShow.slice(0, Math.min(NEWS_PER_PAGE, newsToShow.length));
      } else {
        const adjustedStartIndex = NEWS_PER_PAGE + (currentPage - 2) * NEWS_PER_PAGE;
        return newsToShow.slice(adjustedStartIndex, adjustedStartIndex + NEWS_PER_PAGE);
      }
    } else {
      return newsToShow.slice(startIndex, endIndex);
    }
  };

  const currentNews = getPaginatedNews();

  // Resetear página cuando cambia la sección
  useEffect(() => {
    setCurrentPage(1);
  }, [activeSection]);

  // Función para manejar cambio de página
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <WeatherWidget />

      {/* Publicidad HOME - Cárcel (después del breaking news) */}
      {activeSection === "Rosario" && (
        // <AdBanner src={alivio} alt="Publicidad Alivio Fiscal" />
        <AdBanner src={iibb} alt="Publicidad SFBF" />
      )}

      {/* Section Title with Icon */}
      <div className="flex items-center mb-6">
        {activeSection === "Rosario" ? (
          <Newspaper className="h-6 w-6 mr-2 text-blue-600" />
        ) : activeSection === "Deportes" ? (
          <Award className="h-6 w-6 mr-2 text-blue-600" />
        ) : (
          <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
        )}
        <h2 className="text-2xl font-bold text-gray-800">
          {activeSection === "Resultados"
            ? `Resultados para "${searchQuery}"`
            : activeSection}
        </h2>
        <div className="ml-3 flex-grow h-px bg-gray-300"></div>
      </div>

      {/* Contador de noticias y selector de layout */}
      <div className="flex justify-between items-center mb-4">
        {/* <div className="text-sm text-gray-600">
          Mostrando {startIndex + 1}-{Math.min(endIndex, newsToShow.length)} de {newsToShow.length} noticias
          {totalPages > 1 && ` • Página ${currentPage} de ${totalPages}`}
        </div> */}
        
        {/* Selector de layout solo para páginas posteriores */}
        {(activeSection !== "Rosario" || currentPage > 1) && (
          <div className="flex items-center space-x-2">
            {/* <span className="text-xs text-gray-500">Vista:</span> */}
            {/* <button
              onClick={() => setLayoutType('balanced')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                layoutType === 'balanced'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Grid
            </button> */}
            {/* <button
              onClick={() => setLayoutType('masonry')}
              className={`px-3 py-1 text-xs rounded-full transition-colors ${
                layoutType === 'masonry'
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
              }`}
            >
              Masonry
            </button> */}
          </div>
        )}
      </div>

      {activeSection === "Rosario" && currentPage === 1 && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contenido principal de noticias */}
          <div className="flex-1">
            {/* Primera sección: 1 grande + 2 pequeñas (solo en página 1) */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Artículo grande (primera posición) */}
              {currentNews.length > 0 && (
                <div className="lg:col-span-2">
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full hover:shadow-lg transition-shadow duration-200"
                    onClick={() => handleViewArticle(currentNews[0].id)}
                  >
                    <div className="relative">
                      <img
                        src={currentNews[0].imageUrl || fondos}
                        alt={currentNews[0].title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                        DESTACADO
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-blue-600">
                          {currentNews[0].category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                          <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                        </div>
                      </div>
                      <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                        {currentNews[0].title}
                      </h2>
                      <p className="text-gray-600 mt-3">
                        {currentNews[0].summary}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-sm text-gray-500">
                          {currentNews[0].date}
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          5 min de lectura
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Columna de 2 artículos pequeños (vertical) */}
              <div className="space-y-6">
                {currentNews.slice(1, 3).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    onClick={() => handleViewArticle(article.id)}
                  >
                    <img
                      src={article.imageUrl || fondos}
                      alt={article.title}
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-blue-600">
                          {article.category}
                        </span>
                        <Share2 className="h-3 w-3 text-gray-500 cursor-pointer hover:text-blue-600" />
                      </div>
                      <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
                        {article.title}
                      </h3>
                      <div className="mt-2 text-xs text-gray-500">
                        {article.date}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Publicidad HOME ENTRE NOTICIAS - Solo en página 1 */}
            <AdBanner src={obras} alt="Publicidad subasta de bienes" />

            {/* Segunda sección: 3 noticias medianas (solo en página 1) */}
            {currentNews.length > 3 && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {currentNews.slice(3, 6).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    onClick={() => handleViewArticle(article.id)}
                  >
                    <img
                      src={article.imageUrl || fondos}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between">
                        <span className="text-xs font-semibold text-blue-600">
                          {article.category}
                        </span>
                        <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                      </div>
                      <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {article.summary}
                      </p>
                      <div className="flex justify-between mt-3">
                        <div className="text-xs text-gray-500">
                          {article.date}
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          3 min
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Layout especial para primera página continúa... */}
            {currentNews.length > 6 && (
              <>
                <AdBanner src={miedo} alt="Publicidad Acuerdo construcción" />
                <AdBanner 
                  src={quini} 
                  alt="Publicidad Quini" 
                  href="https://www.loteriasantafe.gov.ar/"
                />

                {/* Tercera sección invertida */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
                  <div className="space-y-6">
                    {currentNews.slice(7, 9).map((article) => (
                      <div
                        key={article.id}
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-200"
                        onClick={() => handleViewArticle(article.id)}
                      >
                        <img
                          src={article.imageUrl || fondos}
                          alt={article.title}
                          className="w-full h-36 object-cover"
                        />
                        <div className="p-3">
                          <div className="flex justify-between">
                            <span className="text-xs font-semibold text-blue-600">
                              {article.category}
                            </span>
                            <Share2 className="h-3 w-3 text-gray-500 cursor-pointer hover:text-blue-600" />
                          </div>
                          <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
                            {article.title}
                          </h3>
                          <div className="mt-2 text-xs text-gray-500">
                            {article.date}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentNews.length > 6 && (
                    <div className="lg:col-span-2">
                      <div
                        className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full hover:shadow-lg transition-shadow duration-200"
                        onClick={() => handleViewArticle(currentNews[6].id)}
                      >
                        <div className="relative">
                          <img
                            src={currentNews[6].imageUrl || fondos}
                            alt={currentNews[6].title}
                            className="w-full h-64 object-cover"
                          />
                          <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                            POPULAR
                          </div>
                        </div>
                        <div className="p-5">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-xs font-semibold text-blue-600">
                              {currentNews[6].category}
                            </span>
                            <div className="flex items-center space-x-2">
                              <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                              <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                            </div>
                          </div>
                          <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                            {currentNews[6].title}
                          </h2>
                          <p className="text-gray-600 mt-3">
                            {currentNews[6].summary}
                          </p>
                          <div className="flex justify-between items-center mt-4">
                            <div className="text-sm text-gray-500">
                              {currentNews[6].date}
                            </div>
                            <div className="flex items-center text-xs">
                              <span className="bg-gray-100 px-2 py-1 rounded-full mr-2">
                                4 min
                              </span>
                              <span className="text-red-500">♥ 128</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* <AdBanner src={subasta} alt="Publicidad subasta de bienes" /> */}

                {/* Resto de noticias de la primera página usando el layout seleccionado */}
                {/* {currentNews.length > 9 && (
                  <div className="mb-8">
                    {layoutType === 'masonry' ? (
                      <MasonryGrid 
                        articles={currentNews.slice(9)}
                        handleViewArticle={handleViewArticle}
                      />
                    ) : (
                      <BalancedGrid 
                        articles={currentNews.slice(9)}
                        handleViewArticle={handleViewArticle}
                      />
                    )}
                  </div>
                )} */}
              </>
            )}
          </div>

          {/* Columna derecha con publicidad */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-6">
              <AdBanner src={ingresos} alt="Publicidad Ahora estamos" className="mb-0" />
            </div>
          </div>
        </div>
      )}

      {/* Layout para páginas posteriores de Rosario */}
      {activeSection === "Rosario" && currentPage > 1 && (
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
         
              <BalancedGrid 
                articles={currentNews}
                handleViewArticle={handleViewArticle}
              />
            
          </div>
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-6">
              <AdBanner src={ahora1} alt="Publicidad Ahora estamos" className="mb-0" />
            </div>
          </div>
        </div>
      )}

      {/* Publicidad específica para secciones */}
      {activeSection === "ECONOMÍA" && (
        <AdBanner src={alivio} alt="Publicidad los mas Buscados" />
      )}

      {activeSection === "EDUCACIÓN" && (
        <AdBanner src={seguridad} alt="Publicidad prevencion suicidios" />
      )}

      {/* Otras secciones (no Rosario) */}
      {activeSection !== "Rosario" && (
        <div>
          {currentNews.length > 0 ? (

              <BalancedGrid 
                articles={currentNews}
                handleViewArticle={handleViewArticle}
              />
            
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">
                No hay noticias disponibles en esta sección actualmente.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Componente de paginación mejorado */}
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default NewsList;