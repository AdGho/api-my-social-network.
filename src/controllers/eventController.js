const Event = require('../models/Event');
const Group = require('../models/Group');

exports.createEvent = async (req, res) => {
    try {
        const { 
            nom, description, dateDebut, dateFin, lieu, 
            isPublic, organisateurId, groupId 
        } = req.body;

        const newEvent = new Event({
            nom,
            description,
            dateDebut,
            dateFin,
            lieu,
            isPublic,
            organisateurs: [organisateurId],
            participants: [organisateurId], // L'organisateur est participant par défaut
            parentGroup: groupId || null
        });

        // Si l'événement est créé dans un groupe, on peut ajouter automatiquement tous les membres
        if (groupId) {
            const group = await Group.findById(groupId);
            if (group) {
                // On ajoute tous les membres du groupe aux participants de l'événement 
                newEvent.participants = [...new Set([...newEvent.participants, ...group.membres])];
            }
        }

        const savedEvent = await newEvent.save();
        res.status(201).json(savedEvent);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de l'événement", error: error.message });
    }
};

exports.getAllEvents = async (req, res) => {
    try {
        const events = await Event.find()
            .populate('organisateurs', 'nom prenom')
            .populate('parentGroup', 'nom');
        res.json(events);
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};