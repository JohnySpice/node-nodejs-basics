import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {createRequire} from 'module';
import {getPath} from '../utils/getPath.js';

await import('./files/c.js');

const require = createRequire(getPath(null));
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require(getPath(null, 'files', 'a.json'));
} else {
    unknownObject = require(getPath(null, 'files', 'b.json'));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
console.log(`Path to current file is ${process.argv[1]}`);
console.log(`Path to current directory is ${path.dirname(getPath(null))}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

