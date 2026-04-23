const express = require('express');
const path = require('path');

const app = express();
const port = 8080;

function Hello() {
    return "Hello";
}

function AnotherOne() {
    return "<h1>We're no strangers to love<br\>You know the rules and so do I<br\>A full commitment's what I'm thinkin' of<br\>You wouldn't get this from any other guy<br\><br\>I just wanna tell you how I'm feeling<br\>Gotta make you understand<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>We've known each other for so long<br\>Your heart's been aching, but you're too shy to say it<br\>Inside, we both know what's been going on<br\>We know the game and we're gonna play it<br\><br\>And if you ask me how I'm feeling<br\>Don't tell me you're too blind to see<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>(Ooh, give you up)<br\>(Ooh, give you up)<br\>(Ooh) never gonna give, never gonna give (give you up)<br\>(Ooh) never gonna give, never gonna give (give you up)<br\><br\>We've known each other for so long<br\>Your heart's been aching, but you're too shy to say it<br\>Inside, we both know what's been going on<br\>We know the game and we're gonna play it<br\><br\>I just wanna tell you how I'm feeling<br\>Gotta make you understand<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you</h1>` One"
}

function TakeABreak() {
    new Promise(r => setTimeout(r, 3000));
    return "It has been 3 seconds since you tried to reach the backend.";
}

function Today() {
    return new Date().toString()
}

function TrueRandom() {
    const value = Math.floor(Math.random() * 1001);

    if (value <= 1) return "WINNER! Your randomly generated number (" + value + ") IS PRIME! YIPPEE!";
    else {
        for (let i = 2; i * i <= value; i++) {
            if (value % i === 0) {
                return "YOU LOSE! Your randomly generated number (" + value + ") is not prime! Do better next time!";
            }
        }
    }

    return "WINNER! Your randomly generated number (" + value + ") IS PRIME! YIPPEE!";
}

function DidYouKnow() {
    const celsius = Math.floor(Math.random() * 1001);
    const fahrenheit = celsius * 9 / 5 + 32;
    return "Did you know that " + celsius + "\xB0C is " + fahrenheit + "\xB0F?";
}

function Christmas(){
    today = new Date();

    let cmas = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() == 11 && today.getDate() > 25) {
        cmas.setFullYear(cmas.getFullYear() + 1);
    }  

    const one_day = 1000 * 60 * 60 * 24;

    return(Math.ceil((cmas.getTime() - today.getTime()) / (one_day)) + " days left until Christmas!"); 
}

function randomString(){
    const count = Math.floor(Math.random() * 500);
    let string = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789";
    for(let i = 0; i < count; i++){
        string += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return string;
}

function randomSum(){
    const start = Math.floor(Math.random() * 1001);
    const array = start.toString().split('');
    let sum = 0;

    for(let i = 0; i < array.length; i++){
        sum += parseInt(array[i]);
    }

    return "The sum of the numbers in " + start + " is " + sum;
}

function Encoded() {
    const i = Math.floor(Math.random() * 11);
    let value = "";
    switch (i) {
        case 0:
            value = Hello();
            break;
        case 1:
            value = AnotherOne();
            break;
        case 3:
            value = TakeABreak();
            break;
        case 4:
            value = Today();
            break;
        case 5:
            value = TrueRandom();
            break;
        case 6:
            value = DidYouKnow();
            break;
        case 7:
            value = Christmas()
            break;
        case 8: 
            value = randomString();
            break;
        case 9: 
            value = randomSum();
            break;
        case 10: 
            value = Encoded();
            break;
        default:
            value = Hello();
            break;       
    }

    return "Guess what method has been jumbled: <br>" + value.split('').sort(function () { return 0.5 - Math.random() }).join('');
}

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send(`<p>We're no strangers to love<br\>You know the rules and so do I<br\>A full commitment's what I'm thinkin' of<br\>You wouldn't get this from any other guy<br\><br\>I just wanna tell you how I'm feeling<br\>Gotta make you understand<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>We've known each other for so long<br\>Your heart's been aching, but you're too shy to say it<br\>Inside, we both know what's been going on<br\>We know the game and we're gonna play it<br\><br\>And if you ask me how I'm feeling<br\>Don't tell me you're too blind to see<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>(Ooh, give you up)<br\>(Ooh, give you up)<br\>(Ooh) never gonna give, never gonna give (give you up)<br\>(Ooh) never gonna give, never gonna give (give you up)<br\><br\>We've known each other for so long<br\>Your heart's been aching, but you're too shy to say it<br\>Inside, we both know what's been going on<br\>We know the game and we're gonna play it<br\><br\>I just wanna tell you how I'm feeling<br\>Gotta make you understand<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you<br\><br\>Never gonna give you up, never gonna let you down<br\>Never gonna run around and desert you<br\>Never gonna make you cry, never gonna say goodbye<br\>Never gonna tell a lie and hurt you</p>`);
});

app.get('/random', (req, res) => {
    const i = Math.floor(Math.random() * 11);
    switch (i) {
        case 0:
            res.status(200).send("<h2>" + Hello() + "</h2>");
            break;
        case 1:
            res.status(200).send("<h2>" + AnotherOne() + "</h2>");
            break;
        case 3:
            res.status(200).send("<h2>" + TakeABreak() + "</h2>");
            break;
        case 4:
            res.status(200).send("<h2>" + Today() + "</h2>");
            break;
        case 5:
            res.status(200).send("<h2>" + TrueRandom() + "</h2>");
            break;
        case 6:
            res.status(200).send("<h2>" + DidYouKnow() + "</h2>");
            break;
        case 7:
            res.status(200).send("<h2>" + Christmas() + "</h2>");
            break;
        case 8: 
            res.status(200).send("<h2>" + randomString() + "</h2>");
            break;
        case 9: 
            res.status(200).send("<h2>" + randomSum() + "</h2>");
            break;
        case 10: 
            res.status(200).send("<h2>" + Encoded() + "</h2>");
            break;
        default:
            res.status(200).send("<h2>" + Hello() + "</h2>");
            break;
    }

})

app.get('/randomise-:min-:max', (req, res) => {
    res.status(200).send("<h2>Min: " + req.params['min'] + "<br>Max: " + req.params['max'] + "<br>Random: " + Math.floor(Math.random() * (req.params['max'] - req.params['min'] + 1)) + req.params['min'] + "</h2>");
})

app.get('/image', (req, res) => {
    res.sendFile(path.join(__dirname + "/Static Files", 'goku.png'));
})

app.post('/hello', (req, res) => {
    const { name } = req.body;
    res.status(200);
    res.send("Hello " + name + "! I hope you are having a good day.");
});

app.listen(port, (error) => {
    if (!error) console.log(`Example app listening at http://localhost:${port}`);
    else console.log("Error occurred, server can't start", error);
}); 