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

var nums = [];//numbers I already used

while(i < 6)
{
    for(let x = 0; x < 6; x++) {
        var temp = Math.floor(Math.random() * 71);
        for(let y = 0; y < nums.length; y++)
        {
            if(temp == nums[y])
            {
                temp = Math.floor(Math.random() * 71)
                y = 0;
            }
        }
        nums.push(temp);
        switch(i)
        {
            case 0:
                lot1[x] = temp;
                break;
            case 1:
                lot2[x] = temp;
                break;
            case 2:
                lot3[x] = temp;
                break;
            case 3:
                lot4[x] = temp;
                break;
            case 4:
                lot5[x] = temp;
                break;
            case 5:
                lot6[x] = temp;
                break;
        }
    }
    i++;
}

while(i < 10)
{
    for(let x = 0; x < 6; x++) {
        var temp = Math.floor(Math.random() * 71);
        for(let y = 0; y < nums.length; y++)
        {
            if(temp == nums[y])
            {
                temp = Math.floor(Math.random() * 71)
                y = 0;
            }
        }
        nums.push(temp);
        switch(i)
        {
            case 6:
                lot7[x] = temp;
                break;
            case 7:
                lot8[x] = temp;
                break;
            case 8:
                lot9[x] = temp;
                break;
            case 9:
                lot10[x] = temp;
                break; 
        }
    }
    i++;
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