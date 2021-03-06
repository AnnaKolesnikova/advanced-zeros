class SetNum {
  constructor() {
    this.arr = [];
    this.num = 2;
  }
  getNum(x) {
    if (x === '1') {
      this.arr.push(1);
    }
    if (x % this.num === 0) {
      this.arr.push(this.num);
      x = x / this.num;
      this.getNum(x);

    } else if (x % this.num !== 0) {
      if (!(x <= this.num)) {
        this.num++;
        this.getNum(x);
      }
    }
  }
}

function getZeros(number, dev) {
  let count = 0;
  while (number >= dev) {
    count += Math.trunc(number / dev);
    number = Math.trunc(number / dev);
  }
  return count;
}

module.exports = function getZerosCount(number, base) {

  let sn = new SetNum();
  sn.getNum(base);

  let baseArray = sn.arr;
  //baseArray.sort((left, right) => left - right);

  let count = {};

  let countDiv = {};

  for (var index = 0; index < baseArray.length; index++) {
    var element = baseArray[index];
    tempNumber = number;


    if (count[element] > 0) {
      countDiv[element]++;
      continue;
    }
    else {
      countDiv[element] = 1;
    }

    count[element] = getZeros(tempNumber, element);

  }

  let min = count[element];

  for (var index = 0; index < baseArray.length; index++) {
    var element = baseArray[index];

    let current = Math.trunc(count[element] / countDiv[element]);

    if (current < min) {
      min = current;
    }
  }

  return min;
  // return count[baseArray[0]];
}