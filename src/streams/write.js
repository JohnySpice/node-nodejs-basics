import {dirname, resolve} from 'path';
import {createWriteStream} from 'fs';

export const write = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const fileToReadPath = resolve(currentFolderPath, 'files', 'fileToWrite.txt');
    const ws = createWriteStream(fileToReadPath);
    process.stdin.pipe(ws);
};

write()
/*
write.js - implement function that 
writes process.stdin data into file fileToWrite.txt content using Writable Stream
 */