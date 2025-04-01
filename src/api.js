const { Client, LocalAuth } = require("whatsapp-web.js");

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  console.log("Escanea este código QR para iniciar sesión:");
  require("qrcode-terminal").generate(qr, { small: true });
});

async function enviarMensaje(chatId, mensaje) {
  try {
    const chat = await client.getChatById(chatId);
    await chat.sendMessage(mensaje);
    console.log("✅ Mensaje enviado:", mensaje);
  } catch (error) {
    console.error("❌ Error enviando mensaje:", error);
  }
}

function iniciarBot() {
  return new Promise((resolve, reject) => {
    client.on("ready", () => {
      console.log("✅ Bot de WhatsApp está listo!");
      resolve(client);
    });

    client.on("auth_failure", (msg) => {
      console.error("❌ Fallo en la autenticación", msg);
      reject(msg);
    });

    client.initialize();
  });
}

module.exports = {
  client,
  enviarMensaje,
  iniciarBot
};
