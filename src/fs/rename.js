import {readdir, rename as rn} from 'fs/promises'
import {getPath} from '../utils/getPath.js';

export const rename = async () => {
    const filesDirPath = getPath(null, 'files');
    const filesNames = await readdir(filesDirPath);
    if (!filesNames.includes('wrongFilename.txt') || filesNames.includes('properFilename.md')) {
        throw new Error('FS operation failed');
    }
    await rn(getPath(filesDirPath, 'wrongFilename.txt'), getPath(filesDirPath, 'properFilename.md'));
};

rename();