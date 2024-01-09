function MessageText(textResponse, number){
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


module.exports ={
    MessageText
}