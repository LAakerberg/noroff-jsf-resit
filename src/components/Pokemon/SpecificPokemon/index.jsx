import { useState } from 'react';
import { TiArrowSortedDown } from 'react-icons/ti';

export function SpecificPokemon({ details }) {
  const pokemon = details.data;

  const [abilitiesOpen, setAbilitiesOpen] = useState(false);
  const [attacksOpen, setAttacksOpen] = useState(false);

  const toggleAbilities = () => {
    setAbilitiesOpen(!abilitiesOpen);
  };

  const toggleAttacks = () => {
    setAttacksOpen(!attacksOpen);
  };

  return (
    <>
      <div className="flex flex-col w-full">
        <div className="flex flex-col sm:flex-row p-2 m-2 bg-slate-200 rounded-xl">
          <div className="flex-initial">
            <h2>{pokemon?.name}</h2>
          </div>
          <div className="flex-initial m-auto">
            {pokemon?.level && (
              <p className="text-lg sm:pl-4">
                LV. <span className="font-bold text-3xl">{pokemon.level}</span>
              </p>
            )}
          </div>
          <div className="flex-1 m-auto justify-end text-right pr-2">
            <p className="text-lg">
              HP. <span className="font-bold text-3xl">{pokemon?.hp}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="flex-initial w-72 lg:w-96 hover:w-full md:hover:w-1/2 lg:hover:w-1/2 xl:hover:w-2/5 mobile:hover:w-11/12 2xl:hover:w-1/4 hover:z-20 transition-all p-2 cursor-pointer m-auto mt-0">
            <div>
              <img
                src={pokemon?.images.large}
                alt="Image's of the pokemon"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex-1 p-2" id="dynamic-bg">
            <div className="flex flex-col m-auto">
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 rounded-3xl">
                <div className="flex-1 m-auto justify-center text-center">
                  <h3>Abilities</h3>
                </div>
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
              <div className="flex flex-col p-2">
                <div className="">
                  {abilitiesOpen && (
                    <>
                      <div className="bg-slate-100 rounded-lg">
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
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 mt-2 rounded-3xl">
                <div className="flex-1 m-auto justify-center text-center">
                  <h3>Attacks</h3>
                </div>
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
              <div className="flex flex-col p-2">
                <div>
                  {attacksOpen && (
                    <>
                      <div className="bg-slate-100 rounded-lg">
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

              <div className="flex flex-col md:flex-row w-full m-auto outline outline-1 rounded-lg">
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
