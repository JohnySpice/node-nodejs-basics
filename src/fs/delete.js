import {rm} from 'fs/promises';

export const remove = async () => {
    const fileToRemove = 'src/fs/files/fileToRemove.txt';
    try {
        await rm(fileToRemove);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};