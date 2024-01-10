const { sendMessageWhatapp } = require("../services/whatsappService");
const { MessageText, MessageList, MessageButtons, MessageLocation } = require("./whatsappModels");

async function Process(textUser, number){
    textUser = textUser.toLowerCase();
    let models = [];
    
    if(textUser.includes("hola")){
        //SALUDAR
        let model = MessageText("Hola, un gusto saludarte", number);
        models.push(model);
        let modelList = MessageList(number);
        models.push(modelList);
    } else if(textUser.includes('gracias')){
        //AGRADECER
        let model = MessageText("Gracias a ti por escribirme", number);
        models.push(model);
    } else if(textUser.includes('adiós') || textUser.includes('bye') || textUser.includes('me voy')){
        //DESPEDIR
        let model = MessageText("Ve con cuidado", number);
        models.push(model);
    } else if(textUser.includes('comprar')){
        //COMPRAR
        let model = MessageButtons(number);
        models.push(model);
    } else if(textUser.includes('vender')){
        //VENDER
        let model = MessageText("Regístrate en el siguiente formulario para poder evaluarte: https://forms.office.com/pages/responsepage.aspx?id=pj5axnwPC0CJNFptwXBWRUc_p6zZtKNLo7oJew0LsgtURDhUSVVGMEY2QzRDRlVMNzBFM044M1NKRy4u", number);
        models.push(model);
    } else if(textUser.includes('agencia')){
        //AGENCIA
        let model = MessageLocation(number)
        models.push(model);
    } else if(textUser.includes('contacto')){
        //CONTACTO
        let model = MessageText("**Centro de contacto:**\n912345678", number);
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