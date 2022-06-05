import {createWriteStream} from 'fs';
import {getPath} from '../utils/getPath.js';

export const write = async () => {
    const fileToWritePath = getPath(null, 'files', 'fileToWrite.txt');
    const ws = createWriteStream(fileToWritePath);
    process.stdin.pipe(ws);
};

write()