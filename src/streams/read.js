import {createReadStream} from 'fs';
import {getPath} from '../utils/getPath.js';

export const read = async () => {
    const fileToReadPath = getPath(null, 'files', 'fileToRead.txt');
    const rs = createReadStream(fileToReadPath);
    rs.pipe(process.stdout);
};

read()