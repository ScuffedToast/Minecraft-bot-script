const mineflayer = require('mineflayer');

function createBot(name) {
  const bot = mineflayer.createBot({
    host: 'localhost',   // change to your server IP or localhost
    port: 25565,
    username: name,
    plugins: {
      physics: false  // disable physics plugin to avoid the Vec3 error
    }
  });

  bot.on('spawn', () => console.log(`${name} spawned!`));
  bot.on('error', err => console.log(`${name} error:`, err));
  bot.on('end', () => console.log(`${name} disconnected`));
}

for (let i = 1; i <= 35; i++) {
  createBot(`bot${i}`);
}

