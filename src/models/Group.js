const mongoose = require('mongoose');

const GroupSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    description: String,
    icone: String,
    photoCouverture: String,
    type: { 
        type: String, 
        enum: ['public', 'privé', 'secret'], // Choix du type [cite: 41]
        required: true 
    },
    autoriserPublicationMembres: { type: Boolean, default: true }, // [cite: 42]
    autoriserCreationEvenementsMembres: { type: Boolean, default: true }, // [cite: 43]
    administrateurs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // [cite: 53]
    membres: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }] // [cite: 52]
}, { timestamps: true });

module.exports = mongoose.model('Group', GroupSchema);