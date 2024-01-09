const { sendMessageWhatapp } = require("../services/whatsappService");
const { MessageText } = require("./whatsappModels");

async function Process(textUser, number){
    textUser = textUser.toLowerCase();
    let models = [];
    
    if(textUser.includes("hola")){
        //SALUDAR
        let model = MessageText("Hola, un gusto saludarte", number);
        models.push(model);
    } else if(textUser.includes('gracias')){
        //AGRADECER
        let model = MessageText("Gracias a ti por escribirme", number);
        models.push(model);
    } else if(textUser.includes('adiós') || textUser.includes('bye') || textUser.includes('me voy')){
        //DESPEDIR
        let model = MessageText("Ve con cuidado", number);
        models.push(model);
    } else {
        //NO ENTIENDO
        let model = MessageText("No entiendo...", number);
        models.push(model);
    }

    models.forEach(async function (model) {
        await sendMessageWhatapp(model);
    })
}

module.exports = {
    Process
}