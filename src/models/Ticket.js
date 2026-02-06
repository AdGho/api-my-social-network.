const mongoose = require('mongoose');

const TicketSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    nomType: { type: String, required: true }, // ex: "VIP", "Early Bird"
    montant: { type: Number, required: true },
    quantiteTotale: { type: Number, required: true },
    quantiteVendue: { type: Number, default: 0 },
    acheteurs: [{
        nom: String,
        prenom: String,
        adresse: String,
        email: { type: String, required: true }, // Pour vérifier l'unicité par personne
        dateAchat: { type: Date, default: Date.now }
    }]
});

module.exports = mongoose.model('Ticket', TicketSchema);