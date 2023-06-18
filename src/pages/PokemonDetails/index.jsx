import { useParams } from 'react-router-dom';
import { useApiCall } from '../../hooks/api/useApiCall';
import { API_BASE } from '../../services/apiBase';
import { Message } from '../../components/Message';
import { SpecificPokemon } from '../../components/Pokemon/SpecificPokemon';

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
      <SpecificPokemon details={data} />
    </>
  );
}
