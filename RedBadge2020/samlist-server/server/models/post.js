const { DataTypes } = require('sequelize');
const db = require('../db');

const Post = db.define('post', {
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
  },
  postTitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  postBody: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Post;
