// Bill Division Solution :)

function bonAppetit(bill, k, b) {
    let totalBill = 0;        
    for (let i=0; i<bill.length ; i++) {
        totalBill =+ bill[i];
        let bActual = (totalBill-bill[k])/2;
        if (b-bActual===0){
            console.log("Bon Appetit");
        }else{
            console.log(b-bActual);
        }

    }

}