import {Transform, pipeline} from 'stream';

export const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            callback(null, chunk.toString().split('').reverse().join(''));
        }
    });
    pipeline(
        process.stdin,
        reverse,
        process.stdout,
        err => {
            if (err) {
                console.error(err.message);
            }
        }
    );
};

transform();
