import { useApiCall } from '../../../hooks/api/useApiCall';
import { API_BASE } from '../../../services/apiBase';
import { Cards } from '../Card';
import { Message } from '../../Message';

export function FetchPokemon() {
  const { data, isLoading, isError } = useApiCall(API_BASE);

  if (isLoading) {
    return (
      <div className="flex m-auto mt-32">
        <Message type="loading" text="Loading pokémon cards" />
      </div>
    ); // Display loading message while venue data is being fetched
  }

  if (isError) {
    return <Message type="error" text="Error pokémon cards" />; // Display error message if there was an error fetching the venue data
  }

  return (
    <>
      <div className="fade-in">
        <Cards value={data} />
      </div>
    </>
  );
}
