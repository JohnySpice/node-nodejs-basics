import {access, writeFile} from 'fs/promises';
import {getPath} from '../utils/getPath.js';

export const create = async () => {
    const filePath = getPath( null,'files', 'fresh.txt');
    try {
        await access(filePath);
    } catch (e) {
        const string = 'I am fresh and young';
        return await writeFile(filePath, string);
    }
    throw new Error('FS operation failed');
};

create();