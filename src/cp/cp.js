import {fork} from 'child_process';
import {dirname, resolve} from 'path';

export const spawnChildProcess = async (args) => {
    const currentFolderPath = dirname(new URL(import.meta.url).pathname);
    fork(resolve(currentFolderPath, 'files', 'script.js'), args, {
        stdio: 'inherit',
    });
};

spawnChildProcess(['First Arg', 'Second Arg', 'Third Arg', 'etc Arg']);