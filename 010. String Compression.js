function strCompression(str) {
    str = str.trim();
    if(str.length === 0) return 'Stop playing :)';

    let result = str[0] + '1';
    let counter = 1;

    for(let i = 1; i < str.length; i++) {
        if(str[i] === str[i - 1]) {
            counter++;
            result = result.slice(0, -1) + counter;
        }
        else {
            result += str[i] + '1';
            counter = 1;
        }
    }
    return result;
}