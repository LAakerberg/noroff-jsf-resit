import 'dotenv/config';
console.log(process.env.TEST); // remove this after you've confirmed it is working

function test(expectedSecret) {
  const secretMatches = process.env.MEANING_OF_LIFE == expectedSecret;
  console.log(`The meaning of life is ${process.env.TEST}`);
  console.log(`The secret does ${process.env.API_USER}`);
  return secretMatches;
}

test();
