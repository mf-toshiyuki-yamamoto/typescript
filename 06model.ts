function valueInputs(value1: number | string, value2: number | string): number | string{
if (typeof value1 === 'number' && typeof value2 === 'number') {
    return value1 * value2;
} else {
    return value1.toString() + value2.toString();
}
}