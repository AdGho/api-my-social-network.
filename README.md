# 📱 API My Social Network - Projet Master Big Data & IA

Ce projet consiste en la réalisation d'une API REST pour un nouveau service Facebook, permettant la gestion de groupes, d'événements et de services collaboratifs (billetterie, sondages, covoiturage).

## 📖 Documentation Postman
La documentation complète avec exemples de requêtes et réponses est disponible ici :
👉 [Accéder à la Doc Postman](https://documenter.getpostman.com/view/49047065/2sBXc8p4CY)

---

## 🛠️ Installation et Lancement
1. **Cloner le projet**
2. **Installer les dépendances** : `npm install`
3. **Configurer les variables d'environnement** : Créer un fichier `.env` à la racine avec :
   - `PORT=3000`
   - `MONGO_URI=votre_lien_mongodb`
4. **Lancer le serveur** : `npm run dev`

---

## ✅ Spécifications Implémentées

### 👤 Utilisateurs & Authentification
- Inscription et connexion avec hashage de mot de passe (BcryptJS).
- [cite_start]Contrainte d'unicité sur l'adresse email[cite: 47].

### 👥 Groupes & Événements
- [cite_start]Création de groupes (Public, Privé, Secret) avec gestion des droits de publication [cite: 36-43].
- [cite_start]Création d'événements en 3 étapes avec paramètres essentiels (Nom, Dates, Lieu, etc.) [cite: 20-30].
- [cite_start]Invitation automatique de tous les membres d'un groupe lors de la création d'un événement associé [cite: 32-33].

### 🎫 Billetterie & Services
- [cite_start]**Billetterie** : Création de types de billets limités et restriction à 1 billet par personne extérieure [cite: 68-82].
- [cite_start]**Sondages** : Création de questions à choix unique par l'organisateur [cite: 63-67].
- [cite_start]**Albums Photo** : Gestion des photos et commentaires par les participants [cite: 59-62].
- [cite_start]**Discussions** : Fil de discussion exclusif (lié soit à un groupe, soit à un événement) [cite: 54-55].

### 🌟 Bonus (Shopping & Covoiturage)
- [cite_start]**Shopping List** : Gestion des apports avec contrainte d'unicité de l'article par événement [cite: 85-90].
- [cite_start]**Covoiturage** : Proposition de trajets avec gestion du prix, des places et de l'écart de temps [cite: 91-98].

---

## 🏗️ Architecture du Projet
Le projet suit une structure MVC simplifiée pour une meilleure maintenance :
- `/src/models` : Schémas Mongoose et contraintes de données.
- `/src/controllers` : Logique métier et validation.
- `/src/routes` : Définition des endpoints REST.
- `app.js` : Point d'entrée et configuration Express.
