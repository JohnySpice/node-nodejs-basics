import {readFile} from 'fs/promises'
import {dirname, resolve} from 'path';

export const read = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const filePath = resolve(currentFolderPath, 'files', 'fileToRead.txt');
    try {
        const data = await readFile(filePath, {encoding: 'utf8'});
        console.log(data);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};