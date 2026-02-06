const mongoose = require('mongoose');

const AlbumSchema = new mongoose.Schema({
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
    photos: [{
        url: String,
        postéPar: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        commentaires: [{
            auteurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
            texte: String,
            date: { type: Date, default: Date.now }
        }]
    }]
}, { timestamps: true });

module.exports = mongoose.model('Album', AlbumSchema);