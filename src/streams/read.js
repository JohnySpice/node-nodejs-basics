import {dirname, resolve} from 'path';
import {createReadStream} from 'fs';

export const read = async () => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const fileToReadPath = resolve(currentFolderPath, 'files', 'fileToRead.txt');
    const rs = createReadStream(fileToReadPath);
    rs.pipe(process.stdout);
};

read()