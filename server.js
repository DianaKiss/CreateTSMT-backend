'use strict';

// import { app } from './routes';

const app = require('./routes');
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
