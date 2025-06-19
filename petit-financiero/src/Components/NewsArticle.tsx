// import { NewsArticleType } from '../Data/newsData';

// interface NewsArticleProps {
//   article: NewsArticleType;
// }

// const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
//   return (
//     <>
//       <img 
//         src={article.imageUrl} 
//         alt={article.title} 
//         className="w-full h-64 md:h-96 object-cover"
//       />

//       <div className="p-6">
//         <div className="flex items-center mb-4">
//           <span className="text-sm font-semibold text-blue-600 mr-3">
//             {article.category}
//           </span>
//           <span className="text-sm text-gray-500">
//             {article.date}
//           </span>
//         </div>

//         <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
//           {article.title}
//         </h1>

//         <div className="prose max-w-none text-gray-700">
//           {article.content.split('\n\n').map((paragraph, index) => (
//             <p key={index} className="mb-4">{paragraph}</p>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default NewsArticle;

import { NewsArticleType } from '../Data/newsData';

interface NewsArticleProps {
  article: NewsArticleType;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
  
  // Función para renderizar el contenido con subtítulos
  const renderContent = (content: string) => {
    const paragraphs = content.split('\n\n');
    
    return paragraphs.map((paragraph, index) => {
      // Detectar si es un subtítulo con ##
      if (paragraph.startsWith('## ')) {
        return (
          <h2 key={index} className="text-xl md:text-2xl font-bold uppercase text-gray-800 mt-6 mb-3">
            {paragraph.replace('## ', '')}
          </h2>
        );
      }
      
      // Detectar si es un subtítulo con ###
      if (paragraph.startsWith('### ')) {
        return (
          <h3 key={index} className="text-lg md:text-xl font-bold text-gray-800 mt-5 mb-3">
            {paragraph.replace('### ', '')}
          </h3>
        );
      }
      
      // Detectar si es un subtítulo con ####
      if (paragraph.startsWith('#### ')) {
        return (
          <h4 key={index} className="text-base md:text-lg font-bold text-gray-800 mt-4 mb-2">
            {paragraph.replace('#### ', '')}
          </h4>
        );
      }
      
      // Si es un párrafo normal, renderizar texto con negritas
      if (paragraph.trim()) {
        return (
          <p key={index} className="mb-4 text-gray-700" 
             dangerouslySetInnerHTML={{
               __html: paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
             }}
          />
        );
      }
      
      return null;
    });
  };

  return (
    <>
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="w-full h-64 md:h-96 object-cover"
      />

      <div className="p-6">
        <div className="flex items-center mb-4">
          <span className="text-sm font-semibold text-blue-600 mr-3">
            {article.category}
          </span>
          <span className="text-sm text-gray-500">
            {article.date}
          </span>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {article.title}
        </h1>

        <div className="prose max-w-none">
          {renderContent(article.content)}
        </div>
      </div>
    </>
  );
};

export default NewsArticle;