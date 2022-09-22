const Sequelize = require("sequelize");

const DATABASE = require("../config/database.json");

// objeto para guardar a conexão do banco de dados
let db = {};

try {
  db = new Sequelize(DATABASE.development);
} catch (error) {
  console.log("Error ao tentar uma conexão com banco de dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco de dados conectado");
  } catch (error) {
    console.log("Erro ao tentar se conectar ao banco de dados");
  }
}

//adicionando função ao objecto
Object.assign(db, {
  hasConnection,
});

module.exports = db;
