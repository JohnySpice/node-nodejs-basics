export const parseArgs = () => {
    const normalizedArgs = process.argv.slice(2);
    for (let i = 0; i < normalizedArgs.length; i++) {
        if (normalizedArgs[i].includes('--')) {
            console.log(`${normalizedArgs[i].slice(2)} is ${normalizedArgs[i + 1]}`);
            i++;
        }
    }
};