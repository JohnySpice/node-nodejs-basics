import {cpus} from 'os';
import {Worker} from 'worker_threads';
import {getPath} from '../utils/getPath.js';

export const performCalculations = async () => {
    const cpuInfo = cpus();
    const workerPool = [];
    for (let i = 0; i < cpuInfo.length; i++) {
        workerPool.push(createWorker(i));
    }
    return Promise.all(workerPool);
};

async function createWorker(data) {
    return new Promise(res => {
        const worker = new Worker(getPath(null, 'worker.js'), {
            workerData: data + 10,
        });
        worker.on('message', m => res({status: 'resolved', data: m}));
        worker.on('error', () => res({status: 'error', value: null}));
    });
}

performCalculations().then(result => console.log(result));