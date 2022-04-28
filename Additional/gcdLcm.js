//greatest common divider-lowest common multiply :)

function gcdLcm(a, b){
    let gcd=0;
    let lcm=0;
    let lowestInteger = (a < b) ? a : b;
    
    for(let i = lowestInteger; i > 0; i--){
        if((a%i == 0) && (b%i == 0)){
            gcd = i;
            break;
        }
    }

    lcm = (a * b) /gcd;

    console.log("Gcd : " + gcd + " Lcm : " + lcm);
}

gcdLcm(128, 96);