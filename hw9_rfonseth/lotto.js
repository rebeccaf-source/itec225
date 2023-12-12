let i = 0;
var lot1 = [];
var lot2 = [];
var lot3 = [];
var lot4 = [];
var lot5 = [];
var lot6 = [];
var lot7 = [];
var lot8 = [];
var lot9 = [];
var lot10 = [];
while(i < 6) {
    for(let x = 0; x < 10; x++) {
        switch(i)
        {
            case 0:
                lot1[x] = Math.floor(Math.random() * 71);
                break;
            case 1:
                lot2[x] = Math.floor(Math.random() * 71);
                break;
            case 2:
                lot3[x] = Math.floor(Math.random() * 71);
                break;
            case 3:
                lot4[x] = Math.floor(Math.random() * 71);
                break;
            case 4:
                lot5[x] = Math.floor(Math.random() * 71);;
                break;
            case 5:
                lot6[x] = Math.floor(Math.random() * 71);
                break;
        }
    }
    i = i + 1;
}
while(i <= 10)
{
    for(let x = 0; x < 10; x++) {
        switch(i)
        {
            case 6:
                lot7[x] = Math.floor(Math.random() * 26);
                break;
            case 7:
                lot8[x] = Math.floor(Math.random() * 26);
                break;
            case 8:
                lot9[x] = Math.floor(Math.random() * 26);
                break;
            case 9:
                lot10[x] = Math.floor(Math.random() * 26);
                break; 
        }
    }
    i = i + 1;
}

console.log(lot1);
console.log(lot2);
console.log(lot3);
console.log(lot4);
console.log(lot5);
console.log(lot6);
console.log(lot7);
console.log(lot8);
console.log(lot9);
console.log(lot10);