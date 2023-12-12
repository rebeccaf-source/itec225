var decimal = 50;

var binary = "";

while(decimal > 0)
{
    if(decimal % 2 == 0)
    {
        binary += "0";
        decimal = decimal / 2;
    }
    else
    {
        binary += "1";
        decimal = parseInt(decimal / 2);
    }
    
}
var trueBinary = "";
for(let i = binary.length - 1; i >= 0; i--)
{
    trueBinary += binary.charAt(i);
}
console.log(trueBinary);