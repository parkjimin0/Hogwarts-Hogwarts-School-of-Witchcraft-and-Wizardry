const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('student', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      'https://designerdoginfo.files.wordpress.com/2013/01/puggle-puppy-4.jpg?w=584',
  },
  gpa: {
    type: Sequelize.DECIMAL,
    validate: {
      len: [0.0, 4.0],
    },
  },
});
