import { config } from '../extension';
import { retrieve } from './ragyva_client';

export async function queryRetrieve(input: string, conversationID: string, embedModelmodel: string=config.embedModel, mainModel=config.mainModel) {
  console.log(`Ragyva query: ${input}`);

  let result = retrieve(input, conversationID,embedModelmodel, mainModel);
  console.log(result);
  return result;
}