const verifyToken = (req, res) => {
    
    try {
        var accessToken = "my_token";
        var token = req.query["hub.verify_token"];
        //lo que tenemos que devolver al verificar que los tokens son iguales
        var challenge = req.body["hub.challenge"];

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
    res.send("hola received")
}

module.exports = {verifyToken, receivedMessage};