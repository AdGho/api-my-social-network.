const mongoose = require('mongoose');

const DiscussionSchema = new mongoose.Schema({
    // Ces deux champs permettent de respecter la contrainte d'exclusion 
    groupId: { type: mongoose.Schema.Types.ObjectId, ref: 'Group', default: null },
    eventId: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', default: null },
    
    messages: [{
        auteurId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        contenu: { type: String, required: true },
        dateEnvoi: { type: Date, default: Date.now }
    }]
}, { timestamps: true });

module.exports = mongoose.model('Discussion', DiscussionSchema);