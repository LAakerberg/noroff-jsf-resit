import { useParams } from 'react-router-dom';
import { useApiCall } from '../../hooks/api/useApiCall';
import { API_BASE } from '../../services/apiBase';
import { Message } from '../../components/Message';

export function PokemonDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useApiCall(API_BASE + id);

  if (isLoading) {
    return <Message type="loading" text="Loading pokémon cards" />; // Display loading message while venue data is being fetched
  }

  if (isError) {
    return <Message type="error" text="Error pokémon cards" />; // Display error message if there was an error fetching the venue data
  }

  console.log(id);
  console.log(data);
  return (
    <>
      <div className="flex flex-col w-full border">
        <div className="flex flex-rows border border-black">
          <div className="flex-initial">
            <h2>{data.data?.name}</h2>
          </div>
          <div className="flex-initial m-auto pl-2">
            {data.data?.level && (
              <p className="text-lg">
                LV.{' '}
                <span className="font-bold text-3xl">{data.data.level}</span>
              </p>
            )}
          </div>
          <div className="flex-1 m-auto justify-end text-right pr-2">
            <p className="text-lg">
              HP. <span className="font-bold text-3xl">{data.data?.hp}</span>
            </p>
          </div>
        </div>
        <div className="flex flex-rows">
          <div className="flex-initial w-72 border border-black">
            <div>
              <img
                src={data.data?.images.large}
                alt="Image's of the pokemon"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex-1 border border-black">
            <div className="flex flex-col m-auto">
              <div></div>
              <div className="m-auto">
                <div></div>
                <div></div>
              </div>
              <div className="m-auto">Attacks</div>
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
