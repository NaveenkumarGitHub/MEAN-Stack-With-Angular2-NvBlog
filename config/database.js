const crypto = require('crypto').randomBytes(256).toString('hex');


module.exports = {
    uri:'mongodb://usernaveen:dbnaveen@ds257589.mlab.com:57589/meanblog',
    secret:crypto,
    db:'mean-angular2'

}