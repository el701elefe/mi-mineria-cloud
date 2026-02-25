const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('🚀 Mi servicio de minería en la nube está funcionando!');
});

app.get('/api/estado', (req, res) => {
  res.json({
    mineros_activos: 5,
    hashrate_total: '250 TH/s',
    bitcoin_minado_hoy: '0.0023 BTC'
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
