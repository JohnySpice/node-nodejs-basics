import {createUnzip} from 'zlib';
import {dirname, resolve} from 'path';
import {createReadStream, createWriteStream} from 'fs';
import {pipeline} from 'stream';

export const decompress = async () => {
    const unzip = createUnzip();
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    const archive = createReadStream(resolve(currentFolderPath, 'files', 'archive.gz'));
    const decompressedFile = await createWriteStream(resolve(currentFolderPath, 'files', 'fileToCompress.txt'));
    pipeline(archive, unzip, decompressedFile, err => {
        if (err) {
            console.error(err);
        }
    }); 
};

decompress();