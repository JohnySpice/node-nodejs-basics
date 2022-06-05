import {createGzip} from 'zlib';
import {pipeline} from 'stream';
import {createReadStream, createWriteStream} from 'fs';
import {getPath} from '../utils/getPath.js';

export const compress = async () => {
    const gzip = createGzip();
    const fileToCompress = await createReadStream(getPath(null, 'files', 'fileToCompress.txt'));
    const archive = createWriteStream(getPath(null, 'files', 'archive.gz'));
    pipeline(fileToCompress, gzip, archive, err => {
        if (err) {
            console.error(err);
        }
    });
};

compress();