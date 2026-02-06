const ShoppingItem = require('../models/ShoppingItem');

exports.addItem = async (req, res) => {
    try {
        const item = new ShoppingItem(req.body);
        await item.save();
        res.status(201).json(item);
    } catch (error) {
        if (error.code === 11000) {
            return res.status(400).json({ message: "Cet article est déjà prévu pour cet événement !" });
        }
        res.status(500).json({ message: "Erreur lors de l'ajout" });
    }
};