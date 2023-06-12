import { useApiCall } from '../../../hooks/api/useApiCall';
import { API_BASE } from '../../../services/apiBase';
import { Cards } from '../Card';
import { Message } from '../Message';

export function FetchPokemon() {
  const { data, isLoading, isError } = useApiCall(API_BASE);

  if (isLoading) {
    return <Message type="loading" text="Loading pokémon cards" />; // Display loading message while venue data is being fetched
  }

  if (isError) {
    return <Message type="error" text="Error loading the venues" />; // Display error message if there was an error fetching the venue data
  }

  return (
    <>
      <h3>Success...</h3>
      <div className="grid grid-rows-4 gap-2">
        <Cards value={data} />
      </div>
    </>
  );
}
