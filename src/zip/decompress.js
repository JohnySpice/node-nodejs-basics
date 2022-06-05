import {createUnzip} from 'zlib';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';
import {getPath} from '../utils/getPath.js';

export const decompress = async () => {
    const unzip = createUnzip();
    const archive = createReadStream(getPath(null, 'files', 'archive.gz'));
    const decompressedFile = await createWriteStream(getPath(null, 'files', 'fileToCompress.txt'));
    pipeline(archive, unzip, decompressedFile, err => {
        if (err) {
            console.error(err);
        }
    });
};

decompress();