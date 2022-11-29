import { readdir } from 'fs/promises';

const list = async () => {
	let folder = './files';
	let errorMessage = 'FS operation failed';

	try {
		let files = await readdir(folder);

		for (let file of files) {
			console.log(file);
		}			
	} catch (error) {
		console.error(errorMessage);
	}
};

await list();