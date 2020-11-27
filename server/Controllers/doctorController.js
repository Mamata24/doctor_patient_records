const Doctor=require('../Models/doctor')
exports.addDoctor = async (req, res) => {
    const doctor = new Doctor(req.body);
    console.log(doctor)
    try {
        await doctor.save();
        res.status(201).send( doctor );
    } catch (e) {
        res.status(400).send(e);
    }
}

exports.getDoctor = async (req, res) => {
    try {
        const doctor = await Doctor.findByCredentials(req.body.email, req.body.password)
        const token = await doctor.generateAuthToken()

        res.send({ doctor, token })
    } catch (e) {
        res.status(400).send()
    }
}