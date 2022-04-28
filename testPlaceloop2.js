const getVisibleCubes = (n) => {
    return Math.pow(n, 3);
};

const getHiddenCubes = (n) => {
    return Math.pow(n - 2, 3);
};

const getNumberCubes = (n) => {
    return getVisibleCubes(n) - getHiddenCubes(n);
}

console.log(getNumberCubes(4));