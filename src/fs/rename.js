import {resolve} from 'path';
import {readdir, rename as rn} from 'fs/promises'

export const rename = async () => {
    const filesDirPath = 'src/fs/files';
    const filesNames = await readdir(filesDirPath);
    if (!filesNames.includes('wrongFilename.txt') || filesNames.includes('properFilename.md')) {
        throw new Error('FS operation failed');
    }
    await rn(resolve(filesDirPath, 'wrongFilename.txt'), resolve(filesDirPath, 'properFilename.md'));
};