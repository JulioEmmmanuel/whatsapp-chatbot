const verifyToken = (req, res) => {
    res.send("hola verifyToken");
}

const receivedMessage = (req, res) => {
    res.send("hola received")
}

module.exports = {verifyToken, receivedMessage};