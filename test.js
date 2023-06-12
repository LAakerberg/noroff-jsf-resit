import 'dotenv/config';
console.log(import.meta.env.TEST); // remove this after you've confirmed it is working

function test(expectedSecret) {
  const secretMatches = import.meta.env.MEANING_OF_LIFE == expectedSecret;
  console.log(`The meaning of life is ${import.meta.env.TEST}`);
  console.log(`The secret does ${import.meta.env.API_USER}`);
  console.log(`The secret does ${import.meta.env.API_URL}`);
  console.log(import.meta.env.VITE_API_KEY);
  return secretMatches;
}

test();
