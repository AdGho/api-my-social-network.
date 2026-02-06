const Carpool = require('../models/Carpool');

exports.createCarpool = async (req, res) => {
    try {
        const carpool = new Carpool(req.body);
        await carpool.save();
        res.status(201).json(carpool);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du covoiturage" });
    }
};

exports.getEventCarpools = async (req, res) => {
    try {
        const carpools = await Carpool.find({ eventId: req.params.eventId }).populate('conducteurId', 'nom prenom');
        res.json(carpools);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la récupération" });
    }
};