const app = require('./app');
const sequelize = require('./database/db');
const { port } = require('./config');
require('./database/relations');

app.listen(port, async () => {
  try {
    await sequelize.sync({ force: false });
    console.log(`Server listening on http://localhost:${port}`);
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
});
