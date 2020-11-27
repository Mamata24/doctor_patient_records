const Patients = require("../Models/patient");
exports.getPatient = async (req, res) => {
  try {
    //console.log(Doctor);
    const match = {}
        const sort = {}

        if (req.query.completed) {
            match.completed = req.query.completed === 'true'
        }

        if (req.query.sortBy) {
            const part = req.query.sortBy.split(':')
            sort[part[0]] = part[1] === 'desc' ? -1 : 1
        }

       var p= await Patients.populate({
            match,
            options: {
                limit: parseInt(req.query.limit),
                skip: parseInt(req.query.skip),
                sort
            }
        }).execPopulate()
    // console.log(user);
    res.send( p );
  } catch (e) {
    res.status(400).send(e);
  }
};

