const Sequelize = require('sequelize');

class HashTag extends Sequelize.Model {
  static initiate(sequelize) {
    HashTag.init({
      title: {
        type: Sequelize.STRING(15),
        allowNull: false,
        unique: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Hashtag',
      tableName: 'hashtags',
      paranoid: false,
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    });
  }

  static associate(db) {
    db.HashTag.belongsToMany(db.Post, { through: 'PostHashtag' });
  }
};

module.exports = HashTag;