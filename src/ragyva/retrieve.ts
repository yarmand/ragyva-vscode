import { config } from '../extension';
import { retrieve } from './ragyva_client';

export async function queryRetrieve(input: string, model: string=config.embedModel) {
  console.log(`Ragyva query: ${input}`);

  let result = retrieve(input, model);
  console.log(result);
  return result;
}