const mongoose = require('mongoose');
const patients = require('./patient.json')
const Patients = require('./Models/patient')

const { db } = require('./Models/patient')

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true }, (err) => {
    if (err) {
        console.log('connection failed')
    }
    else {
        console.log('Connection working')
    }
}
)

mongoose.connect(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true }, (err) => {
    if (err) console.log("Connection to the database failed")
    else {
        db.collection("patients").countDocuments(function (err, count) {
            if (count === 0) {
                Patients.insertMany(patients)
                    .then((res) => console.log(res))
                    .catch((err) => console.log(err))
            }
        });
        console.log("Connected to the database successfully")
    }
});