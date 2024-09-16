import * as vscode from 'vscode';

export function importFile(path: string) {
  vscode.window.showInformationMessage(`Importing ${path}`);

  // connect to LLM
  // split in chucks
    // embed the chunk
    // extract meta-datas
      // tags
      // communities
    // store chunk in DB

}