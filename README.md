# 📩 WhatsApp Bot - Recordatorios de Ahorro

Este es un bot automatizado para enviar recordatorios en WhatsApp sobre quién es el siguiente en recibir el ahorro dentro de un grupo familiar. Está desarrollado en **Node.js** y se enfoca en ofrecer una solución gratuita y eficiente.

## 🚀 Características
- 📅 Envío automatizado de recordatorios en WhatsApp.
- 🔄 Configuración sencilla de turnos y participantes.
- 🆓 Basado en herramientas gratuitas para evitar costos adicionales.
- 🖥️ Programado para ejecutarse automáticamente todos los días usando el **Programador de Tareas de Windows**.

## 🛠️ Tecnologías Utilizadas
- **Node.js** - Entorno de ejecución de JavaScript.
- **whatsapp-web.js** - Biblioteca para interactuar con WhatsApp Web.
- **qr-code-terminal** - Para generar el código QR de inicio de sesión.
- **Programador de Tareas de Windows** - Para ejecutar el bot automáticamente todos los días.

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/tu-usuario/whatsapp-bot.git
   ```
2. Entra en el directorio del proyecto:
   ```bash
   cd whatsapp-bot
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Ejecuta el bot:
   ```bash
   node index.js
   ```

## 📲 Uso

- Al iniciar el bot, escanea el código QR con tu cuenta de WhatsApp.
- Usa `grupos.js` para obtener el ID del grupo de WhatsApp donde se enviarán los recordatorios.
- El bot enviará recordatorios automáticamente según lo programado.
- Para automatizar la ejecución diaria, configura el **Programador de Tareas de Windows** para ejecutar `node index.js` diariamente.

## ⚠️ Notas
- Es necesario mantener una sesión activa de WhatsApp Web en el dispositivo.
- Requiere acceso a internet para enviar los mensajes.

---
✨ _Desarrollado por Eric Carballo con ❤️ y Node.js_ ✨

