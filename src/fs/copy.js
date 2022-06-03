import {readdir, copyFile, mkdir} from 'fs/promises';
import {resolve} from "path";

export const copy = async () => {
    const sourceDirPath = resolve('src/fs/files');
    const destDirPath = resolve('src/fs/files_copy');
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