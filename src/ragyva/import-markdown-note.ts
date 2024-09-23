import * as vscode from 'vscode';
import { config } from '../extension';
import { importFromPath } from './ragyva_client';

export async function importMDNote(root: string, path: string, model: string=config.embedModel) {
  vscode.window.showInformationMessage(`Importing ${path}`);

  let result = await importFromPath(root, path);
  console.log(result);
  vscode.window.showInformationMessage(`Done importing: ${JSON.stringify(result)}`);
}