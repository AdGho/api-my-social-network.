const mongoose = require('mongoose');

const ShoppingItemSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    nom: { type: String, required: true }, // ex: "Chips" [cite: 87]
    quantite: { type: String, required: true }, // ex: "3 paquets" [cite: 88]
    heureArrivee: { type: String, required: true } // [cite: 89]
});

// Index unique composé : empêche d'avoir deux fois le même nom d'item pour le même événement 
ShoppingItemSchema.index({ eventId: 1, nom: 1 }, { unique: true });

module.exports = mongoose.model('ShoppingItem', ShoppingItemSchema);