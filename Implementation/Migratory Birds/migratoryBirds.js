// migratory Birds Solution :)

function migratoryBirds(arr) {
  let largest = 1,
    counter = largest,
    birdType = 0;
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    largest = arr.lastIndexOf(arr[i]) - arr.indexOf(arr[i]) + 1; //lastIndexOf() returns the index (position) specified value in a string. last
    if (largest > counter) {
      //indexOf() method returns the position in a string. first
      counter = largest;
      birdType = arr[i];
    }
  }
  return birdType;
}
