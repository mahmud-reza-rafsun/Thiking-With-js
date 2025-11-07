const towSum = (arr, target) => {
  const numpMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    const currentNumber = arr[i];
    const completent = target - currentNumber;

    console.log("Current", currentNumber);
    console.log("Completent", completent);

    if (numpMap.has(completent)) {
      return [numpMap.get(completent), i];
    }

    numpMap.set(currentNumber, i);

    console.log(numpMap);
  }

  return undefined;
};

console.log(towSum([2, 11, 7, 15], 9));
