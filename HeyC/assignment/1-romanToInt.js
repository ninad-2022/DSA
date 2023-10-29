const romanToInt = (s) => {
  const romanOrder = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let preValue = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    const currentValue = romanOrder[s[i]];
    if (currentValue < preValue) {
      result -= currentValue;
    } else {
      result += currentValue;
    }

    preValue = currentValue;
  }

  return result
};
console.log(romanToInt("DMI"));
