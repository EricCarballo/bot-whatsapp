const { cargarFechas } = require("./src/fechas");
const { enviarMensaje, iniciarBot } = require("./src/api");

async function revisarFechas() {
  const fechas = cargarFechas();
  const hoy = new Date();
  const fechaString = hoy.toISOString().split("T")[0];

  if (fechas[fechaString]) {
    const { nombre, tarjeta } = fechas[fechaString];
    const mensaje = `🔔 *Recordatorio*:  
  📅 *Hoy* le toca recibir el ahorro a *${nombre}*.  
  💳 *Tarjeta:* ${tarjeta}  
  📌 ¡Por favor realizar los pagos puntuales!
  🌞 Excelente Día.`;

    await enviarMensaje("AQUÍ EL ID DEL GRUPO@g.us", mensaje);
    console.log("✅ Mensaje enviado exitosamente");
  } else {
    console.log("No hay recordatorios para hoy.");
  }

  setTimeout(() => {
    console.log("⏳ Finalizando el proceso...");
    process.exit();
  }, 5000);
}

// Inicia el bot y revisa las fechas
async function iniciar() {
  try {
    await iniciarBot(); // Inicializa WhatsApp
    revisarFechas(); // Revisa las fechas y envía el mensaje
  } catch (error) {
    console.error("? Error al iniciar el bot:", error);
    process.exit(1); // Termina el script con error si no pudo iniciar
  }
}

iniciar();
