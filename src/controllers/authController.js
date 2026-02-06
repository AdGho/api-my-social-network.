const User = require('../models/User');
const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {
    try {
        const { nom, prenom, email, password } = req.body;

        // Vérification si l'utilisateur existe déjà 
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "Cet email est déjà utilisé" });

        // Hashage du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Création de l'utilisateur
        user = new User({
            nom,
            prenom,
            email,
            password: hashedPassword
        });

        await user.save();
        res.status(201).json({ message: "Utilisateur créé avec succès", userId: user._id });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur", error: error.message });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Identifiants invalides" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Identifiants invalides" });

        res.json({ message: "Connexion réussie", userId: user._id, nom: user.nom });
    } catch (error) {
        res.status(500).json({ message: "Erreur serveur" });
    }
};