import * as vscode from 'vscode';
import { importMDNote } from './import-markdown-note';
import { queryRetrieve } from './retrieve';

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
    const documentUri = editor.document.uri;
    // const currentFilePath = vscode.workspace.asRelativePath(documentUri);
    const currentFilePath = documentUri.fsPath;
    const workspaceFolder = vscode.workspace.getWorkspaceFolder(documentUri);
    let root = '.';
    if (workspaceFolder) {
      root = workspaceFolder.uri.fsPath;
    } else {
      vscode.window.showInformationMessage('No workspace folder found for the current file.');
    }
    const path = currentFilePath;
    importMDNote(root, path);
  } else {
    vscode.window.showErrorMessage('No active editor found. Please open a file.');
    return;
  }
}

export async function CMD_queryRetrieve() {
  const userInput = await vscode.window.showInputBox({
    prompt: 'Enter input for retrieval'
  });

  // If user cancels the input, return early
  if (!userInput) {
    return;
  }

  // Call the retrieve function with the user input
  const result = await queryRetrieve(userInput);

  // Get the active text editor
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    // Insert the result at the current cursor position
    editor.edit(editBuilder => {
      const position = editor.selection.active;
      editBuilder.insert(position, result);
    });
  } else {
    vscode.window.showErrorMessage('No active editor found.');
  }
}
