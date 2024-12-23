import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@localhost:5432/marketplace');

const User = sequelize.define('User', {
  name: {
    type: Sequelize.STRING,
  },
  email: {
    type: Sequelize.STRING,
    unique: true,
  },
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('PostgreSQL connected');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};
