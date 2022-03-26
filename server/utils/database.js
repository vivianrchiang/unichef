import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('loginDB.new_table', 'admin', 'unichef00', {
    dialect: 'mysql',
    host: 'unichef-test.c8ifielnoyxw.us-east-1.rds.amazonaws.com', 
    port: 3306
});

export default sequelize;
