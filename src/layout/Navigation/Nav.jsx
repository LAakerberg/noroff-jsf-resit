import { Link } from 'react-router-dom';

export function Nav() {
  return (
    <nav className="w-full">
      <div className="flex h-14">
        <ul className="m-auto flex w-full">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/pokemon">Pokemon</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
