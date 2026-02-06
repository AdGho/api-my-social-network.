const Ticket = require('../models/Ticket');

// 1. Créer un type de billet (réservé aux organisateurs normalement)
exports.createTicketType = async (req, res) => {
    try {
        const ticket = new Ticket(req.body);
        await ticket.save();
        res.status(201).json(ticket);
    } catch (error) {
        res.status(500).json({ message: "Erreur création billet" });
    }
};

// 2. Acheter un billet avec contraintes [cite: 74-75]
exports.buyTicket = async (req, res) => {
    try {
        const { ticketTypeId, acheteur } = req.body;
        const ticketType = await Ticket.findById(ticketTypeId);

        if (!ticketType) return res.status(404).json({ message: "Billet non trouvé" });

        // Vérification de la quantité limitée [cite: 74]
        if (ticketType.quantiteVendue >= ticketType.quantiteTotale) {
            return res.status(400).json({ message: "Plus de billets disponibles" });
        }

        // Vérification : 1 seul billet par personne (via email) 
        const dejaAchete = ticketType.acheteurs.find(a => a.email === acheteur.email);
        if (dejaAchete) {
            return res.status(400).json({ message: "Vous avez déjà obtenu un billet pour cet événement" });
        }

        // Mise à jour : on ajoute l'acheteur et on incrémente le compteur
        ticketType.acheteurs.push(acheteur);
        ticketType.quantiteVendue += 1;
        
        await ticketType.save();
        res.status(200).json({ message: "Achat réussi !", ticketType });
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'achat" });
    }
};