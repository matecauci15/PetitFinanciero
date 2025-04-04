import { NewsArticleType } from '../Data/newsData';

interface NewsArticleProps {
  article: NewsArticleType;
}

const NewsArticle: React.FC<NewsArticleProps> = ({ article }) => {
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
        
        <div className="prose max-w-none text-gray-700">
          {article.content.split('\n\n').map((paragraph, index) => (
            <p key={index} className="mb-4">{paragraph}</p>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsArticle;