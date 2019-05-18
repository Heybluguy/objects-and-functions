class TrickOrTreater {
  constructor(costume) {
    this.dressedUpAs = costume.style;
    this.bag = [];
    this.hasCandy = false;
    this.countCandies = 0;
  }

  putCandyInBag(candy) {
    this.bag.push(candy);
    this.hasCandy = true;
    this.countCandies = this.bag.length;
  };

  eat() {
    this.bag.pop();
    this.countCandies = this.bag.length;

  };

}

module.exports = TrickOrTreater;