import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { ConfigurationTarget } from 'vscode';
// import * as myExtension from '../extension';

suite('General tests', () => {

	async function doc(content: string, language?: string) {
		return await vscode.workspace.openTextDocument({
			language,
			content,
		});
	}

	async function openFile(content: string): Promise<vscode.TextDocument> {
		const document = doc(content);
		vscode.window.showTextDocument(await document);
		return document;
	}

	function sleep(ms: number): Promise<void> {
		return new Promise(resolve => {
		  setTimeout(resolve, ms);
		});
	  }

	async function changeConfig(settings: any) {
		const assistant = vscode.workspace.getConfiguration();
		await assistant.update("assistant", settings, ConfigurationTarget.Global);
	}

	async function getLens(uri: vscode.Uri) {
		return await vscode.commands.executeCommand('vscode.executeCodeLensProvider', uri) as vscode.CodeLens[];
	}
	
	test("Should start extension @assistant", async () => {
		const started = vscode.extensions.getExtension(
			"tomasz-smykowski.assistant",
		);
		assert.notEqual(started, undefined);
		assert.equal(started?.isActive, true);
	});

	test('Basic lens shows up', async () => {
		await changeConfig(
			{
				rules: [
					{
						"regex": "uniqueTextTest",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = openFile('uniqueTextTest\nSecond line');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('RegEx lens shows up', async () => {
		await changeConfig(
			{
				rules: [
					{
						"regex": "uniqueTextTest.*more",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = openFile('uniqueTextTest something more\nSecond line');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Rule modifier works', async () => {
		await changeConfig(
			{
				rules: [
					{
						"regex": "Dog",
						"modifiers": "gi",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = openFile('seal\ndog\ncat');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Global modifier works', async () => {
		await changeConfig(
			{
				modifiers: "gi",
				rules: [
					{
						"regex": "Dog",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = openFile('seal\ndog\ncat');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Two same lens show up for two matches', async () => {
		await changeConfig(
			{
				rules: [
					{
						"regex": "dog",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = openFile('seal\ndog\ndog');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 2);
		assert.equal(lens[0].command?.title, "Lens shows up");
		assert.equal(lens[1].command?.title, "Lens shows up");
	});

	test('Two different lens show up for two different matches', async () => {
		await changeConfig(
			{
				rules: [
					{
						"regex": "dog",
						"message": "Dog shows up"
					},
					{
						"regex": "cat",
						"message": "Cat shows up"
					}
				]
			}
		);
		const document = openFile('seal\ndog\ncat');
		const lens = await getLens((await document).uri);
		assert.equal(lens.length, 2);
		assert.equal(lens[0].command?.title, "Dog shows up");
		assert.equal(lens[1].command?.title, "Cat shows up");
	});

	test('Clearing user settings', async () => {
		await changeConfig(
			{
				rules: []
			}
		);
	});
	
});
