import {access, writeFile} from 'fs/promises';
import {resolve} from 'path';

export const create = async () => {
    const filePath = resolve('src/fs/files/fresh.txt');
    try {
        await access(filePath);
    } catch (e) {
        const string = new Uint8Array(Buffer.from('I am fresh and young'));
        return await writeFile(filePath, string);
    }
    throw new Error('FS operation failed');
}