import { Nav } from './Navigation/Nav';
import headerImg from '../assets/img/headerImage.jpg';

export function Header() {
  return (
    <header className="">
      <div className="flex h-14 bg-gradient-to-b from-orange-700 via-red-800 to-red-900">
        <div className="flex-initial border">
          <Nav />
        </div>
        <div className="flex-1 m-auto h-14 border">
          <div className="m-auto flex w-full text-center justify-center">
            <h1 className="text-white">Pokemon Moon</h1>
          </div>
        </div>
        <div className="flex-initial m-auto h-14 border">SEARCH</div>
      </div>
      <div className="h-80 border">
        <div className="w-full h-80 object-cover">
          <img
            src={headerImg}
            alt="header image"
            className="image w-full h-80 object-cover"
          />
        </div>
      </div>
    </header>
  );
}
