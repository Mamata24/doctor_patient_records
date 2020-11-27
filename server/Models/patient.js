const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true,
        trim: true
    },
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Doctor'  
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    },
    gender: {
        type: String,
        required: true,
        trim: true,
    },
    age: {
        type: Number,
        required: true,
        trim: true,
    },
    total_number_of_medicines: {
        type: Number,
        required: true,
        trim: true,
    },
    phone_number: {
        type: String,
        required: true,
        trim: true,
    },
    },
    {
        versionKey: false
    }
)

const patient = mongoose.model('patient', patientSchema)
module.exports = patient