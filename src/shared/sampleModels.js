function SampleText(textResponse, number){
    const data = {
        "messaging_product": "whatsapp",
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    }
    return data;
}

function SampleImage(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "image",
        "image": {
            "link": "https://i.pinimg.com/736x/75/28/f0/7528f0c6e736ca4bd8660d1f8ec753ba.jpg"
        }
    }
    return data;
}

function SampleAudio(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "audio",
        "audio": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/audio_whatsapp.mp3"
        }
    }
    return data;
}

function SampleVideo(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "video",
        "video": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/video_whatsapp.mp4"
        }
    }
    return data;
}

function SampleDocument(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "document",
        "document": {
            "link": "https://biostoragecloud.blob.core.windows.net/resource-udemy-whatsapp-node/document_whatsapp.pdf",
            "filename": "Mi documento"
        }
    }
    return data;
}

function SampleButtons(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "interactive",
        "interactive": {
            "type": "button",
            "body": {
                "text": "¿Confirmas tu registro?"
            },
            "action": {
                "buttons": [
                    {
                        "type": "reply",
                        "reply": {
                            "id": "001",
                            "title": "Sí 😀"
                        }
                    },
                    {
                        "type": "reply",
                        "reply": {
                            "id": "002",
                            "title": "No 😥"
                        }
                    }
                ]
            }
        }
    }
    return data;
}

function SampleList(number){
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

function SampleLocation(number){
    const data = {
        "messaging_product": "whatsapp",
        "to": number,
        "type": "location",
        "location": {
            "latitude": "22.12047091713681",
            "longitude": "-100.99089860677546",
            "name": "Museo Laberinto de las Ciencias y las Artes",
            "address": "Blvd. Antonio Rocha Cordero S/N, Tierra Blanca, 78364 San Luis Potosí, S.L.P."
        }
    }
    return data;
}

module.exports = {
    SampleText,
    SampleImage,
    SampleAudio,
    SampleButtons,
    SampleVideo,
    SampleList,
    SampleDocument,
    SampleLocation
}