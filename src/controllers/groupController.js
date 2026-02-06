const Group = require('../models/Group');

exports.createGroup = async (req, res) => {
    try {
        const { nom, description, type, createurId } = req.body;

        const newGroup = new Group({
            nom,
            description,
            type, // 'public', 'privé' ou 'secret'
            administrateurs: [createurId],
            membres: [createurId] // Le créateur est le premier membre
        });

        const savedGroup = await newGroup.save();
        res.status(201).json(savedGroup);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du groupe", error: error.message });
    }
};

exports.getAllGroups = async (req, res) => {
    try {
        const groups = await Group.find().populate('administrateurs', 'nom prenom');
        res.json(groups);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};