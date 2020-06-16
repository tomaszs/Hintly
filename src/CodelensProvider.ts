import * as vscode from 'vscode';

export class CodelensProvider implements vscode.CodeLensProvider {

    private codeLenses: vscode.CodeLens[] = [];
    private regex: {regex: RegExp, message: string}[] = [];
    private _onDidChangeCodeLenses: vscode.EventEmitter<void> = new vscode.EventEmitter<void>();
    public readonly onDidChangeCodeLenses: vscode.Event<void> = this._onDidChangeCodeLenses.event;

    constructor() {
        this.readRules();
        vscode.workspace.onDidChangeConfiguration((_) => {
            this.readRules();
            this._onDidChangeCodeLenses.fire();
        }); 
    }

    readRules() {
        const rules = vscode.workspace.getConfiguration("assistant").get("rules");
        const globalModifiers: string | undefined = vscode.workspace.getConfiguration("assistant").get("modifiers");
        if (rules) {
            this.regex = [];
            (rules as []).forEach((rule: {regex: string, message: string, modifiers: string}) => {
                this.regex.push({regex: new RegExp(rule.regex, 
                    rule.modifiers ? rule.modifiers : (globalModifiers ? globalModifiers : "g")
                ),
                message: rule.message});
            })
        }
    }

    public provideCodeLenses(document: vscode.TextDocument, 
        token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {

        this.codeLenses = [];
        const text = document.getText();
        this.regex.forEach((regexSettings) => {
            const regex = regexSettings.regex;
            let matches;
            while ((matches = regex.exec(text)) !== null) {
                // let line = document.lineAt(document.positionAt(matches.index).line);
                // let indexOf = line.text.indexOf(matches[0]);
                // let position = new vscode.Position(line.lineNumber, indexOf);
                let position = document.positionAt(matches.index);
                let range = document.getWordRangeAtPosition(position, new RegExp(regexSettings.regex));
                if (range) {
                    const codeLens = new vscode.CodeLens(range);
                    codeLens.command = {
                        title: regexSettings.message,
                        command: "assistant.codelensAction"
                    };
                    this.codeLenses.push(codeLens);
                }
            }
        });
        return this.codeLenses;
    }

    public resolveCodeLens(codeLens: vscode.CodeLens, token: vscode.CancellationToken) {
        return codeLens;
    }
}