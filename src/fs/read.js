import {readFile} from 'fs/promises'
import {getPath} from '../utils/getPath.js';

export const read = async () => {
    const filePath = getPath(null, 'files', 'fileToRead.txt');
    try {
        const data = await readFile(filePath, {encoding: 'utf8'});
        console.log(data);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};

read();