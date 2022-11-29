import { rm } from 'fs/promises'
import { join } from 'path'

const remove = async () => {

	let path = './files';
	let fileName = 'fileToRemove.txt';
	let errorMessage = 'FS operation failed';

	try {
		let fullFileName = join(path, fileName);
		await rm(fullFileName);

	} catch (err) {
		console.error(errorMessage);
	}

};

await remove();