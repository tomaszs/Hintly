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
        if (rules) {
            this.regex = [];
            (rules as []).forEach((rule: {regex: string, message: string}) => {
                this.regex.push({regex: new RegExp(rule.regex, "g"), message: rule.message});
            })
        }
    }

    public provideCodeLenses(document: vscode.TextDocument, 
        token: vscode.CancellationToken): vscode.CodeLens[] | Thenable<vscode.CodeLens[]> {

        this.codeLenses = [];
        this.regex.forEach((regexSettings) => {
            const regex = new RegExp(regexSettings.regex);
            const text = document.getText();
            let matches;
            while ((matches = regex.exec(text)) !== null) {
                let line = document.lineAt(document.positionAt(matches.index).line);
                let indexOf = line.text.indexOf(matches[0]);
                let position = new vscode.Position(line.lineNumber, indexOf);
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