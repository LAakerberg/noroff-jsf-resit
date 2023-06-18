import { Link } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';

/**
 * Renders a navigation component with a toggle able menu.
 *
 * @returns {JSX.Element} The rendered navigation component.
 */
export function Nav() {
  /**
   * State variable to track whether the menu is currently open or closed.

   */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Toggles the state of the menu between open and closed.

   */
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  /**
   * Closes the menu by setting the `isMenuOpen` state to `false`.

   */
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav>
      <div className="">
        {/* Renders a link to the home page and closes the menu when clicked. */}
        <Link to="/" className="" onClick={closeMenu}>
          <h1 className="text-white uppercase">Pokémon Moon</h1>
        </Link>
      </div>
      <div className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
        <ul>
          <li>
            {/* Renders a link to the home page and closes the menu when clicked. */}
            <Link to="/" className="links" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            {/* Renders a link to the contact page and closes the menu when clicked. */}
            <Link to="/contact" className="links" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {/* Renders a hamburger menu icon if the menu is closed, or a close icon if the menu is open. */}
        {isMenuOpen ? <IoClose /> : <GiHamburgerMenu />}
      </div>
    </nav>
  );
}
