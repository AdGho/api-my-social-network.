require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const groupRoutes = require('./routes/groupRoutes');
const eventRoutes = require('./routes/eventRoutes');
const ticketRoutes = require('./routes/ticketRoutes');
const pollRoutes = require('./routes/pollRoutes');
const discussionRoutes = require('./routes/discussionRoutes');
const albumRoutes = require('./routes/albumRoutes');
const shoppingRoutes = require('./routes/shoppingRoutes');
const carpoolRoutes = require('./routes/carpoolRoutes');

// Import des routes
const authRoutes = require('./routes/authRoutes');

const app = express();

// --- Middlewares ---
// Permet à Express de lire le corps des requêtes en format JSON
app.use(express.json());

// --- Connexion à MongoDB ---
// On utilise la variable d'environnement MONGO_URI définie dans le fichier .env
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('✅ Connexion à MongoDB réussie !');
    })
    .catch((err) => {
        console.error('❌ Erreur de connexion à MongoDB :', err.message);
    });

// --- Déclaration des Routes ---
// Toutes les routes définies dans authRoutes seront précédées par /api/auth
app.use('/api/auth', authRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/events', eventRoutes);
app.use('/api/tickets', ticketRoutes);
app.use('/api/polls', pollRoutes);
app.use('/api/discussions', discussionRoutes);
app.use('/api/albums', albumRoutes); 
app.use('/api/shopping', shoppingRoutes);
app.use('/api/carpools', carpoolRoutes);

// Route de base pour vérifier que le serveur tourne
app.get('/', (req, res) => {
    res.json({ 
        message: "Bienvenue sur l'API My Social Network",
        status: "Serveur opérationnel"
    });
});

// --- Gestion des erreurs 404 (Route non trouvée) ---
app.use((req, res) => {
    res.status(404).json({ message: "Route non trouvée" });
});

// --- Lancement du serveur ---
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur lancé sur : http://localhost:${PORT}`);
    console.log(`Utilise Git Bash et 'npm run dev' pour le mode auto-reload`);
});