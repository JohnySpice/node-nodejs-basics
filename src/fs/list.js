import {readdir} from 'fs/promises';
import {getPath} from '../utils/getPath.js';

export const list = async () => {
    const filesDirPath = getPath(null, 'files');
    try {
        const filesNames = await readdir(filesDirPath);
        console.log(filesNames);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

list();