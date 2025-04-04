import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { sections } from '../utils/constants';


interface FooterProps {
  setActiveSection: (section: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setActiveSection }) => {
  const handleSectionClick = (section: string) => {
    setActiveSection(section);
    window.scrollTo(0, 0);
  };

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <Link to="/PetitFinancieros/" className="flex items-center space-x-2 mb-4">
              <img 
                src={logo} 
                alt="Petit Financieros" 
                className="h-10 w-60"
              />
            </Link>
            <p className="text-gray-400 text-sm">
              Tu fuente confiable para noticias financieras y generales de la región.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h5 className="font-medium mb-3">Secciones</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {sections.slice(0, 3).map(section => (
                  <li 
                    key={section} 
                    className="hover:text-white cursor-pointer"
                    onClick={() => handleSectionClick(section)}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Más secciones</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                {sections.slice(3, 6).map(section => (
                  <li 
                    key={section} 
                    className="hover:text-white cursor-pointer"
                    onClick={() => handleSectionClick(section)}
                  >
                    {section}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h5 className="font-medium mb-3">Enlaces</h5>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="hover:text-white cursor-pointer">Sobre nosotros</li>
                <li className="hover:text-white cursor-pointer">Contacto</li>
                <li className="hover:text-white cursor-pointer">Términos y condiciones</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-700 text-center text-sm text-gray-500">
          © 2025 Petit Financieros. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;