// fechas.js
const fs = require("fs");
const path = require("path");

function cargarFechas() {
  const filePath = path.join(__dirname, "..", "data", "fechas.json");
  
  try {
    if (!fs.existsSync(filePath)) {
      console.error("❌ El archivo fechas.json no se encuentra.");
      return {};  // Devuelve un objeto vacío si no encuentra el archivo
    }

    const datos = fs.readFileSync(filePath, "utf8");
    return JSON.parse(datos);
  } catch (error) {
    console.error("❌ Error al leer fechas.json:", error);
    return {};  // Devuelve un objeto vacío si hay un error al leer el archivo
  }
}

module.exports = {
  cargarFechas
};
