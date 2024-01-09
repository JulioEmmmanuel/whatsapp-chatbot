const fs = require("fs");
const myConsole = new console.Console(fs.createWriteStream("./logs.txt"));


const verifyToken = (req, res) => {
    
    try {
        var accessToken = "my_token";
        var token = req.query["hub.verify_token"];
        //lo que tenemos que devolver al verificar que los tokens son iguales
        var challenge = req.query["hub.challenge"];

        if(challenge != null && token != null && token === accessToken){
            res.send(challenge);
        } else {
            res.status(400).send();
        }

    } catch(e){
        res.status(400).send();
    }

}

const receivedMessage = (req, res) => {

    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"][0]);
        var value = changes["value"];
        var messageObject = value["messages"];
        var messages = messageObject[0];

        //myConsole.log(messageObject);
        var text = GetTextUser(messages);
        myConsole.log(text);

        res.send("EVENT_RECEIVED");
    } catch(error){
        res.send("EVENT_RECEIVED");
    }

}

function GetTextUser(messages){

    var text = "";
    var typeMessage = messages["type"];

    if(typeMessage === "text"){
        text = messages["text"]["body"];
    } else if(typeMessage === "interactive"){

        var interactiveObject = messages["interactive"];
        var typeInteractive = interactiveObject["type"];
        myConsole.log(interactiveObject);

        if(typeInteractive === "button_reply"){
            text = (interactiveObject["button_reply"])["title"];
        } else if(typeInteractive === "list_reply"){
            text = (interactiveObject["list_reply"])["title"];
        } else {
            myConsole.log("sin mensaje");
        }
        
    } else {
        myConsole.log("sin mensaje");
    }

    return text;

}

module.exports = {verifyToken, receivedMessage};