import * as assert from 'assert';
import * as helper from './helper.js';

suite('Rules', () => {

	test('Multiline rule works', async () => {
		await helper.changeConfig(
			{
				rules: [
					{
						"regex": "dog.*cat",
						"modifiers": "gs",
						"message": "Lens shows up"
					}
				]
			}
		);
		const document = helper.openFile('dog\ncat');
		const lens = await helper.getLens((await document).uri);
		assert.equal(lens.length, 1);
		assert.equal(lens[0].command?.title, "Lens shows up");
	});

	test('Clearing user settings', async () => {
		helper.clearConfig();
	});
	
});
