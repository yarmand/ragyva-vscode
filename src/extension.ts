// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CMD_importCurrentFile, CMD_importFile } from './db/import-commands';
import { Ollama } from 'ollama';

type ragyvaConfig = {
		dbURL: string,
		ollamaURL: string,
		embedModel: string,
		chatModel: string,
};

export var config: ragyvaConfig;
export var ollama: Ollama;

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	console.log('"ragyva" activation <<Start>>');

	config = vscode.workspace.getConfiguration('ragyva') as unknown as ragyvaConfig;

	ollama = new Ollama({host: config.ollamaURL});


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

	console.log('"ragyva" activation <<Done>>');
}

// This method is called when your extension is deactivated
export function deactivate() {}
