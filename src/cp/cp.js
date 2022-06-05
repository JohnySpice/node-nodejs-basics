import {fork} from 'child_process';
import {getPath} from '../utils/getPath.js';

export const spawnChildProcess = async (args) => {
    fork(getPath(null, 'files', 'script.js'), args, {
        stdio: 'inherit',
    });
};

spawnChildProcess(['First Arg', 'Second Arg', 'Third Arg', 'etc Arg']);