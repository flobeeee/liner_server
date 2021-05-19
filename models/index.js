'use strict';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// 관계설정
const { Theme, User, User_Page, Page } = sequelize.models;

Theme.hasMany(User);
User.belongsTo(Theme);

User_Page.belongsTo(User);
User.hasMany(User_Page);

User_Page.belongsTo(Page);
Page.hasMany(User_Page);

User.belongsToMany(Page, { through: 'User_Page', foreignKey: 'userId', as: 'Page' });
Page.belongsToMany(User, { through: 'User_Page', foreignKey: 'pageId', as: 'User' });

module.exports = db;
