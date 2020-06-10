import { ExtensionContext, languages, commands, Disposable, workspace, window } from 'vscode';
import { CodelensProvider } from './CodelensProvider';

var disposables: Disposable[] = [];

export function activate(context: ExtensionContext) {
    let codelensProvider = new CodelensProvider();

    languages.registerCodeLensProvider("*", codelensProvider);

    commands.registerCommand("assistant.codelensAction", (args) => {
        if (args) {
            window.showInformationMessage(`CodeLens action clicked with args=${args}`);
        }
    });
}

export function deactivate() {
    if (disposables) {
        disposables.forEach(item => item.dispose());
    }
    disposables = [];
}