import { useState, useEffect } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

/**
 * Renders a component displaying specific details of a Pokémon.
 *
 * @param {Object} details - The details of the Pokémon.
 * @returns {JSX.Element} The rendered specific Pokémon component.
 */
export function SpecificPokemon({ details }) {
  const pokemon = details.data;

  const [abilitiesOpen, setAbilitiesOpen] = useState(false);
  const [attacksOpen, setAttacksOpen] = useState(false);

  useEffect(() => {
    document.title = `Pokémon | ${pokemon?.name}`;
  }, []);

  /**
   * Toggles the display of abilities.
   */
  const toggleAbilities = () => {
    setAbilitiesOpen(!abilitiesOpen);
  };

  /**
   * Toggles the display of attacks.
   */
  const toggleAttacks = () => {
    setAttacksOpen(!attacksOpen);
  };

  return (
    <>
      {/* Pokémon details */}
      <div className="flex flex-col w-full fade-in">
        {/* Pokémon name and type */}
        <div className="flex flex-col sm:flex-row p-2 m-2 bg-slate-200 border border-slate-400 rounded-xl">
          <div className="flex-initial">
            <div>
              <div>
                <h2>{pokemon?.name}</h2>
              </div>
              <div>
                <p className="italic underline underline-offset-2">
                  {pokemon?.types}
                </p>
              </div>
            </div>
          </div>
          {/* HP and level */}
          <div className="flex-initial m-auto"></div>
          <div className="flex-1 m-auto justify-end text-right pr-2">
            <div>
              <p className="text-lg">
                HP. <span className="font-bold text-3xl">{pokemon?.hp}</span>
              </p>
            </div>
            {pokemon?.level && (
              <div>
                <p className="text-lg sm:pl-4">
                  LV.{' '}
                  <span className="font-bold text-3xl">{pokemon.level}</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pokémon image and abilities */}
        <div className="flex flex-col md:flex-row">
          {/* Pokémon image */}
          <div className="flex-initial w-40 mobile:w-72 lg:w-96 hover:w-full md:hover:w-1/2 lg:hover:w-1/2 xl:hover:w-2/5 mobile:hover:w-11/12 2xl:hover:w-1/4 hover:z-20 transition-all p-2 cursor-pointer m-auto mt-0">
            <div>
              <img
                src={pokemon?.images.large}
                alt="Image of the pokemon"
                className="w-full rounded-xl"
              />
            </div>
          </div>

          {/* Pokémon abilities */}
          <div className="flex-1 p-2" id="dynamic-bg">
            <div className="flex flex-col m-auto">
              {/* Abilities header */}
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-3xl">
                <div className="flex-1 m-auto justify-center text-center">
                  <h3>Abilities</h3>
                </div>
                {/* Toggle abilities button */}
                <div className="flex-initial">
                  <button
                    className={`arrow-button ${abilitiesOpen ? 'open' : ''}`}
                    onClick={toggleAbilities}
                    id=""
                  >
                    <TiArrowSortedDown />
                  </button>
                </div>
              </div>

              {/* Abilities content */}
              <div className="flex flex-col p-2">
                <div className="">
                  {abilitiesOpen && (
                    <>
                      <div className="bg-slate-100 border border-slate-400 rounded-lg">
                        <div>
                          {pokemon.abilities && pokemon.abilities.length > 0 ? (
                            pokemon.abilities.map((pokeAbilities, index) => (
                              <div key={index} className="p-1">
                                <div className="p-1">
                                  <div className="text-center">
                                    <p className="text-lg font-bold">
                                      {pokeAbilities.type} -{' '}
                                      {pokeAbilities.name}
                                    </p>
                                  </div>
                                </div>
                                <p>{pokeAbilities.text}</p>
                              </div>
                            ))
                          ) : (
                            <p className="p-2">No abilities found.</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Pokémon attacks */}
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 mt-2 rounded-3xl">
                <div className="flex-1 m-auto justify-center text-center">
                  <h3>Attacks</h3>
                </div>
                {/* Toggle attacks button */}
                <div className="flex-initial">
                  <button
                    className={`arrow-button ${attacksOpen ? 'open' : ''}`}
                    onClick={toggleAttacks}
                    id=""
                  >
                    <TiArrowSortedDown />
                  </button>
                </div>
              </div>

              {/* Attacks content */}
              <div className="flex flex-col p-2">
                <div>
                  {attacksOpen && (
                    <>
                      <div className="bg-slate-100 border border-slate-400 rounded-lg">
                        <div>
                          {pokemon.attacks && pokemon.attacks.length > 0 ? (
                            pokemon.attacks.map((pokeAttacks, index) => (
                              <div key={index} className="p-1">
                                <div className="m-1">
                                  <div className="text-center">
                                    <p className="text-lg font-bold">
                                      {pokeAttacks.name}
                                    </p>
                                  </div>
                                </div>
                                <p>{pokeAttacks.text}</p>
                                <div className="flex justify-center w-full m-auto">
                                  {pokeAttacks.damage && (
                                    <div className="bg-orange-400 h-10 w-32 rounded-full flex items-center justify-center m-2">
                                      <p className="text-center font-bold">
                                        Damage: {pokeAttacks.damage}
                                      </p>
                                    </div>
                                  )}
                                </div>
                              </div>
                            ))
                          ) : (
                            <p className="p-2">No attacks found.</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>

              {/* Pokémon weaknesses, resistances, and retreat */}
              <div className="flex flex-col md:flex-row w-full m-auto outline outline-1 rounded-lg mt-6">
                {/* Weaknesses */}
                <div className="flex-1 bg-slate-100 p-2">
                  <div>
                    <p className="text-lg font-bold">Weaknesses</p>
                  </div>
                  {pokemon?.weaknesses && pokemon?.weaknesses.length > 0 ? (
                    <div>
                      {pokemon?.weaknesses.map((pokeWeaknesses, index) => (
                        <div key={index}>
                          <div>
                            {pokeWeaknesses?.type} {pokeWeaknesses?.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No weaknesses</p>
                  )}
                </div>

                {/* Resistances */}
                <div className="flex-1 bg-red-100 p-2">
                  <div>
                    <p className="text-lg font-bold">Resistance</p>
                  </div>
                  {pokemon?.resistances && pokemon?.resistances.length > 0 ? (
                    <div>
                      {pokemon?.resistances.map((pokeResistances, index) => (
                        <div key={index}>
                          <div>
                            {pokeResistances?.type} {pokeResistances?.value}
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No resistance</p>
                  )}
                </div>

                {/* Retreat */}
                <div className="flex-1 bg-yellow-100 p-2">
                  <div>
                    <p className="text-lg font-bold">Retreat</p>
                  </div>
                  {pokemon?.retreatCost && pokemon.retreatCost.length > 0 ? (
                    <div>
                      {Object.entries(
                        pokemon.retreatCost.reduce((count, retreatCost) => {
                          count[retreatCost] = (count[retreatCost] || 0) + 1;
                          return count;
                        }, {})
                      ).map(([retreatType, count]) => (
                        <div key={retreatType}>
                          <div>{`${retreatType} x${count}`}</div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>No retreat cost</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
