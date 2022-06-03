import {rm} from 'fs/promises';
import {dirname, resolve} from 'path';

export const remove = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const fileToRemove = resolve(currentFolderPath, 'files', 'fileToRemove.txt');
    try {
        await rm(fileToRemove);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};