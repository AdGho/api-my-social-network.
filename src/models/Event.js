const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
    nom: { type: String, required: true }, // [cite: 23]
    description: String, // [cite: 24]
    dateDebut: { type: Date, required: true }, // [cite: 25]
    dateFin: { type: Date, required: true }, // [cite: 26]
    lieu: String, // [cite: 27]
    photoCouverture: String, // [cite: 28]
    isPublic: { type: Boolean, default: true }, // [cite: 29]
    parentGroup: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', default: null },
    organisateurs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // [cite: 50]
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // [cite: 49]
}, { timestamps: true });

module.exports = mongoose.model('Event', EventSchema);