const jwt = require('jsonwebtoken')
const Doctor = require('../Models/doctor')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewtoken')
        const doctor = await Doctor.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!doctor) {
            throw new Error()
        }

        req.token = token
        req.doctor = doctor

        next()
    } catch (error) {
        res.status(401).send({ error: 'Please authenticate.', })
    }
}

module.exports = auth