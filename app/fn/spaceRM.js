exports.SR = word => {
  if (word.search(/[ ]/) >= 0) {
    let array_of_letters = word.split(" ");
    word = array_of_letters.join("%");
    return word;
  }
  return word;
};
exports.SRM = word => {
  if (word.search(/[ ]/) >= 0) {
    let array_of_letters = word.split(" ");
    word = array_of_letters.join("");
    return word;
  }
  return word;
};
