import { writeFile } from 'fs/promises';
import { join } from 'path';

const create = async () => {
	let path = './files';
	let fileName = 'fresh.txt';
	let fileContent = 'I am fresh and young';
	let errorMessage = 'FS operation failed';

	try {
		let fullFileName = join(path, fileName);
		let promise = writeFile(fullFileName, fileContent, {flag: 'wx'});
		await promise;
	} catch(err) {
		console.log(errorMessage);
	}
};

await create();