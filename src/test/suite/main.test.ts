import * as assert from 'assert';
// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../extension';
import * as helper from './helper.js';

suite('Main', () => {

	test("Should start extension @assistant", async () => {
		const started = vscode.extensions.getExtension(
			"tomasz-smykowski.assistant",
		);
		assert.notEqual(started, undefined);
		assert.equal(started?.isActive, true);
	});

	test('Basic lens shows up', async () => {
		await helper.changeConfig(
			{
				rules: [
					{
						"regex": "uniqueTextTest",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = helper.openFile('uniqueTextTest\nSecond line');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('RegEx lens shows up', async () => {
		await helper.changeConfig(
			{
				rules: [
					{
						"regex": "uniqueTextTest.*more",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = helper.openFile('uniqueTextTest something more\nSecond line');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Two same lens show up for two matches', async () => {
		await helper.changeConfig(
			{
				rules: [
					{
						"regex": "dog",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = helper.openFile('seal\ndog\ndog');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 2);
		assert.equal(lens[0].command?.title, "Lens shows up");
		assert.equal(lens[1].command?.title, "Lens shows up");
	});

	test('Two different lens show up for two different matches', async () => {
		await helper.changeConfig(
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
		const document = helper.openFile('seal\ndog\ncat');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 2);
		assert.equal(lens[0].command?.title, "Dog shows up");
		assert.equal(lens[1].command?.title, "Cat shows up");
	});

	test('Clearing user settings', async () => {
		helper.clearConfig();
	});
	
});
