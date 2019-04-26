const Mdl_pract = require('../models/Mdl_practica');
exports.ProbandoKNEX = async(req, res) => {
    Mdl_pract.practica(req.query).then((data) => {
        res.json({
            data
        });
    }), (error) => {
        res.status(500).json({
            error
        });
    }
}