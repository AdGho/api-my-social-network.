const Poll = require('../models/Poll');

// 1. Créer un sondage 
exports.createPoll = async (req, res) => {
    try {
        const poll = new Poll(req.body);
        await poll.save();
        res.status(201).json(poll);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de la création du sondage" });
    }
};

// 2. Répondre à une question du sondage [cite: 67]
exports.vote = async (req, res) => {
    try {
        const { pollId, questionId, userId, choix } = req.body;
        
        const poll = await Poll.findById(pollId);
        if (!poll) return res.status(404).json({ message: "Sondage non trouvé" });

        const question = poll.questions.id(questionId);
        
        // Vérifier si l'utilisateur a déjà voté pour cette question [cite: 66]
        const dejaVote = question.reponsesUtilisateurs.find(r => r.userId.toString() === userId);
        if (dejaVote) return res.status(400).json({ message: "Vous avez déjà voté pour cette question" });

        question.reponsesUtilisateurs.push({ userId, choix });
        await poll.save();
        
        res.json({ message: "Vote enregistré !", poll });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors du vote" });
    }
};