var binary = "1010";
var decimal = 0;

for(let i = binary.length - 1; i >= 0; i--)
{
  if(binary.charAt(i) == "1")
  {
    decimal += Math.pow(2, i+1);
  }
}
console.log(decimal);


