import {rm} from 'fs/promises';
import {getPath} from '../utils/getPath.js';

export const remove = async () => {
    const fileToRemove = getPath(null, 'files', 'fileToRemove.txt');
    try {
        await rm(fileToRemove);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

remove();