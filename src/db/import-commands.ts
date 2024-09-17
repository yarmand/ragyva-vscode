import * as vscode from 'vscode';
import { importMDNote } from './import-markdown-note';

export async function CMD_importFile(path?: string) {
  // If path is not provided, ask the user to input it
  if (!path) {
    path = await vscode.window.showInputBox({
      placeHolder: 'Please enter the file path (realtive path in workspace)',
      prompt: 'No path provided. Enter the file path to import:',
      validateInput: (input) => input.trim() === '' ? 'File path cannot be empty' : null
    });

    // If the user cancels the input box, return early
    if (!path) {
      vscode.window.showErrorMessage('File path was not provided. Operation cancelled.');
      return;
    }
  }
  // Call the embed function on the file path
  vscode.window.showInformationMessage(`ready to import ${path}`);
};

export async function CMD_importCurrentFile() {
  let path: string;
  const editor = vscode.window.activeTextEditor;
  if (editor) {
      const currentFilePath = vscode.workspace.asRelativePath(editor.document.uri);
      path = currentFilePath;
  } else {
      vscode.window.showErrorMessage('No active editor found. Please open a file.');
      return;
  }
  importMDNote(path);
}
