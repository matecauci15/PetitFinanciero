// Home.tsx
import { useState, useEffect } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import Header from '../Components/Header.tsx';
import NewsList from '../Components/NewsList.tsx';
import Footer from '../Components/Footer.tsx';
import { featuredNews, secondaryNews, otherNews, NewsArticleType } from '../Data/newsData.tsx';
import { sections } from '../utils/constants';

const Home = () => {
  const navigate = useNavigate();
  const { section } = useParams<{ section?: string }>();
  const [searchParams] = useSearchParams();
  
  // Estados
  const [activeSection, setActiveSection] = useState<string>('Rosario');
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<NewsArticleType[]>([]);
  const [filteredNews, setFilteredNews] = useState<NewsArticleType[]>([]);

  useEffect(() => {
    const matchedSection = sections.find(
      (s) => s.toLowerCase() === section?.toLowerCase()
    );
  
    if (matchedSection) {
      setActiveSection(matchedSection);
    } else if (section) {
      // Si se escribió mal la sección, redirigimos
      navigate('/', { replace: true });
      setActiveSection('Rosario');
    } else {
      setActiveSection('Rosario');
    }
  }, [section, navigate]);


  // Efecto para manejar búsquedas desde la URL
  useEffect(() => {
    const query = searchParams.get('q');
    if (query) {
      setSearchQuery(query);
      performSearch(query);
    } else {
      // Si no hay búsqueda, limpiamos los resultados
      setSearchQuery('');
      setSearchResults([]);
    }
  }, [searchParams]);

  // Efecto para actualizar las noticias filtradas cuando cambia la sección activa o los resultados de búsqueda
  useEffect(() => {
    
    if (activeSection === 'Resultados') {
      setFilteredNews(searchResults);
    } else {
      // Si estamos en Rosario, mostramos todas las noticias o filtramos por categoría
      const filtered = [...featuredNews, ...secondaryNews, ...otherNews].filter(
        news => activeSection === 'Rosario' || news.category === activeSection
      );
      setFilteredNews(filtered);
    }
  }, [activeSection, searchResults]);

  // Función para realizar búsqueda
  const performSearch = (query: string) => {
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

  // Función para cambiar sección
  const handleSectionChange = (newSection: string) => {
    
    if (newSection === 'Rosario') {
      navigate('/');
    } else {
      navigate(`/${newSection.toLowerCase()}`);
    }
  };

  // Función para manejar búsqueda desde componente Header
  const handleSearch = (query: string) => {
    if (!query.trim()) {
      navigate('/');
      return;
    }
    
    navigate(`/?q=${encodeURIComponent(query)}`);
  };

  // Función para ver artículo completo
  const handleViewArticle = (articleId: number) => {
    navigate(`/article/${articleId}`);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header 
        activeSection={activeSection} 
        setActiveSection={handleSectionChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      
      <main className="container mx-auto px-4 py-6 flex-grow">
        <NewsList 
          activeSection={activeSection === 'Resultados' ? `Resultados para "${searchQuery}"` : activeSection}
          featuredNews={featuredNews}
          secondaryNews={secondaryNews}
          otherNews={otherNews}
          filteredNews={filteredNews}
          handleViewArticle={handleViewArticle}
        />
      </main>
      
      <Footer setActiveSection={handleSectionChange} />
    </div>
  );
};

export default Home;