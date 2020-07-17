import * as assert from 'assert';
import * as helper from './helper.js';

suite('Modifiers', () => {

	test('Rule modifier works', async () => {
		await helper.changeConfig(
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
		const document = helper.openFile('seal\ndog\ncat');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Global modifier works', async () => {
		await helper.changeConfig(
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
		const document = helper.openFile('seal\ndog\ncat');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Clearing user settings', async () => {
		helper.clearConfig();
	});
	
});
