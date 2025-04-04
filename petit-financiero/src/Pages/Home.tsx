import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Components/Header.tsx';
import NewsList from '../Components/NewsList.tsx';
import Footer from '../Components/Footer.tsx';
import { featuredNews, secondaryNews, otherNews } from '../Data/newsData.tsx';

const Home = () => {
  const [activeSection, setActiveSection] = useState('Rosario');
  const navigate = useNavigate();

  // Handle viewing full article
  const handleViewArticle = (articleId: number) => {
    navigate(`/PetitFinancieros/article/${articleId}`);
    window.scrollTo(0, 0);
  };

  // Filter news by active section
  const filteredNews = [...featuredNews, ...secondaryNews, ...otherNews].filter(
    news => activeSection === 'Rosario' || news.category === activeSection
  );

  return (
    <>
      <Header 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
      
      <main className="container mx-auto px-4 py-6">
        <NewsList 
          activeSection={activeSection}
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