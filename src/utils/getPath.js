import {dirname, join} from 'path';

export function getPath(rootFolder, ...pathSegments) {
    const folder = rootFolder || dirname(process.argv[1]);
    return join(folder, ...pathSegments);
}