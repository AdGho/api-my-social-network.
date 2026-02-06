const mongoose = require('mongoose');

const PollSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    titre: { type: String, required: true },
    questions: [{
        questionText: String,
        options: [String], // ex: ["Pizza", "Sushi", "Burger"] [cite: 66]
        reponsesUtilisateurs: [{
            userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            choix: String // La réponse choisie par l'utilisateur [cite: 67]
        }]
    }]
}, { timestamps: true });

module.exports = mongoose.model('Poll', PollSchema);