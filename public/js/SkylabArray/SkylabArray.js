class SkylabArray {
  length;
  array;
  some;
  find;
  filter;
  map;

  constructor(...rest) {
    this.array = rest;
  }

  countLength() {
    let count = 0;
    for (const value of this.array) {
      count++;
    }
    return (this.length = count);
  }

  addPush() {
    let count = 0;
    for (const value of this.array) {
      count++;
    }
    this.array[count] = 4;
    return console.log(this.array);
  }
}

export default SkylabArray;
