import { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sections } from '../utils/constants';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  searchQuery?: string;
  setSearchQuery?: (query: string) => void;
  handleSearch?: (query: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  activeSection,
  setActiveSection,
  searchQuery = "",
  setSearchQuery = () => {},
  handleSearch = () => {}
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  // Actualizar la búsqueda local cuando cambia la búsqueda externa
  useEffect(() => {
    setLocalSearchQuery(searchQuery);
  }, [searchQuery]);

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    setMobileMenuOpen(false);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch(localSearchQuery);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearchQuery(e.target.value);
    setSearchQuery(e.target.value);
  };

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" onClick={() => handleSectionClick('Rosario')}>
            <img className="h-10 w-60" src={logo} alt="Petit Financieros" />
          </Link>

          {/* Search bar - desktop */}
          <form onSubmit={handleSearchSubmit} className="hidden md:flex items-center border rounded-full px-3 py-1 bg-gray-100 w-64">
            <input
              type="text"
              placeholder="Buscar noticias..."
              className="bg-transparent outline-none flex-grow text-sm"
              value={localSearchQuery}
              onChange={handleInputChange}
            />
            <button type="submit" className="focus:outline-none">
              <Search className="h-4 w-4 text-gray-500" />
            </button>
          </form>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Navigation desktop */}
        <nav className="hidden md:flex mt-4 space-x-6 overflow-x-auto pb-2">
          {sections.map(section => (
            <button
              key={section}
              className={`text-sm font-medium whitespace-nowrap transition ${
                activeSection === section
                  ? 'text-blue-700 border-b-2 border-blue-700'
                  : 'text-gray-600 hover:text-blue-700'
              }`}
              onClick={() => handleSectionClick(section)}
            >
              {section}
            </button>
          ))}
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 bg-white p-4 rounded shadow-lg absolute left-0 right-0 z-10">
            <form onSubmit={handleSearchSubmit} className="flex items-center border rounded-full px-3 py-1 bg-gray-100 mb-4">
              <input
                type="text"
                placeholder="Buscar noticias..."
                className="bg-transparent outline-none flex-grow text-sm"
                value={localSearchQuery}
                onChange={handleInputChange}
              />
              <button type="submit" className="focus:outline-none">
                <Search className="h-4 w-4 text-gray-500" />
              </button>
            </form>

            <div className="flex flex-col space-y-3">
              {sections.map(section => (
                <button
                  key={section}
                  className={`text-sm font-medium text-left px-2 py-1 rounded ${
                    activeSection === section
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600'
                  }`}
                  onClick={() => handleSectionClick(section)}
                >
                  {section}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;