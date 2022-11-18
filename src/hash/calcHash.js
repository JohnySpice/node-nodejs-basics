import {createHash} from 'crypto';
import {readFile} from 'fs/promises';
import {getPath} from '../utils/getPath.js';

export const calculateHash = async () => {
    const hash = createHash('sha256');
    const file = await readFile(getPath(null, 'files', 'fileToCalculateHashFor.txt'));
    hash.update(file);
    return hash.digest('hex');
};

calculateHash().then(value => console.log(value));