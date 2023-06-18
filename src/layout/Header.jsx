import { Nav } from './Navigation/Nav';
import videoBg2 from '../assets/vid/pokemon_-_111535_Original.mp4';

export function Header() {
  return (
    <header className="relative">
      <div className="absolute z-10 w-full flex bg-gradient-to-b from-red-700/90 via-red-800/90 to-red-900/90 backdrop-blur-sm">
        <div className="flex-1 px-2 z-20">
          <Nav />
        </div>
      </div>
      <div className="h-72">
        <div className="w-full h-72 object-cover bg-gradient-to-b from-red-700 from-20% to-transparent to-60%">
          <video
            className="image w-full h-72 object-cover object-center bg-gradient-to-b from-orange-700/90 to-transparent"
            autoPlay
            loop
            muted
            playsInline
            src={videoBg2}
          />
        </div>
      </div>
    </header>
  );
}
