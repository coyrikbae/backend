const jwt = require('jsonwebtoken');
const secretCode = process.env.SECRET_CODE || 'bebas'

const tokenGenerator = (data) => {
    const { id, nameAdm, emailAdm, imageAdm } = data
    return jwt.sign({
        id, nameAdm, emailAdm, imageAdm
    }, secretCode)
}

const tokenVerifier = (data) => {
    return jwt.verify(data, secretCode)
}

module.exports = {
    tokenGenerator, tokenVerifier,
}