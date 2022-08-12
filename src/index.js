module.exports = function check(str, bracketsConfig) {
  let result = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
    result.push(bracketsConfig[i]);
  }

const OPEN_BRACKETS = ['(', '{', '|', '[', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
const BRACKETS_PAIR = {
  [')']: '(',
  ['}']: '{',
  ['|']: '|',
  [']']: '[',
  ['1']: '1',
  ['2']: '2',
  ['3']: '3',
  ['4']: '4',
  ['5']: '5',
  ['6']: '6',
  ['7']: '7',
  ['8']: '8',
  ['9']: '9',
};
let stack = [];
for (let i = 0; i < str.length; i++) {
  let currentSymbol = str[i];
  if (OPEN_BRACKETS.includes(currentSymbol)) {
    stack.push(currentSymbol);
  } else {
    if (stack.length === 0) {
      return false;
    }
    let topElement = stack[stack.length - 1];

    if (BRACKETS_PAIR[currentSymbol] === topElement) {
      stack.pop();
    } else {
      return false;
    }
  }
}
return stack.length === 0;
}
