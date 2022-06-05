import {dirname, resolve} from 'path';
import {createGzip} from 'zlib';
import {pipeline} from 'stream';
import {createReadStream, createWriteStream} from 'fs';

export const compress = async () => {
    const gzip = createGzip();
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const fileToCompress = await createReadStream(resolve(currentFolderPath, 'files', 'fileToCompress.txt'));
    const archive = createWriteStream(resolve(currentFolderPath, 'files', 'archive.gz'));
    pipeline(fileToCompress, gzip, archive, err => {
        if (err) {
            console.error(err);
        }
    });
};

compress();