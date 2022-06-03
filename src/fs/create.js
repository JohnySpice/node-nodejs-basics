import {access, writeFile} from 'fs/promises';
import {dirname, resolve} from 'path';

export const create = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const filePath = resolve(currentFolderPath, 'files', 'fresh.txt');
    try {
        await access(filePath);
    } catch (e) {
        const string = new Uint8Array(Buffer.from('I am fresh and young'));
        return await writeFile(filePath, string);
    }
    throw new Error('FS operation failed');
}