function findDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
}

