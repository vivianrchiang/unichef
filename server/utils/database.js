import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB', 'admin', 'unichef00', {
    dialect: 'mysql',
    host: 'unichef-test.c8ifielnoyxw.us-east-1.rds.amazonaws.com', 
});

export default sequelize;
