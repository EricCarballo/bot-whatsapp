//? PARA OBTENER LOS ID DE LOS GRUPOS CORRER GRUPOS "NODE GRUPOS.JS"

const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("Escanea este código QR para iniciar sesión:");
  qrcode.generate(qr, { small: true });
});

client.on("ready", async () => {
  console.log("✅ Bot listo. Obteniendo ID de los grupos...");

  // Obtener todos los chats
  const chats = await client.getChats();

  // Filtrar solo los grupos y mostrar su ID y nombre
  chats
    .filter((chat) => chat.isGroup)
    .forEach((group) => {
      console.log(`📌 Nombre: ${group.name}`);
      console.log(`🆔 ID: ${group.id._serialized}\n`);
    });
});

client.initialize();
