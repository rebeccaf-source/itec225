function generatePassword()
{
    var wordLength = document.getElementById("length").value;

    if(wordLength < 9)
    {
        document.getElementById("demo").innerHTML = "To few numbers";
    }
    else if(wordLength > 30)
    {
        document.getElementById("demo").innerHTML = "To many numbers";
    }
    else
    {

    let characters = "";

    if(document.querySelector('#upper').checked == true)
    {
        characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if(document.querySelector('#lower').checked == true)
    {
        characters += "abcdefghijklmnopqrstuvwxyz";
    }
    if(document.querySelector('#numbers').checked == true)
    {
        characters += "0123456789";
    }
    if(document.querySelector('#symbols').checked == true)
    {
        characters += "!@#$%^&*():;'<,>.?/";
    }

    let password = "";
    for(let i = 0; i < wordLength; i++)
    {
        var num = Math.floor(Math.random() * characters.length);
        password += characters.substring(num, num+1);
    }
    document.getElementById("demo").innerHTML = password;
}
}