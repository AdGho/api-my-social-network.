const Album = require('../models/Album');

// Créer l'album pour un événement
exports.createAlbum = async (req, res) => {
    try {
        const album = new Album({ eventId: req.body.eventId, photos: [] });
        await album.save();
        res.status(201).json(album);
    } catch (error) {
        res.status(500).json({ message: "Erreur création album" });
    }
};

// Ajouter une photo [cite: 61]
exports.addPhoto = async (req, res) => {
    try {
        const { albumId, url, userId } = req.body;
        const album = await Album.findById(albumId);
        album.photos.push({ url, postéPar: userId });
        await album.save();
        res.json({ message: "Photo ajoutée !", album });
    } catch (error) {
        res.status(500).json({ message: "Erreur ajout photo" });
    }
};

// Commenter une photo [cite: 62]
exports.addComment = async (req, res) => {
    try {
        const { albumId, photoId, userId, texte } = req.body;
        const album = await Album.findById(albumId);
        const photo = album.photos.id(photoId);
        photo.commentaires.push({ auteurId: userId, texte });
        await album.save();
        res.json({ message: "Commentaire ajouté !", album });
    } catch (error) {
        res.status(500).json({ message: "Erreur ajout commentaire" });
    }
};