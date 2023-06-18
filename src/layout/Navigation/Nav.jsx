import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

export function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="">
        <h1 className="text-white uppercase">Pokémon Moon</h1>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
        <ul>
          <li>
            <Link to="/" className="links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/pokemon" className="links" onClick={closeMenu}>
              Pokemon
            </Link>
          </li>
          <li>
            <Link to="/contact" className="links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
}
