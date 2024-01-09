const axios = require("axios");

async function sendMessageWhatapp(textResponse, number){
    const body = {
        "messaging_product": "whatsapp",
        "preview_url": false,
        "recipient_type": "individual",
        "to": number,
        "type": "text",
        "text": {
            "body": textResponse
        }
    }

    const url = "https://graph.facebook.com/v17.0/221917804329137/messages"

    console.log(body);

    try {
        const {data} = await axios.post(url, body, {
            headers: {
                Authorization: "Bearer EAAJkgP7jUQgBO8S3hGLaKRmj6CdJgFHSMYzEA572LpI5hJVwjNZARUWZBWHWFEebVQczR5RvjCIU7fzyZCnPT5iPJRl2ceFbSKngTJLZAEBWnNL3HUbryszNa23PKtmZCpOWdOVNpk8v2WdCyYWPkdu8tSRLqV38DrwTEmQujuw4ZB638utZBWXa8HlICdPXLGixUgBTNctljFuBCZBHViGtwMEx32HowMpXMc6ZAF44ZD"
            }
        })

        console.log(data);
    } catch(error){
        console.log(error.message);
    }
    
}

module.exports = {
    sendMessageWhatapp
};