// import { ChevronRight } from 'lucide-react';
// import { NewsArticleType } from '../Data/newsData.tsx';
// import fondos from '../assets/fondos.png';

// interface NewsListProps {
//   activeSection: string;
//   featuredNews: NewsArticleType[];
//   secondaryNews: NewsArticleType[];
//   otherNews: NewsArticleType[];
//   filteredNews: NewsArticleType[];
//   handleViewArticle: (id: number) => void;
//   hasMoreNews?: boolean; // Nuevo prop para controlar si hay más noticias
// }

// const NewsList: React.FC<NewsListProps> = ({
//   activeSection,
//   featuredNews,
//   secondaryNews,
//   otherNews,
//   filteredNews,
//   handleViewArticle,
//   hasMoreNews = true // Por defecto asumimos que hay más noticias
// }) => {
//   return (
//     <>
//       {/* Section Title */}
//       <div className="flex items-center mb-6">
//         <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2>
//         <div className="ml-3 flex-grow h-px bg-gray-300"></div>
//       </div>
      
//       {activeSection === 'Rosario' && (
//         <>
//           {/* Featured articles - 3 column grid for larger screens */}
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//             {featuredNews.map((article) => (
//               <div 
//                 key={article.id} 
//                 className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                 onClick={() => handleViewArticle(article.id)}
//               >
//                 <img 
//                   src={article.imageUrl} 
//                   alt={article.title} 
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                   <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                     {article.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
//                   <div className="mt-3 text-xs text-gray-500">{article.date}</div>
//                 </div>
//               </div>
//             ))}
//           </div>
          
//           {/* Secondary articles - 2:1 grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer">
//                 <img 
//                   src={fondos} 
//                   alt="Noticia destacada" 
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-5">
//                   <span className="text-xs font-semibold text-blue-600">Destacado</span>
//                   <h2 className="font-bold text-2xl mt-1 hover:text-blue-700">
//                     Santa Fe recibe fondos para obras de infraestructura clave
//                   </h2>
//                   <p className="text-gray-600 mt-3">
//                     El gobierno provincial anunció la llegada de fondos para continuar con las obras de infraestructura 
//                     que beneficiarán a varios municipios de la región. Se espera que estas inversiones mejoren significativamente 
//                     la calidad de vida de los ciudadanos.
//                   </p>
//                   <div className="mt-4 text-sm text-gray-500">03 Abril, 2025</div>
//                 </div>
//               </div>
//             </div>
            
//             {/* Right column - secondary news */}
//             <div className="space-y-6">
//               {secondaryNews.map((article) => (
//                 <div 
//                   key={article.id} 
//                   className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row lg:flex-col cursor-pointer"
//                   onClick={() => handleViewArticle(article.id)}
//                 >
//                   <img 
//                     src={article.imageUrl} 
//                     alt={article.title} 
//                     className="sm:w-1/3 lg:w-full h-40 object-cover"
//                   />
//                   <div className="p-3 flex-grow">
//                     <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                     <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
//                       {article.title}
//                     </h3>
//                     <div className="mt-2 text-xs text-gray-500">{article.date}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
          
//           {/* Other news - fixed to 2 column grid */}
//           {otherNews.length > 0 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {otherNews.map((article) => (
//                 <div 
//                   key={article.id} 
//                   className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                   onClick={() => handleViewArticle(article.id)}
//                 >
//                   <img 
//                     src={article.imageUrl} 
//                     alt={article.title} 
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                     <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
//                     <div className="mt-3 text-xs text-gray-500">{article.date}</div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}
      
//       {/* Filtered section content */}
//       {activeSection !== 'Rosario' && (
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredNews.length > 0 ? (
//             filteredNews.map((article) => (
//               <div 
//                 key={article.id} 
//                 className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                 onClick={() => handleViewArticle(article.id)}
//               >
//                 <img 
//                   src={article.imageUrl} 
//                   alt={article.title} 
//                   className="w-full h-48 object-cover"
//                 />
//                 <div className="p-4">
//                   <span className="text-xs font-semibold text-blue-600">{article.category}</span>
//                   <h3 className="font-bold text-md mt-1 hover:text-blue-700">
//                     {article.title}
//                   </h3>
//                   <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
//                   <div className="mt-3 text-xs text-gray-500">{article.date}</div>
//                 </div>
//               </div>
//             ))
//           ) : (
//             <div className="col-span-full text-center py-12">
//               <p className="text-gray-500">No hay noticias disponibles en esta sección actualmente.</p>
//             </div>
//           )}
//         </div>
//       )}
      
//       {/* More news button - conditional rendering based on hasMoreNews */}
//       <div className="mt-8 text-center">
//         <button 
//           className={`
//             ${hasMoreNews ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} 
//             text-white font-medium px-6 py-2 rounded-full inline-flex items-center
//           `}
//           onClick={() => hasMoreNews && console.log('Cargar más noticias')}
//           disabled={!hasMoreNews}
//         >
//           Más noticias <ChevronRight className="ml-1 h-4 w-4" />
//         </button>
//       </div>
//     </>
//   );
// };

// export default NewsList;

import { ChevronRight } from 'lucide-react';
import { NewsArticleType } from '../Data/newsData.tsx';
import fondos from '../assets/fondos.png';

interface NewsListProps {
  activeSection: string;
  featuredNews: NewsArticleType[];
  secondaryNews: NewsArticleType[];
  otherNews: NewsArticleType[];
  filteredNews: NewsArticleType[];
  handleViewArticle: (id: number) => void;
  hasMoreNews?: boolean;
}

const NewsList: React.FC<NewsListProps> = ({
  activeSection,
  featuredNews,
  secondaryNews,
  otherNews,
  filteredNews,
  handleViewArticle,
  hasMoreNews = true
}) => {
  // Combinar todas las noticias para sección Rosario (excluyendo filteredNews)
  const allRosarioNews = [...featuredNews, ...secondaryNews, ...otherNews];
  
  return (
    <>
      {/* Section Title */}
      <div className="flex items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2>
        <div className="ml-3 flex-grow h-px bg-gray-300"></div>
      </div>
      
      {activeSection === 'Rosario' && (
        <>
          {/* Primera sección: 1 grande + 2 pequeñas */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Artículo grande (primera posición) */}
            {allRosarioNews.length > 0 && (
              <div className="lg:col-span-2">
                <div 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
                  onClick={() => handleViewArticle(allRosarioNews[0].id)}
                >
                  <img 
                    src={allRosarioNews[0].imageUrl || fondos} 
                    alt={allRosarioNews[0].title} 
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <span className="text-xs font-semibold text-blue-600">{allRosarioNews[0].category}</span>
                    <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                      {allRosarioNews[0].title}
                    </h2>
                    <p className="text-gray-600 mt-3">
                      {allRosarioNews[0].summary}
                    </p>
                    <div className="mt-4 text-sm text-gray-500">{allRosarioNews[0].date}</div>
                  </div>
                </div>
              </div>
            )}
            
            {/* Columna de 2 artículos pequeños (vertical) */}
            <div className="space-y-6">
              {allRosarioNews.slice(1, 3).map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleViewArticle(article.id)}
                >
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-36 object-cover"
                  />
                  <div className="p-3">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
                      {article.title}
                    </h3>
                    <div className="mt-2 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Segunda sección: 3 noticias medianas */}
          {allRosarioNews.length > 3 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {allRosarioNews.slice(3, 6).map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleViewArticle(article.id)}
                >
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
                    <div className="mt-3 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Tercera sección: 1 grande a la derecha + 2 pequeñas a la izquierda (invertido) */}
          {allRosarioNews.length > 6 && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* 2 artículos pequeños a la izquierda */}
              <div className="space-y-6">
                {allRosarioNews.slice(7, 9).map((article) => (
                  <div 
                    key={article.id} 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => handleViewArticle(article.id)}
                  >
                    <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-36 object-cover"
                    />
                    <div className="p-3">
                      <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                      <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
                        {article.title}
                      </h3>
                      <div className="mt-2 text-xs text-gray-500">{article.date}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Artículo grande a la derecha */}
              {allRosarioNews.length > 6 && (
                <div className="lg:col-span-2">
                  <div 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
                    onClick={() => handleViewArticle(allRosarioNews[6].id)}
                  >
                    <img 
                      src={allRosarioNews[6].imageUrl} 
                      alt={allRosarioNews[6].title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <span className="text-xs font-semibold text-blue-600">{allRosarioNews[6].category}</span>
                      <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                        {allRosarioNews[6].title}
                      </h2>
                      <p className="text-gray-600 mt-3">
                        {allRosarioNews[6].summary}
                      </p>
                      <div className="mt-4 text-sm text-gray-500">{allRosarioNews[6].date}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          
          {/* Cuarta sección: grid de 2 columnas para el resto de noticias */}
          {allRosarioNews.length > 9 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {allRosarioNews.slice(9).map((article) => (
                <div 
                  key={article.id} 
                  className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                  onClick={() => handleViewArticle(article.id)}
                >
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
                    <div className="mt-3 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
      
      {/* Filtered section content */}
      {activeSection !== 'Rosario' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredNews.length > 0 ? (
            <>
              {/* Primera noticia grande */}
              {filteredNews.length > 0 && (
                <div className="col-span-full md:col-span-2 mb-6">
                  <div 
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                    onClick={() => handleViewArticle(filteredNews[0].id)}
                  >
                    <img 
                      src={filteredNews[0].imageUrl} 
                      alt={filteredNews[0].title} 
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-5">
                      <span className="text-xs font-semibold text-blue-600">{filteredNews[0].category}</span>
                      <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                        {filteredNews[0].title}
                      </h2>
                      <p className="text-gray-600 mt-3">{filteredNews[0].summary}</p>
                      <div className="mt-4 text-sm text-gray-500">{filteredNews[0].date}</div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Resto de noticias */}
              {filteredNews.slice(1).map((article, index) => (
                <div 
                  key={article.id} 
                  className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
                    index % 5 === 0 ? "md:col-span-2" : ""
                  }`}
                  onClick={() => handleViewArticle(article.id)}
                >
                  <img 
                    src={article.imageUrl} 
                    alt={article.title} 
                    className={`w-full ${index % 5 === 0 ? "h-56" : "h-48"} object-cover`}
                  />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-blue-600">{article.category}</span>
                    <h3 className={`font-bold ${index % 5 === 0 ? "text-lg" : "text-md"} mt-1 hover:text-blue-700`}>
                      {article.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-2">{article.summary}</p>
                    <div className="mt-3 text-xs text-gray-500">{article.date}</div>
                  </div>
                </div>
              ))}
            </>
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-500">No hay noticias disponibles en esta sección actualmente.</p>
            </div>
          )}
        </div>
      )}
      
      {/* More news button */}
      <div className="mt-8 text-center">
        <button 
          className={`
            ${hasMoreNews ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-400 cursor-not-allowed'} 
            text-white font-medium px-6 py-2 rounded-full inline-flex items-center
          `}
          onClick={() => hasMoreNews && console.log('Cargar más noticias')}
          disabled={!hasMoreNews}
        >
          Más noticias <ChevronRight className="ml-1 h-4 w-4" />
        </button>
      </div>
    </>
  );
};

export default NewsList;