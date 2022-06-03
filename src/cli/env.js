export const parseEnv = () => {
    for (const [variableName, variableValue] of Object.entries(process.env)) {
        if (variableName.match(/^rss_/i)) {
            console.log(`${variableName}=${variableValue};`);
        }
    }
};