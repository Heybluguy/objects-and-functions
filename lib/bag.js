class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }

  push(item) {
    this.candies.push(item);
    this.count++
  };

  contains(item) {
    var result = false;
    this.candies.forEach(function (candy) {
      if (candy.type.includes(item)) {
        result = true;
      }
    });
    return result;
  };

}

module.exports = Bag;
