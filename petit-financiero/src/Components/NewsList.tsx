// import {
//   ChevronRight,
//   Bell,
//   Share2,
//   Newspaper,
//   Award,
//   Flame,
//   TrendingUp,
// } from "lucide-react";
// import { NewsArticleType } from "../Data/newsData.tsx";
// import fondos from "../assets/fondos.png";
// import { useState } from "react";
// import concesionaria from "../assets/concesionaria.jpg";


// import WeatherWidget from "./Weather.tsx";

// interface NewsListProps {
//   activeSection: string;
//   featuredNews: NewsArticleType[];
//   secondaryNews: NewsArticleType[];
//   otherNews: NewsArticleType[];
//   filteredNews: NewsArticleType[];
//   handleViewArticle: (id: number) => void;
//   hasMoreNews?: boolean;
// }

// const NewsList: React.FC<NewsListProps> = ({
//   activeSection,
//   featuredNews,
//   secondaryNews,
//   otherNews,
//   filteredNews,
//   handleViewArticle,
//   hasMoreNews = true,
// }) => {
//   // Combinar todas las noticias para sección Rosario (excluyendo filteredNews)
//   const allRosarioNews = [...featuredNews, ...secondaryNews, ...otherNews];
//   const [showBreakingNews, setShowBreakingNews] = useState(true);
//   const [newsletterEmail, setNewsletterEmail] = useState("");

//   // Función para manejar suscripción al newsletter
//   const handleNewsletterSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     alert(
//       `¡Gracias por suscribirte con ${newsletterEmail}! Recibirás nuestras actualizaciones pronto.`
//     );
//     setNewsletterEmail("");
//   };

//   return (
//     <>
//       <WeatherWidget />
//       {/* Breaking News Banner */}
//       {showBreakingNews && (
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
//   className="text-xs underline hover:no-underline ml-2 mr-4"
//   onClick={() => handleViewArticle(allRosarioNews[1].id)}
// >
//   Leer más
// </button>
//           </div>
//         </div>
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
//         <h2 className="text-2xl font-bold text-gray-800">{activeSection}</h2>
//         <div className="ml-3 flex-grow h-px bg-gray-300"></div>
//       </div>

//       {activeSection === "Rosario" && (
//         <>
//           {/* Primera sección: 1 grande + 2 pequeñas */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//             {/* Artículo grande (primera posición) */}
//             {allRosarioNews.length > 0 && (
//               <div className="lg:col-span-2">
//                 <div
//                   className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
//                   onClick={() => handleViewArticle(allRosarioNews[0].id)}
//                 >
//                   <div className="relative">
//                     <img
//                       src={allRosarioNews[0].imageUrl || fondos}
//                       alt={allRosarioNews[0].title}
//                       className="w-full h-64 object-cover"
//                     />
//                     <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 text-xs font-bold rounded">
//                       DESTACADO
//                     </div>
//                   </div>
//                   <div className="p-5">
//                     <div className="flex justify-between items-center mb-1">
//                       <span className="text-xs font-semibold text-blue-600">
//                         {allRosarioNews[0].category}
//                       </span>
//                       <div className="flex items-center space-x-2">
//                         <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                         <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                       </div>
//                     </div>
//                     <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
//                       {allRosarioNews[0].title}
//                     </h2>
//                     <p className="text-gray-600 mt-3">
//                       {allRosarioNews[0].summary}
//                     </p>
//                     <div className="flex justify-between items-center mt-4">
//                       <div className="text-sm text-gray-500">
//                         {allRosarioNews[0].date}
//                       </div>
//                       <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                         5 min de lectura
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}

//             {/* Columna de 2 artículos pequeños (vertical) */}
//             <div className="space-y-6">
//               {allRosarioNews.slice(1, 3).map((article) => (
//                 <div
//                   key={article.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                   onClick={() => handleViewArticle(article.id)}
//                 >
//                   <img
//                     src={article.imageUrl || fondos}
//                     alt={article.title}
//                     className="w-full h-36 object-cover"
//                   />
//                   <div className="p-3">
//                     <div className="flex justify-between items-center">
//                       <span className="text-xs font-semibold text-blue-600">
//                         {article.category}
//                       </span>
//                       <Share2 className="h-3 w-3 text-gray-500 cursor-pointer hover:text-blue-600" />
//                     </div>
//                     <h3 className="font-bold text-sm mt-1 hover:text-blue-700">
//                       {article.title}
//                     </h3>
//                     <div className="mt-2 text-xs text-gray-500">
//                       {article.date}
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Banner Publicitario */}
//           <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-center p-4 rounded-lg shadow-md mb-8 relative">
//             <span className="absolute top-1 right-2 text-xs text-gray-800 opacity-70">
//               Publicidad
//             </span>
//             <div className="flex justify-between items-center">
//               <div className="w-1/4">
//                 <div className="bg-white rounded-full h-20 w-20 flex items-center justify-center mx-auto">
//                   <span className="text-yellow-500 text-xl font-bold">
//                     BANCO
//                   </span>
//                 </div>
//               </div>
//               <div className="w-2/4 text-white">
//                 <h3 className="font-bold text-xl mb-2">¡OFERTA ESPECIAL!</h3>
//                 <p>Préstamos personales con tasa preferencial del 20% anual.</p>
//                 <p className="text-sm mt-1">
//                   Solo durante Abril. Consulta condiciones.
//                 </p>
//               </div>
//               <div className="w-1/4">
//                 <button className="bg-white text-yellow-600 font-bold py-2 px-4 rounded-full hover:bg-gray-100">
//                   ¡Solicitar ya!
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Segunda sección: 3 noticias medianas */}
//           {allRosarioNews.length > 3 && (
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
//               {allRosarioNews.slice(3, 6).map((article) => (
//                 <div
//                   key={article.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                   onClick={() => handleViewArticle(article.id)}
//                 >
//                   <img
//                     src={article.imageUrl || fondos}
//                     alt={article.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <div className="flex justify-between">
//                       <span className="text-xs font-semibold text-blue-600">
//                         {article.category}
//                       </span>
//                       <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                     </div>
//                     <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-2">
//                       {article.summary}
//                     </p>
//                     <div className="flex justify-between mt-3">
//                       <div className="text-xs text-gray-500">
//                         {article.date}
//                       </div>
//                       <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                         3 min
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Newsletter Subscription */}
//           <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
//             <div className="flex flex-col md:flex-row items-center">
//               <div className="md:w-2/3 mb-4 md:mb-0">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">
//                   Mantente informado
//                 </h3>
//                 <p className="text-gray-600">
//                   Suscríbete a nuestro newsletter diario y recibe las noticias
//                   más importantes en tu email.
//                 </p>
//               </div>
//               <div className="md:w-1/3">
//                 <form onSubmit={handleNewsletterSubmit} className="flex">
//                   <input
//                     type="email"
//                     placeholder="Tu email"
//                     value={newsletterEmail}
//                     onChange={(e) => setNewsletterEmail(e.target.value)}
//                     className="flex-grow px-4 py-2 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//                     required
//                   />
//                   <button
//                     type="submit"
//                     className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
//                   >
//                     Suscribir
//                   </button>
//                 </form>
//               </div>
//             </div>
//           </div>

//           {/* Tercera sección: 1 grande a la derecha + 2 pequeñas a la izquierda (invertido) */}
//           {allRosarioNews.length > 6 && (
//             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
//               {/* 2 artículos pequeños a la izquierda */}
//               <div className="space-y-6">
//                 {allRosarioNews.slice(7, 9).map((article) => (
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
//                       <div className="flex justify-between">
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

//               {/* Artículo grande a la derecha */}
//               {allRosarioNews.length > 6 && (
//                 <div className="lg:col-span-2">
//                   <div
//                     className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer h-full"
//                     onClick={() => handleViewArticle(allRosarioNews[6].id)}
//                   >
//                     <div className="relative">
//                       <img
//                         src={allRosarioNews[6].imageUrl || fondos}
//                         alt={allRosarioNews[6].title}
//                         className="w-full h-64 object-cover"
//                       />
//                       <div className="absolute top-2 left-2 bg-green-600 text-white px-2 py-1 text-xs font-bold rounded">
//                         POPULAR
//                       </div>
//                     </div>
//                     <div className="p-5">
//                       <div className="flex justify-between items-center mb-1">
//                         <span className="text-xs font-semibold text-blue-600">
//                           {allRosarioNews[6].category}
//                         </span>
//                         <div className="flex items-center space-x-2">
//                           <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                           <Bell className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                         </div>
//                       </div>
//                       <h2 className="font-bold text-xl mt-1 hover:text-blue-700">
//                         {allRosarioNews[6].title}
//                       </h2>
//                       <p className="text-gray-600 mt-3">
//                         {allRosarioNews[6].summary}
//                       </p>
//                       <div className="flex justify-between items-center mt-4">
//                         <div className="text-sm text-gray-500">
//                           {allRosarioNews[6].date}
//                         </div>
//                         <div className="flex items-center text-xs">
//                           <span className="bg-gray-100 px-2 py-1 rounded-full mr-2">
//                             4 min
//                           </span>
//                           <span className="text-red-500">♥ 128</span>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           )}

//           {/* Banner publicitario horizontal */}
//           <div className="bg-gray-100 p-3 text-center rounded-lg shadow-sm mb-8 relative">
//             <span className="absolute top-1 right-2 text-xs text-gray-500">
//               Publicidad
//             </span>
//             <div className="flex items-center justify-center">
//               <div className="w-1/6 text-right pr-4">
//                 <img
//                   src={concesionaria}
//                   alt="Concesionario"
//                   className="inline-block rounded"
//                 />
//               </div>
//               <div className="w-5/6 text-left">
//                 <h4 className="font-bold text-red-600">
//                   ¡GRAN LIQUIDACIÓN DE TEMPORADA!
//                 </h4>
//                 <p className="text-gray-700">
//                   Encontrá los mejores precios en autos 0km y usados
//                   certificados.
//                 </p>
//                 <div className="mt-1">
//                   <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
//                     Ver ofertas
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Cuarta sección: grid de 2 columnas para el resto de noticias */}
//           {allRosarioNews.length > 9 && (
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
//               {allRosarioNews.slice(9).map((article) => (
//                 <div
//                   key={article.id}
//                   className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
//                   onClick={() => handleViewArticle(article.id)}
//                 >
//                   <img
//                     src={article.imageUrl || fondos}
//                     alt={article.title}
//                     className="w-full h-48 object-cover"
//                   />
//                   <div className="p-4">
//                     <div className="flex justify-between items-center">
//                       <span className="text-xs font-semibold text-blue-600">
//                         {article.category}
//                       </span>
//                       <Share2 className="h-4 w-4 text-gray-500 cursor-pointer hover:text-blue-600" />
//                     </div>
//                     <h3 className="font-bold text-lg mt-1 hover:text-blue-700">
//                       {article.title}
//                     </h3>
//                     <p className="text-gray-600 text-sm mt-2">
//                       {article.summary}
//                     </p>
//                     <div className="flex justify-between items-center mt-3">
//                       <div className="text-xs text-gray-500">
//                         {article.date}
//                       </div>
//                       <div className="text-xs bg-gray-100 px-2 py-1 rounded-full">
//                         2 min
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </>
//       )}

//       {/* Filtered section content */}
//       {activeSection !== "Rosario" && (
//         <>
//           {/* Banner publicitario específico de sección */}
//           <div
//             className={`bg-gradient-to-r ${
//               activeSection === "Deportes"
//                 ? "from-green-500 to-green-700"
//                 : "from-purple-500 to-purple-700"
//             } text-white p-4 rounded-lg shadow-md mb-6 relative`}
//           >
//             <span className="absolute top-1 right-2 text-xs text-white opacity-70">
//               Publicidad
//             </span>
//             <div className="flex items-center justify-between">
//               <div className="w-1/5">
//                 <img
//                   src="/api/placeholder/80/80"
//                   alt="Logo publicidad"
//                   className="rounded-full bg-white p-2"
//                 />
//               </div>
//               <div className="w-3/5 text-center">
//                 <h3 className="font-bold text-xl">
//                   {activeSection === "Deportes"
//                     ? "¡Equipate para el partido!"
//                     : "¡50% OFF en suscripción digital!"}
//                 </h3>
//                 <p className="text-sm mt-1">
//                   {activeSection === "Deportes"
//                     ? "Descuentos exclusivos en indumentaria deportiva"
//                     : "Acceso ilimitado a todo nuestro contenido premium"}
//                 </p>
//               </div>
//               <div className="w-1/5 text-right">
//                 <button className="bg-white text-gray-800 font-bold py-2 px-4 rounded hover:bg-gray-100">
//                   Ver más
//                 </button>
//               </div>
//             </div>
//           </div>

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

//                 {/* Insertar publicidad entre artículos */}
//                 {filteredNews.length > 5 && (
//                   <div className="md:col-span-2 lg:col-span-3 bg-gray-50 rounded-lg p-4 border border-gray-200 mb-6">
//                     <div className="text-xs text-gray-500 text-right mb-1">
//                       Publicidad
//                     </div>
//                     <div className="flex flex-col md:flex-row items-center justify-between">
//                       <div className="w-full md:w-1/5 mb-4 md:mb-0 text-center">
//                         <img
//                           src="/api/placeholder/100/100"
//                           alt="Logo promoción"
//                           className="inline-block rounded"
//                         />
//                       </div>
//                       <div className="w-full md:w-2/5 text-center md:text-left mb-4 md:mb-0">
//                         <h4 className="font-bold text-lg text-gray-800">
//                           ¿Querés impulsar tu negocio?
//                         </h4>
//                         <p className="text-gray-600">
//                           Anunciá en nuestro portal y llegá a miles de lectores
//                           diarios
//                         </p>
//                       </div>
//                       <div className="w-full md:w-2/5 text-center">
//                         <button className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700">
//                           Conocer más
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
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

//       {/* Trending Topics */}
//       <div className="mt-8 mb-4">
//         <h3 className="font-bold text-gray-800 mb-2 flex items-center">
//           <TrendingUp className="h-4 w-4 mr-2" /> Temas Populares
//         </h3>
//         <div className="flex flex-wrap gap-2">
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #Rosario
//           </span>
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #Inflación
//           </span>
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #Messi
//           </span>
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #Educación
//           </span>
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #DólarHoy
//           </span>
//           <span className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full text-sm cursor-pointer">
//             #Tecnología
//           </span>
//         </div>
//       </div>

//       {/* More news button */}
//       <div className="mt-8 text-center">
//         <button
//           className={`
//             ${
//               hasMoreNews
//                 ? "bg-blue-600 hover:bg-blue-700"
//                 : "bg-gray-400 cursor-not-allowed"
//             } 
//             text-white font-medium px-6 py-2 rounded-full inline-flex items-center
//           `}
//           onClick={() => hasMoreNews && console.log("Cargar más noticias")}
//           disabled={!hasMoreNews}
//         >
//           Más noticias <ChevronRight className="ml-1 h-4 w-4" />
//         </button>
//       </div>
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
const AdBanner: React.FC<{ src: string; alt: string; className?: string }> = ({
  src,
  alt,
  className = "",
}) => (
  <div className={`bg-gray-100 rounded-lg shadow-md overflow-hidden mb-6 ${className}`}>
    {/* <div className="text-xs text-gray-500 text-center py-1 bg-gray-200">
      PUBLICIDAD
    </div> */}
    <img
      src={src}
      alt={alt}
      className="w-full h-auto object-cover cursor-pointer hover:opacity-90 transition-opacity"
    />
  </div>
);

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