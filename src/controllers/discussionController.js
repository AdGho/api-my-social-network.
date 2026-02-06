const Discussion = require('../models/Discussion');

exports.createDiscussion = async (req, res) => {
    try {
        const { groupId, eventId } = req.body;

        // Règle métier : Un fil de discussion est lié à 1 groupe OU 1 événement mais PAS les deux 
        if (groupId && eventId) {
            return res.status(400).json({ 
                message: "Une discussion ne peut pas être liée à la fois à un groupe et à un événement." 
            });
        }

        const discussion = new Discussion({ groupId, eventId, messages: [] });
        await discussion.save();
        res.status(201).json(discussion);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création de la discussion" });
    }
};

exports.addMessage = async (req, res) => {
    try {
        const { discussionId, auteurId, contenu } = req.body;
        const discussion = await Discussion.findById(discussionId);
        
        discussion.messages.push({ auteurId, contenu });
        await discussion.save();
        
        res.json({ message: "Message envoyé !", discussion });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'envoi du message" });
    }
};