import axios from 'axios';
import { config } from "../extension";


export async function importFromPath(root: string, path: string): Promise<string>{
  const response = await axios.post(`${config.ragyvaURL}/import`, { doc_root: root, path: path });
  return response.data;
}

export async function retrieve(query: string, model: string): Promise<string>{
  const response = await axios.post(`${config.ragyvaURL}/retrieve`, { query: query, model: model});
  return response.data;
}