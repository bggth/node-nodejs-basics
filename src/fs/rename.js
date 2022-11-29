import { rename as rename2 } from 'fs/promises'
import { join } from 'path'

const rename = async () => {
	let path = './files';
	let oldFileName = 'wrongFilename.txt';
	let newFileName = 'properFilename.md';
	let errorMessage = 'FS operation failed';

	try {
		let oldPath = join(path, oldFileName);
		let newPath = join(path, newFileName);

		await rename2(oldPath, newPath);

	} catch(err) {
		console.error(errorMessage);
	}
};

await rename();