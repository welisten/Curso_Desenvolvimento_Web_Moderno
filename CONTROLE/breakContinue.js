const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for( x in nums) {
     if(x == 5) {
        break// não agesobre o if, e sim ao outro mais proximo dele
     }
     console.log(`${x} = ${nums[x]}`);
}

for(y in nums) {
    if (y == 5) {
        continue// interrompe APENAS no caso da condição verdadeira
    }
    console.log(`${y} == ${nums[y]}`);
}

externo:/*rótulo */for(a in nums){// não use !! -> deselegante, desorganizado, go to
    for(b in nums) {
        if(a ==2 && b == 3) break externo; //break rotulado
        console.log(`Par = ${a},${b}`);
    }
}
console.log('Fim');
