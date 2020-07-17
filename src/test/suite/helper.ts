import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';

export async function doc(content: string, language?: string) {
    return await vscode.workspace.openTextDocument({
        language,
        content,
    });
}

export async function openFile(content: string): Promise<vscode.TextDocument> {
    const document = doc(content);
    vscode.window.showTextDocument(await document);
    return document;
}

export function sleep(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
    }

export async function changeConfig(settings: any) {
    const assistant = vscode.workspace.getConfiguration();
    await assistant.update("assistant", settings, ConfigurationTarget.Global);
}

export async function clearConfig() {
    await changeConfig(
        {
            rules: []
        }
    );
}

export async function getLens(uri: vscode.Uri) {
    return await vscode.commands.executeCommand('vscode.executeCodeLensProvider', uri) as vscode.CodeLens[];
}
