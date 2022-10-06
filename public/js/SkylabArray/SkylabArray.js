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
    return count;
  }
}

export default SkylabArray;
