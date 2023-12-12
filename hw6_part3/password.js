function generatePassword()
{
    const characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*():;'<,>.?/0123456789";
    let password = "";

    for(let i = 0; i <= 30; i++)
    {
        var num = Math.floor(Math.random() * characters.length);
        password += characters.substring(num, num+1);

        if(password.length >=9 && password.length <= 30)
        {
            let letters = 0; 
            let numbers = 0;
            let pun = 0;
            for(let j = 0; j < password.length; j++)
            {
                //to determine if its lowercase
                for(let k = 0; k < 52; k++)
                {
                    if(password.charAt(j) == characters.charAt(k))
                    {
                        letters++;
                    }
                }
                for(let m = 52; m < 71; m++)
                {
                    if(password.charAt(j) == characters.charAt(m)) 
                    {
                        pun++;
                    }
                }
                for(let n = 0; n < characters.length; n++)
                {
                    if(password.charAt(j) == characters.charAt(n))
                    {
                        numbers++;
                    }
                }
                if(letters >= 3 && numbers >= 3 && pun >= 3)
                {
                    document.getElementById("demo").innerHTML = password;
                }
            }
             
        }
    }
}