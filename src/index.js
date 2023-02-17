module.exports = function check(str, bracketsConfig) {
  const stack = [];
  const openBrackets = new Set(bracketsConfig.map(pair => pair[0]));
  const closeBrackets = new Set(bracketsConfig.map(pair => pair[1]));
  const matchingBrackets = {};
  for (const pair of bracketsConfig) {
    matchingBrackets[pair[1]] = pair[0];
  }
  for (const char of str) {
    if (openBrackets.has(char)) {
      stack.push(char);
    } else if (closeBrackets.has(char)) {
      const lastOpenBracket = stack.pop();
      if (lastOpenBracket !== matchingBrackets[char]) {
        return false;
      }
    }
  }
  return stack.length === 0;
}
