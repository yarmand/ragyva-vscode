import { Table } from '@lancedb/lancedb';
import * as vscode from 'vscode';
import { config } from '../extension';

export async function importMDNote(path: string, model: string=config.embedModel, table?: Table) {
  vscode.window.showInformationMessage(`Importing ${path}`);

  // connect to ragyva
  // send thepath to import
  // get the response
}