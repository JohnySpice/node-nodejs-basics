import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import {resolve, dirname} from 'path';

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const file = await readFile(resolve(currentFolderPath, 'files', 'fileToCalculateHashFor.txt'));
    hash.update(file);
    return hash.digest('hex');
};