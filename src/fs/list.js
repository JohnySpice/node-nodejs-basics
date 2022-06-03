import {readdir} from 'fs/promises';

export const list = async () => {
    const filesDirPath = 'src/fs/files';
    try {
        const filesNames = await readdir(filesDirPath);
        console.log(filesNames);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};