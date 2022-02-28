// Subarray Division Solution :)

function birthday(s, d, m) {
    let counter = 0;
    for (let i = 0; i < s.length; i++) {
      let sum = 0;
      let slice = s.slice(i, i + m);
      sum = slice.reduce( (a, b) => a + b);
      if (sum === d && slice.length === m) {
        counter += 1;
      }
    }
    return counter;
  }