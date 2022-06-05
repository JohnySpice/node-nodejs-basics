import {readdir} from 'fs/promises';
import {dirname, resolve} from 'path';

export const list = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const filesDirPath = resolve(currentFolderPath, 'files');
    try {
        const filesNames = await readdir(filesDirPath);
        console.log(filesNames);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

list();