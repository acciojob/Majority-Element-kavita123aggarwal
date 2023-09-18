function findDuplicates(arr) {
  return arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });
}
const myArray = [2, 1, 2];
const duplicates = findDuplicates(myArray);
console.log(duplicates);
