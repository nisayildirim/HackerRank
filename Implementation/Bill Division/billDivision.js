// Bill Division Solution :)

function bonAppetit(bill, k, b) {
  let billTotal=bill.reduce((x,y)=>x+y);
  let annaActual=(billTotal-bill[k])/2;
  (annaActual==b)?console.log("Bon Appetit"):console.log(b-annaActual);
  
}