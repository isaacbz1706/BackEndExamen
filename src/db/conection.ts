import { Sequelize } from "sequelize";


const sequelize = new Sequelize('almacen', 'root', 'hgbcf1706', {
    host: 'localhost',
    dialect: 'mysql',
    logging:false
  });

  export default sequelize;