function tospeech(){
    var btn = document.getElementById('btn');
speechSynthesis.cancel()
var u = new SpeechSynthesisUtterance();
u.text = document.getElementById('text').value;

var  t;
u.onstart = function (event) {
    t = event.timeStamp;
    //console.log(t);
};

u.onend = function (event) {
    t = event.timeStamp-t;
    //console.log(event.timeStamp);
    //console.log((t/1000) +' seconds');
};

speechSynthesis.speak(u);


}