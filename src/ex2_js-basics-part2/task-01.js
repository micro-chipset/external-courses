module.exports = determineType;

function determineType(argument) {
    switch (typeof (argument)) {
        case 'number':
            return 'number';
        case 'string':
            return 'string';
        default:
            return undefined;
    }
}