const mongoose = require('mongoose');

const CarpoolSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    conducteurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    lieuDepart: { type: String, required: true }, // [cite: 94]
    heureDepart: { type: String, required: true }, // [cite: 95]
    prix: { type: Number, required: true }, // [cite: 96]
    placesDisponibles: { type: Number, required: true }, // [cite: 97]
    tempsEcartMax: { type: String, required: true } // ex: "30min" [cite: 98]
}, { timestamps: true });

module.exports = mongoose.model('Carpool', CarpoolSchema);