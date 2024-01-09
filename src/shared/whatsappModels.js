function MessageText(textResponse, number){
    const data = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "preview_url": true,
            "body": textResponse
        }
    }
    return data;
}

function MessageList(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "list",
            "body": {
                "text": "Tengo estas opciones"
            },
            "footer": {
                "text": "Selecciona una de las opciones"
            },
            "action": {
                "button": "Ver opciones",
                "sections": [
                    {
                        "title": "Compra y vende productos",
                        "rows": [
                            {
                                "id": "main-comprar",
                                "title": "Comprar",
                                "description": "Compra los mejores productos para tu hogar"
                            },
                            {
                                "id": "main-vender",
                                "title": "Vender",
                                "description": "Vende tus productos"
                            }
                        ]
                    },
                    {
                        "title": "Centro de atencion",
                        "rows": [
                            {
                                "id": "main-agencia",
                                "title": "Agencia",
                                "description": "Puedes visitar nuestra agencia"
                            },
                            {
                                "id": "main-contacto",
                                "title": "Centro de contacto",
                                "description": "Te atenderá uno de nuestros agentes"
                            }
                        ]
                    }
                ]
            }
        }
    }
    return data;
}


function MessageButtons(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "Selecciona uno de los productos"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-laptop",
                            "title": "laptop"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "option-computadora",
                            "title": "computadora"
                        }
                    }
                ]
            }
        }
    }
    return data;
}

module.exports ={
    MessageText,
    MessageList,
    MessageButtons
}