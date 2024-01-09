const fs = require("fs");
const { sendMessageWhatapp } = require("../services/whatsappService");
const { SampleImage, SampleText, SampleAudio, SampleVideo, SampleDocument, SampleButtons, SampleList, SampleLocation } = require("../shared/sampleModels");
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

const receivedMessage = async (req, res) => {

    try {
        var entry = (req.body["entry"])[0];
        var changes = (entry["changes"][0]);
        var value = changes["value"];
        var messageObject = value["messages"];

        if(typeof messageObject != "undefined"){
            var messages = messageObject[0];
            var number = messages["from"];
            //En Mexico el numero Whatsapp lo registra como 521 + num, hay que eliminar el 1
            const numbers = number.split("")
            numbers.splice(2, 1)
            const to = numbers.join("");

            var text = GetTextUser(messages);
            myConsole.log(text);

            let model;
            if(text === "text"){
                model = SampleText("hola", to);
            } else if(text === "image"){
                model = SampleImage(to);
            } else if(text === "video"){
                model = SampleVideo(to);
            } else if(text === "audio"){
                model = SampleAudio(to);
            } else if(text === "document"){
                model = SampleDocument(to);
            } else if(text === "button"){
                model = SampleButtons(to);
            } else if(text === "list"){
                model = SampleList(to);
            } else if(text === "location"){
                model = SampleLocation(to);
            } else {
                model = SampleText("no entiendo");
            }

            await sendMessageWhatapp(model);

        }

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