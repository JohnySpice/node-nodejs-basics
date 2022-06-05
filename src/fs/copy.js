import {readdir, copyFile, mkdir} from 'fs/promises';
import {getPath} from '../utils/getPath.js';

export const copy = async () => {
    const sourceDirPath = getPath(null,'files');
    const destDirPath = getPath(null,'files_copy');
    try {
        const filesNames = await readdir(sourceDirPath);
        await mkdir(destDirPath);
        for (const file of filesNames) {
            await copyFile(getPath(sourceDirPath, file), getPath(destDirPath, file));
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

copy();