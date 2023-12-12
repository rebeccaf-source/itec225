

    const readline = require("readline");
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    })
    let userInput = "";
    rl.question("Please enter a sentence: ", function (string) {
        var Sentiment = require('sentiment');
        var sentiment = new Sentiment();
        userInput = sentiment.analyze(string);
      
        console.log(userInput);
      
        rl.close();
      });



