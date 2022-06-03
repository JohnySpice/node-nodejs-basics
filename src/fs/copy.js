import {readdir, copyFile, mkdir} from 'fs/promises';
import {dirname, resolve} from 'path';

export const copy = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const sourceDirPath = resolve(currentFolderPath, 'files');
    const destDirPath = resolve(currentFolderPath, 'files_copy');
    try {
        const filesNames = await readdir(sourceDirPath);
        await mkdir(destDirPath);
        for (const file of filesNames) {
            await copyFile(resolve(sourceDirPath, file), resolve(destDirPath, file));
        }
    } catch (err) {
        throw new Error('FS operation failed');
    }
};