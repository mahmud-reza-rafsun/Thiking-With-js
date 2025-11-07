import Stack from "../Data-Structure/Stack.js";

const bracktChecker = (str) => {
  const stack = new Stack();

  const bracketMap = {
    ")": "(",
    "}": "{",
    "]": "[",
  };

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(" || char === "{" || char === "[") {
      stack.push(char);
    } else if (char === ")" || char === "}" || char === "]") {
      if (stack.isEpmty()) {
        return false;
      }

      const expected = bracketMap[char];
      const got = stack.pop();

      console.log("expected: ", expected, "Got", got);

      if (got !== expected) {
        return false;
      }
    }
  }
  return stack.isEpmty();
};

console.log(bracktChecker("({[]})"));
console.log("-----------------------");
console.log(bracktChecker("){}()[]"));
console.log("-----------------------");
console.log(bracktChecker("([{}})"));
