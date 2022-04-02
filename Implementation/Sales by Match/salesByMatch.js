//Sales by Match Solution :)

function sockMerchant(n, ar) {
  let pairCounter = 0;
  let search = new Set();
  for (const sock of ar) {
    if (search.has(sock)) {
      pairCounter++;
      search.delete(sock);
    } else {
      search.add(sock);
    }
  }
  return pairCounter;
}
