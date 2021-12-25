import http from 'http';

import { app } from '@/server';

app.once('ready', () => {
  http.createServer(app).listen(5000, () => {
    console.log(`Server listening on port ${5000}`);
  });
});
