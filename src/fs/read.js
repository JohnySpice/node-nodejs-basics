import {readFile} from 'fs/promises'

export const read = async () => {
    const filePath = 'src/fs/files/fileToRead.txt'
    try {
        const data = await readFile(filePath, {encoding: 'utf8'});
        console.log(data);
    } catch (e) {
        throw new Error('FS operation failed');
    }
};