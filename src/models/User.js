const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    email: { type: String, required: true, unique: true }, // Contrainte demandée 
    password: { type: String, required: true },
    avatar: { type: String, default: "" }
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);