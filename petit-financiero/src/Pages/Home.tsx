import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../Components/Header.tsx';
import NewsList from '../Components/NewsList.tsx';
import Footer from '../Components/Footer.tsx';
import { featuredNews, secondaryNews, otherNews, NewsArticleType } from '../Data/newsData.tsx';

const Home = () => {
  const [activeSection, setActiveSection] = useState('Rosario');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NewsArticleType[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Cargar búsqueda desde URL si existe
  useEffect(() => {
    const queryParam = searchParams.get('q');
    if (queryParam) {
      setSearchQuery(queryParam);
      handleSearch(queryParam);
      // Al hacer búsqueda, cambiar a una sección especial
      setActiveSection('Resultados');
    }
  }, [searchParams]);

  // Función para realizar búsqueda
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      setSearchQuery('');
      setSearchParams({});
      setActiveSection('Rosario');
      return;
    }

    // Actualizar parámetros de URL
    setSearchParams({ q: query });
    
    // Buscar en todas las noticias
    const allNews = [...featuredNews, ...secondaryNews, ...otherNews];
    const results = allNews.filter(news => {
      const searchLower = query.toLowerCase();
      return (
        news.title.toLowerCase().includes(searchLower) ||
        news.summary.toLowerCase().includes(searchLower) ||
        news.content?.toLowerCase().includes(searchLower) ||
        news.category.toLowerCase().includes(searchLower)
      );
    });

    setSearchResults(results);
    setActiveSection('Resultados');
  };

  // Handle viewing full article
  const handleViewArticle = (articleId: number) => {
    navigate(`/article/${articleId}`);
    window.scrollTo(0, 0);
  };

  // Filter news by active section or show search results
  const filteredNews = activeSection === 'Resultados'
    ? searchResults
    : [...featuredNews, ...secondaryNews, ...otherNews].filter(
        news => activeSection === 'Rosario' || news.category === activeSection
      );

  return (
    <>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <main className="container mx-auto px-4 py-6">
        <NewsList 
          activeSection={activeSection === 'Resultados' ? `Resultados para "${searchQuery}"` : activeSection}
          featuredNews={featuredNews}
          secondaryNews={secondaryNews}
          otherNews={otherNews}
          filteredNews={filteredNews}
          handleViewArticle={handleViewArticle}
        />
      </main>
      <Footer setActiveSection={setActiveSection} />
    </>
  );
};

export default Home;