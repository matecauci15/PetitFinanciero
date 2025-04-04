// import { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { ArrowLeft } from 'lucide-react';
// import Header from '../Components/Header';
// import Footer from '../Components/Footer';
// import NewsArticle from '../Components/NewsArticle';
// import { featuredNews, secondaryNews } from '../Data/newsData';

// const Article = () => {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const [article, setArticle] = useState<any>(null);


  
//   useEffect(() => {
//     const articleId = parseInt(id || '0');
//     const foundArticle = [...featuredNews, ...secondaryNews].find(
//       article => article.id === articleId
//     );
    
//     if (foundArticle) {
//       setArticle(foundArticle);
//     } else {
//       navigate('/');
//     }
//   }, [id, navigate]);
  
//   const handleBackToNews = () => {
//     navigate('/PetitFinancieros/'); 
//     // window.scrollTo(0, 0);
//   };
  
//   if (!article) {
//     return <div>Loading...</div>;
//   }
  
//   return (
//     <>
//       <Header 
//         activeSection="" 
//         setActiveSection={() => {}} 
//       />
      
//       <main className="container mx-auto px-4 py-6">
//         <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
//           <button 
//             onClick={handleBackToNews}
//             className="flex items-center text-blue-600 hover:text-blue-800 p-4"
//           >
//             <ArrowLeft className="h-4 w-4 mr-1" /> Volver a noticias
//           </button>
          
//           <NewsArticle article={article} />
//         </div>
//       </main>
      
//       <Footer setActiveSection={() => {}} />
//     </>
//   );
// };

// export default Article;

import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import NewsArticle from '../Components/NewsArticle';
import { featuredNews, secondaryNews, otherNews ,NewsArticleType } from '../Data/newsData';

const Article = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState<NewsArticleType | null>(null);
  
  useEffect(() => {
    const articleId = parseInt(id || '0');
    const foundArticle = [...featuredNews, ...secondaryNews, ...otherNews].find(
      article => article.id === articleId
    );
    
    if (foundArticle) {
      setArticle(foundArticle);
    } else {
      navigate('/');
    }
  }, [id, navigate]);
  
  const handleBackToNews = () => {
    navigate('/PetitFinancieros/'); 
    // window.scrollTo(0, 0);
  };
  
  if (!article) {
    return <div>Loading...</div>;
  }
  
  return (
    <>
      <Header 
        activeSection="" 
        setActiveSection={() => {}} 
      />
      
      <main className="container mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-md overflow-hidden max-w-4xl mx-auto">
          <button 
            onClick={handleBackToNews}
            className="flex items-center text-blue-600 hover:text-blue-800 p-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Volver a noticias
          </button>
          
          <NewsArticle article={article} />
        </div>
      </main>
      
      <Footer setActiveSection={() => {}} />
    </>
  );
};

export default Article;