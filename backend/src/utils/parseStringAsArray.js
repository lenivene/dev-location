module.exports = parseStringAsArray = arrayAsString => {
  return arrayAsString.split(",").map(string => string.trim());
};
