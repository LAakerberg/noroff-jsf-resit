import { Nav } from './Navigation/Nav';
/* import headerImg from '../assets/img/headerImage.jpg'; */
import videoBg2 from '../assets/vid/pokemon_-_111535_Original.mp4';

export function Header() {
  return (
    <header className="relative">
      <div className="absolute z-10 w-full flex h-14 bg-gradient-to-b from-red-700/90 via-red-800/90 to-red-900/90 backdrop-blur-sm">
        <div className="flex-initial z-20">
          <Nav />
        </div>
        <div className="flex-1 m-auto h-14">
          <div className="m-auto flex w-full text-center justify-center">
            <h1 className="text-white uppercase">Pokémon Moon</h1>
          </div>
        </div>
        <div className="hidden lg:block flex-initial m-auto h-14 w-52"></div>
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
          {/*           <img
            src={headerImg}
            alt="header image"
            className="image w-full h-80 object-cover"
          /> */}
        </div>
      </div>
    </header>
  );
}
