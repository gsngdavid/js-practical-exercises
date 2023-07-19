function arrStats(arr) {
    const sum = arr.reduce((sum, cur) => sum + cur, 0);
    const average = (sum / arr.length).toFixed(2);
    const min = Math.min(...arr);
    const max = Math.max(...arr);

    return {sum, average, min, max};
}