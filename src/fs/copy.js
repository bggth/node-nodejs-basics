import { readdir, copyFile, constants, mkdir } from 'fs/promises';
import { join } from 'path';

const copy = async () => {

	let sourceFolder = './files';
	let destinationFolder = './files_copy';
	let errorMessage = 'FS operation failed';

	try {
		let files = await readdir(sourceFolder);

		if (files.length > 0)
			await mkdir(destinationFolder);

		for (let file of files) {
			let sourceFileName = join(sourceFolder, file);
			let destinationFileName = join(destinationFolder, file);
			await copyFile(sourceFileName, destinationFileName, constants.COPYFILE_EXCL);
		}

	} catch(err) {
		console.error(errorMessage);
	}


};

copy();