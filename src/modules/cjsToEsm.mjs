import path from 'path';
import {release, version} from 'os';
import {createServer as createServerHttp} from 'http';
import {createRequire} from 'module';

await import('./files/c.js');

const require = createRequire(import.meta.url);
const random = Math.random();

let unknownObject;

if (random > 0.5) {
    unknownObject = require('./files/a.json');
} else {
    unknownObject = require('./files/b.json');
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${path.sep}"`);
const urlToPath = new URL(import.meta.url).pathname;
console.log(`Path to current file is ${urlToPath}`);
console.log(`Path to current directory is ${path.dirname(urlToPath)}`);

const createMyServer = createServerHttp((_, res) => {
    res.end('Request accepted');
});

export {
    unknownObject,
    createMyServer,
};

