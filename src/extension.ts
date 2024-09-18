// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CMD_importCurrentFile, CMD_importFile, CMD_queryRetrieve } from './ragyva/commands';

type ragyvaConfig = {
		ragyvaURL: string,
		ollamaURL: string,
		embedModel: string,
		mainModel: string,
};

export var config: ragyvaConfig;
// export var ollama: Ollama;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('"ragyva" activation <<Start>>');

	config = vscode.workspace.getConfiguration('ragyva') as unknown as ragyvaConfig;


	const disposable = vscode.commands.registerCommand('ragyva.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from ragyva!');
	});
	context.subscriptions.push(disposable);

	context.subscriptions.push(
		vscode.commands.registerCommand('ragyva.importFile', CMD_importFile)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('ragyva.importCurrentFile', CMD_importCurrentFile)
	);
	context.subscriptions.push(
		vscode.commands.registerCommand('ragyva.queryRetrieve', CMD_queryRetrieve)
	);

	console.log('"ragyva" activation <<Done>>');
}

// This method is called when your extension is deactivated
export function deactivate() {}
