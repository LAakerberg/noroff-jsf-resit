import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className=" bg-gray-800 py-10">
      <div className="flex flex-col tablet:flex-row divide-y tablet:divide-y-0 justify-evenly gap-4 m-auto p-2">
        <div className="flex-initial">
          <div className="w-fit">
            <p className="text-xl font-bold text-white">Pokémon Moon Company</p>
            <p className="text-white">Norwegian based company</p>
            <p className="text-white text-sm italic">©2023 Pokémon Moon</p>
          </div>
        </div>

        <div className="flex-initial">
          <div className="w-fit">
            <p className="text-xl font-bold text-white">Contact us</p>
            <Link to="/contact" className="links text-white text-sm">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
