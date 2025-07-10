// import {
//   // ChevronRight,
//   Bell,
//   Share2,
//   Newspaper,
//   Award,
//   // Flame,
//   TrendingUp,
// } from "lucide-react";
// import { NewsArticleType } from "../Data/newsData.tsx";
// import fondos from "../assets/fondos.png";
// // import { useState } from "react";
// // import concesionaria from "../assets/concesionaria.jpg";

// // Importar los GIFs de publicidad
// import carcelGif from "../assets/carcel.gif";
// import camarasGif from "../assets/camaras.gif";
// import policialGif from "../assets/policial.gif";
// import gif911 from "../assets/911.png";
// import suramericanosGif from "../assets/suramericanos.gif";
// import raizGif from "../assets/raiz.jpg";
// import quini from "../assets/quini.png";
// import WeatherWidget from "./Weather.tsx";

// interface NewsListProps {
//   activeSection: string;
//   featuredNews: NewsArticleType[];
//   secondaryNews: NewsArticleType[];
//   otherNews: NewsArticleType[];
//   filteredNews: NewsArticleType[];
//   handleViewArticle: (id: number) => void;
//   hasMoreNews?: boolean;
//   searchQuery?: string;
// }

// // Componente para anuncios publicitarios
// const AdBanner: React.FC<{ src: string; alt: string; className?: string }> = ({
//   src,
//   alt,
//   className = "",
// }) => (
//   <div className={`bg-gray-100 rounded-lg shadow-md overflow-hidden mb-6 ${className}`}>
//     <img
//       src={src}
//       alt={alt}
//       className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
//     />
//   </div>
// );

// const NewsList: React.FC<NewsListProps> = ({
//   activeSection,
//   featuredNews,
//   secondaryNews,
//   otherNews,
//   filteredNews,
//   handleViewArticle,
//   searchQuery,
//   // hasMoreNews = true,
// }) => {
//   // Combinar todas las noticias para sección Rosario (excluyendo filteredNews)
//   const allRosarioNews = [...featuredNews, ...secondaryNews, ...otherNews];
//   // const [showBreakingNews, setShowBreakingNews] = useState(true);

//   return (
//     <>
//       <WeatherWidget />

//       {/* Breaking News Banner */}
//       {/* {showBreakingNews && (
//         <div className="bg-red-600 text-white p-3 mb-6 rounded-lg shadow-md relative">
//           <button
//             className="absolute right-2 top-2 text-white hover:text-gray-200"
//             onClick={() => setShowBreakingNews(false)}
//           >
//             ✕
//           </button>
//           <div className="flex items-center">
//             <Flame className="h-5 w-5 mr-2" />
//             <span className="font-bold mr-2">ÚLTIMO MOMENTO:</span>
//             <span className="flex-grow">
//               El gobernador anuncia inversiones millonarias para infraestructura
//               en Rosario
//             </span>
//             <button
//               className="text-xs underline hover:no-underline ml-2 mr-4"
//               onClick={() => handleViewArticle(allRosarioNews[1].id)}
//             >
//               Leer más
//             </button>
//           </div>
//         </div>
//       )} */}

//       {/* Publicidad HOME - Cárcel (después del breaking news) */}
//       {activeSection === "Rosario" && (
//         <AdBanner src={carcelGif} alt="Publicidad Cárcel" />
//       )}

//       {/* Section Title with Icon */}
//       <div className="flex items-center mb-6">
//         {activeSection === "Rosario" ? (
//           <Newspaper className="h-6 w-6 mr-2 text-blue-600" />
//         ) : activeSection === "Deportes" ? (
//           <Award className="h-6 w-6 mr-2 text-blue-600" />
//         ) : (
//           <TrendingUp className="h-6 w-6 mr-2 text-blue-600" />
//         )}
//         {/* <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2> */}
//         <h2 className="text-2xl font-bold text-gray-800">
//           {activeSection === "Resultados"
//             ? `Resultados para "${searchQuery}"`
//             : activeSection}
//         </h2>
//         <div className="ml-3 flex-grow h-px bg-gray-300"></div>
//       </div>

//       {activeSection === "Rosario" && (
//         <div className="flex flex-col lg:flex-row gap-6">
//           {/* Contenido principal de noticias */}
//           <div className="flex-1">
//             {/* Primera sección: 1 grande + 2 pequeñas */}
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//               {/* Artículo grande (primera posición) */}
//               {allRosarioNews.length > 0 && (
//                 <div className="lg:col-span-2">
//                   <div
//                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
//                     onClick={() => handleViewArticle(allRosarioNews[0].id)}
//                   >
//                     <div className="relative">
//                       <img
//                         src={allRosarioNews[0].imageUrl || fondos}
//                         alt={allRosarioNews[0].title}
//                         className="w-full h-64 object-cover"
//                       />
//                       <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
//                         DESTACADO
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <div className="flex justify-between items-center mb-1">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {allRosarioNews[0].category}
//                         </span>
//                         <div className="flex items-center space-x-2">
//                           <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                           <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                         </div>
//                       </div>
//                       <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
//                         {allRosarioNews[0].title}
//                       </h2>
//                       <p className="text-gray-600 mt-3">
//                         {allRosarioNews[0].summary}
//                       </p>
//                       <div className="flex justify-between items-center mt-4">
//                         <div className="text-sm text-gray-500">
//                           {allRosarioNews[0].date}
//                         </div>
//                         <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                           5 min de lectura
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}

//               {/* Columna de 2 artículos pequeños (vertical) */}
//               <div className="space-y-6">
//                 {allRosarioNews.slice(1, 3).map((article) => (
//                   <div
//                     key={article.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                     onClick={() => handleViewArticle(article.id)}
//                   >
//                     <img
//                       src={article.imageUrl || fondos}
//                       alt={article.title}
//                       className="w-full h-36 object-cover"
//                     />
//                     <div className="p-3">
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {article.category}
//                         </span>
//                         <Share2 className="h-3 w-3 text-gray-500 cursor-pointer hover:text-blue-600" />
//                       </div>
//                       <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
//                         {article.title}
//                       </h3>
//                       <div className="mt-2 text-xs text-gray-500">
//                         {article.date}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Publicidad HOME ENTRE NOTICIAS - Cámaras */}
//             <AdBanner src={camarasGif} alt="Publicidad Cámaras" />

//             {/* Segunda sección: 3 noticias medianas */}
//             {allRosarioNews.length > 3 && (
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//                 {allRosarioNews.slice(3, 6).map((article) => (
//                   <div
//                     key={article.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                     onClick={() => handleViewArticle(article.id)}
//                   >
//                     <img
//                       src={article.imageUrl || fondos}
//                       alt={article.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <div className="flex justify-between">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {article.category}
//                         </span>
//                         <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                       </div>
//                       <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mt-2">
//                         {article.summary}
//                       </p>
//                       <div className="flex justify-between mt-3">
//                         <div className="text-xs text-gray-500">
//                           {article.date}
//                         </div>
//                         <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                           3 min
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}

//             {/* Publicidad HOME ENTRE NOTICIAS - Policial */}
//             <AdBanner src={policialGif} alt="Publicidad Policial" />

//             {/* Tercera sección: 1 grande a la derecha + 2 pequeñas a la izquierda (invertido) */}
//             {allRosarioNews.length > 6 && (
//               <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//                 {/* 2 artículos pequeños a la izquierda */}
//                 <div className="space-y-6">
//                   {allRosarioNews.slice(7, 9).map((article) => (
//                     <div
//                       key={article.id}
//                       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                       onClick={() => handleViewArticle(article.id)}
//                     >
//                       <img
//                         src={article.imageUrl || fondos}
//                         alt={article.title}
//                         className="w-full h-36 object-cover"
//                       />
//                       <div className="p-3">
//                         <div className="flex justify-between">
//                           <span className="text-xs font-semibold text-blue-600">
//                             {article.category}
//                           </span>
//                           <Share2 className="h-3 w-3 text-gray-500 cursor-pointer hover:text-blue-600" />
//                         </div>
//                         <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
//                           {article.title}
//                         </h3>
//                         <div className="mt-2 text-xs text-gray-500">
//                           {article.date}
//                         </div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* Artículo grande a la derecha */}
//                 {allRosarioNews.length > 6 && (
//                   <div className="lg:col-span-2">
//                     <div
//                       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
//                       onClick={() => handleViewArticle(allRosarioNews[6].id)}
//                     >
//                       <div className="relative">
//                         <img
//                           src={allRosarioNews[6].imageUrl || fondos}
//                           alt={allRosarioNews[6].title}
//                           className="w-full h-64 object-cover"
//                         />
//                         <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
//                           POPULAR
//                         </div>
//                       </div>
//                       <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                           <span className="text-xs font-semibold text-blue-600">
//                             {allRosarioNews[6].category}
//                           </span>
//                           <div className="flex items-center space-x-2">
//                             <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                             <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                           </div>
//                         </div>
//                         <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
//                           {allRosarioNews[6].title}
//                         </h2>
//                         <p className="text-gray-600 mt-3">
//                           {allRosarioNews[6].summary}
//                         </p>
//                         <div className="flex justify-between items-center mt-4">
//                           <div className="text-sm text-gray-500">
//                             {allRosarioNews[6].date}
//                           </div>
//                           <div className="flex items-center text-xs">
//                             <span className="bg-gray-100 px-2 py-1 rounded-full mr-2">
//                               4 min
//                             </span>
//                             <span className="text-red-500">♥ 128</span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Cuarta sección: grid de 2 columnas para el resto de noticias */}
//             {allRosarioNews.length > 9 && (
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//                 {allRosarioNews.slice(9).map((article) => (
//                   <div
//                     key={article.id}
//                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                     onClick={() => handleViewArticle(article.id)}
//                   >
//                     <img
//                       src={article.imageUrl || fondos}
//                       alt={article.title}
//                       className="w-full h-48 object-cover"
//                     />
//                     <div className="p-4">
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {article.category}
//                         </span>
//                         <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                       </div>
//                       <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mt-2">
//                         {article.summary}
//                       </p>
//                       <div className="flex justify-between items-center mt-3">
//                         <div className="text-xs text-gray-500">
//                           {article.date}
//                         </div>
//                         <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                           2 min
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Columna derecha con publicidad 911 */}
//           <div className="lg:w-80 flex-shrink-0">
//             <div className="sticky top-6">
//               <AdBanner src={gif911} alt="Publicidad 911" className="mb-0" />
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Publicidad específica para sección ECONOMÍA */}
//       {activeSection === "ECONOMÍA" && (
//         <AdBanner src={suramericanosGif} alt="Publicidad Suramericanos" />
//       )}

//       {/* Publicidad específica para sección EDUCACIÓN */}
//       {activeSection === "EDUCACIÓN" && (
//         <AdBanner src={raizGif} alt="Publicidad Raíz" />
//       )}

//       {/* Filtered section content */}
//       {activeSection !== "Rosario" && (
//         <>
        
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredNews.length > 0 ? (
//               <>
//                 {/* Primera noticia grande */}
//                 {filteredNews.length > 0 && (
//                   <div className="col-span-full md:col-span-2 mb-6">
//                     <div
//                       className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                       onClick={() => handleViewArticle(filteredNews[0].id)}
//                     >
//                       <div className="relative">
//                         <img
//                           src={filteredNews[0].imageUrl || fondos}
//                           alt={filteredNews[0].title}
//                           className="w-full h-64 object-cover"
//                         />
//                         <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
//                           DESTACADO
//                         </div>
//                       </div>
//                       <div className="p-5">
//                         <div className="flex justify-between items-center mb-1">
//                           <span className="text-xs font-semibold text-blue-600">
//                             {filteredNews[0].category}
//                           </span>
//                           <div className="flex items-center space-x-2">
//                             <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                             <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                           </div>
//                         </div>
//                         <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
//                           {filteredNews[0].title}
//                         </h2>
//                         <p className="text-gray-600 mt-3">
//                           {filteredNews[0].summary}
//                         </p>
//                         <div className="flex justify-between items-center mt-4">
//                           <div className="text-sm text-gray-500">
//                             {filteredNews[0].date}
//                           </div>
//                           <div className="flex items-center space-x-2">
//                             <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                               5 min
//                             </span>
//                             <span className="text-xs text-gray-500">
//                               124 comentarios
//                             </span>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}

//                 {/* Resto de noticias */}
//                 {filteredNews.slice(1).map((article, index) => (
//                   <div
//                     key={article.id}
//                     className={`bg-white rounded-lg shadow-md overflow-hidden cursor-pointer ${
//                       index % 5 === 0 ? "md:col-span-2" : ""
//                     }`}
//                     onClick={() => handleViewArticle(article.id)}
//                   >
//                     <div className="relative">
//                       <img
//                         src={article.imageUrl || fondos}
//                         alt={article.title}
//                         className={`w-full ${
//                           index % 5 === 0 ? "h-56" : "h-48"
//                         } object-cover`}
//                       />
//                       {index % 4 === 0 && (
//                         <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
//                           HOT
//                         </div>
//                       )}
//                     </div>
//                     <div className="p-4">
//                       <div className="flex justify-between items-center">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {article.category}
//                         </span>
//                         <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                       </div>
//                       <h3
//                         className={`font-bold ${
//                           index % 5 === 0 ? "text-lg" : "text-md"
//                         } mt-1 hover:text-blue-700`}
//                       >
//                         {article.title}
//                       </h3>
//                       <p className="text-gray-600 text-sm mt-2">
//                         {article.summary}
//                       </p>
//                       <div className="flex justify-between items-center mt-3">
//                         <div className="text-xs text-gray-500">
//                           {article.date}
//                         </div>
//                         <div className="flex items-center space-x-2">
//                           <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                             3 min
//                           </span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </>
//             ) : (
//               <div className="col-span-full text-center py-12">
//                 <p className="text-gray-500">
//                   No hay noticias disponibles en esta sección actualmente.
//                 </p>
//               </div>
//             )}
//           </div>
//         </>
//       )}
//     </>
//   );
// };

// export default NewsList;

import {
  // ChevronRight,
  Bell,
  Share2,
  Newspaper,
  Award,
  // Flame,
  TrendingUp,
} from "lucide-react";
import { NewsArticleType } from "../Data/newsData.tsx";
import fondos from "../assets/fondos.png";
// import { useState } from "react";
// import concesionaria from "../assets/concesionaria.jpg";

// Importar los GIFs de publicidad
import carcelGif from "../assets/carcel.gif";
import camarasGif from "../assets/camaras.gif";
import policialGif from "../assets/policial.gif";
import gif911 from "../assets/911.png";
import suramericanosGif from "../assets/suramericanos.gif";
import raizGif from "../assets/raiz.jpg";
import quini from "../assets/quini.png";

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
  // Combinar todas las noticias para sección Rosario (excluyendo filteredNews)
  const allRosarioNews = [...featuredNews, ...secondaryNews, ...otherNews];
  // const [showBreakingNews, setShowBreakingNews] = useState(true);

  return (
    <>
      <WeatherWidget />

      {/* Breaking News Banner */}
      {/* {showBreakingNews && (
        <div className="bg-red-600 text-white p-3 mb-6 rounded-lg shadow-md relative">
          <button
            className="absolute right-2 top-2 text-white hover:text-gray-200"
            onClick={() => setShowBreakingNews(false)}
          >
            ✕
          </button>
          <div className="flex items-center">
            <Flame className="h-5 w-5 mr-2" />
            <span className="font-bold mr-2">ÚLTIMO MOMENTO:</span>
            <span className="flex-grow">
              El gobernador anuncia inversiones millonarias para infraestructura
              en Rosario
            </span>
            <button
              className="text-xs underline hover:no-underline ml-2 mr-4"
              onClick={() => handleViewArticle(allRosarioNews[1].id)}
            >
              Leer más
            </button>
          </div>
        </div>
      )} */}

      {/* Publicidad HOME - Cárcel (después del breaking news) */}
      {activeSection === "Rosario" && (
        <AdBanner src={carcelGif} alt="Publicidad Cárcel" />
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
        {/* <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2> */}
        <h2 className="text-2xl font-bold text-gray-800">
          {activeSection === "Resultados"
            ? `Resultados para "${searchQuery}"`
            : activeSection}
        </h2>
        <div className="ml-3 flex-grow h-px bg-gray-300"></div>
      </div>

      {activeSection === "Rosario" && (
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Contenido principal de noticias */}
          <div className="flex-1">
            {/* Primera sección: 1 grande + 2 pequeñas */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              {/* Artículo grande (primera posición) */}
              {allRosarioNews.length > 0 && (
                <div className="lg:col-span-2">
                  <div
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
                    onClick={() => handleViewArticle(allRosarioNews[0].id)}
                  >
                    <div className="relative">
                      <img
                        src={allRosarioNews[0].imageUrl || fondos}
                        alt={allRosarioNews[0].title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                        DESTACADO
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-xs font-semibold text-blue-600">
                          {allRosarioNews[0].category}
                        </span>
                        <div className="flex items-center space-x-2">
                          <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                          <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                        </div>
                      </div>
                      <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                        {allRosarioNews[0].title}
                      </h2>
                      <p className="text-gray-600 mt-3">
                        {allRosarioNews[0].summary}
                      </p>
                      <div className="flex justify-between items-center mt-4">
                        <div className="text-sm text-gray-500">
                          {allRosarioNews[0].date}
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
                {allRosarioNews.slice(1, 3).map((article) => (
                  <div
                    key={article.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
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

            {/* Publicidad HOME ENTRE NOTICIAS - Cámaras */}
            <AdBanner src={camarasGif} alt="Publicidad Cámaras" />

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

            {/* Publicidad HOME ENTRE NOTICIAS - Policial */}
            <AdBanner src={policialGif} alt="Publicidad Policial" />

            {/* Publicidad HOME ENTRE NOTICIAS - Quini */}
            <AdBanner 
              src={quini} 
              alt="Publicidad Quini" 
              href="https://www.loteriasantafe.gov.ar/"
            />

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

                {/* Artículo grande a la derecha */}
                {allRosarioNews.length > 6 && (
                  <div className="lg:col-span-2">
                    <div
                      className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
                      onClick={() => handleViewArticle(allRosarioNews[6].id)}
                    >
                      <div className="relative">
                        <img
                          src={allRosarioNews[6].imageUrl || fondos}
                          alt={allRosarioNews[6].title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
                          POPULAR
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-blue-600">
                            {allRosarioNews[6].category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                            <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                          </div>
                        </div>
                        <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                          {allRosarioNews[6].title}
                        </h2>
                        <p className="text-gray-600 mt-3">
                          {allRosarioNews[6].summary}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-sm text-gray-500">
                            {allRosarioNews[6].date}
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
                      src={article.imageUrl || fondos}
                      alt={article.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-4">
                      <div className="flex justify-between items-center">
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
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-gray-500">
                          {article.date}
                        </div>
                        <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                          2 min
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Columna derecha con publicidad 911 */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="sticky top-6">
              <AdBanner src={gif911} alt="Publicidad 911" className="mb-0" />
            </div>
          </div>
        </div>
      )}

      {/* Publicidad específica para sección ECONOMÍA */}
      {activeSection === "ECONOMÍA" && (
        <AdBanner src={suramericanosGif} alt="Publicidad Suramericanos" />
      )}

      {/* Publicidad específica para sección EDUCACIÓN */}
      {activeSection === "EDUCACIÓN" && (
        <AdBanner src={raizGif} alt="Publicidad Raíz" />
      )}

      {/* Filtered section content */}
      {activeSection !== "Rosario" && (
        <>
        
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
                      <div className="relative">
                        <img
                          src={filteredNews[0].imageUrl || fondos}
                          alt={filteredNews[0].title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
                          DESTACADO
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs font-semibold text-blue-600">
                            {filteredNews[0].category}
                          </span>
                          <div className="flex items-center space-x-2">
                            <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                            <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                          </div>
                        </div>
                        <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
                          {filteredNews[0].title}
                        </h2>
                        <p className="text-gray-600 mt-3">
                          {filteredNews[0].summary}
                        </p>
                        <div className="flex justify-between items-center mt-4">
                          <div className="text-sm text-gray-500">
                            {filteredNews[0].date}
                          </div>
                          <div className="flex items-center space-x-2">
                            <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                              5 min
                            </span>
                            <span className="text-xs text-gray-500">
                              124 comentarios
                            </span>
                          </div>
                        </div>
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
                    <div className="relative">
                      <img
                        src={article.imageUrl || fondos}
                        alt={article.title}
                        className={`w-full ${
                          index % 5 === 0 ? "h-56" : "h-48"
                        } object-cover`}
                      />
                      {index % 4 === 0 && (
                        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 text-xs font-bold rounded">
                          HOT
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-semibold text-blue-600">
                          {article.category}
                        </span>
                        <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
                      </div>
                      <h3
                        className={`font-bold ${
                          index % 5 === 0 ? "text-lg" : "text-md"
                        } mt-1 hover:text-blue-700`}
                      >
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-sm mt-2">
                        {article.summary}
                      </p>
                      <div className="flex justify-between items-center mt-3">
                        <div className="text-xs text-gray-500">
                          {article.date}
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs bg-gray-100 px-2 py-1 rounded-full">
                            3 min
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500">
                  No hay noticias disponibles en esta sección actualmente.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </>
  );
};

export default NewsList;