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
      <div className="flex flex-col w-full border">
        <div className="flex flex-rows border border-black">
          <div className="flex-initial">
            <h2>{pokemon?.name}</h2>
          </div>
          <div className="flex-initial m-auto pl-2">
            {pokemon?.level && (
              <p className="text-lg">
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
        <div className="flex flex-rows">
          <div className="flex-initial w-72 border border-black">
            <div>
              <img
                src={pokemon?.images.large}
                alt="Image's of the pokemon"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex-1 border border-black" id="dynamic-bg">
            <div className="flex flex-col m-auto">
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400">
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
              <div className="flex flex-col">
                <div>
                  {abilitiesOpen && (
                    <>
                      <div className="bg-slate-100">
                        <div>
                          {pokemon.abilities && pokemon.abilities.length > 0 ? (
                            pokemon.abilities.map((pokeAbilities, index) => (
                              <div key={index} className="p-1">
                                <div className="p-1">
                                  <div className="text-center">
                                    <p className="font-bold">
                                      {pokeAbilities.type} -{' '}
                                      {pokeAbilities.name}
                                    </p>
                                  </div>
                                </div>
                                <p>{pokeAbilities.text}</p>
                              </div>
                            ))
                          ) : (
                            <p>No abilities found.</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row bg-gradient-to-b from-slate-300 via-slate-200 to-slate-400 mt-2">
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
              <div className="flex flex-col">
                <div>
                  {attacksOpen && (
                    <>
                      <div className="bg-slate-100">
                        <div>
                          {pokemon.attacks && pokemon.attacks.length > 0 ? (
                            pokemon.attacks.map((pokeAttacks, index) => (
                              <div key={index} className="p-1">
                                <div className="m-1">
                                  <div className="text-center">
                                    <p className="font-bold">
                                      {pokeAttacks.name}
                                    </p>
                                  </div>
                                </div>
                                <p>{pokeAttacks.text}</p>
                              </div>
                            ))
                          ) : (
                            <p>No attacks found.</p>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="flex flex-row">
                <div className="flex-1">Weaknesses</div>
                <div className="flex-1">Resistance</div>
                <div className="flex-1">Retreat cost</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}
