const { DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

const DeckCard = sequelize.define('DeckCard', {
 //maybe deck type?
// quantity of cards in the deck?
});

module.exports = DeckCard;