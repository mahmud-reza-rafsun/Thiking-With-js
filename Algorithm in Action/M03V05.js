const isPalindrom = (str) => {
  const normalized = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  const reversed = normalized.split("").reverse().join("");

  if (reversed === normalized) {
    return true;
  }

  return false;
};

console.log(isPalindrom("A man , a cart"));
