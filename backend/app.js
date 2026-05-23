const express = require('express');
const cors = require('cors');
const path = require('path');
const sequelize = require('./database/config');

require('./models/Profile');
require('./models/Skill');
require('./models/Experience');
require('./models/Project');
require('./models/Contact');

const profileRoutes = require('./routes/profile');
const skillsRoutes = require('./routes/skills');
const experiencesRoutes = require('./routes/experiences');
const projectsRoutes = require('./routes/projects');
const contactsRoutes = require('./routes/contacts');

const app = express();
const PORT = process.env.PORT || 3008;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../frontend')));

app.use('/api/profile', profileRoutes);
app.use('/api/skills', skillsRoutes);
app.use('/api/experiences', experiencesRoutes);
app.use('/api/projects', projectsRoutes);
app.use('/api/contacts', contactsRoutes);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

sequelize.sync().then(() => {
  console.log('Database synced successfully.');
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
}).catch((err) => {
  console.error('Failed to sync database:', err);
});