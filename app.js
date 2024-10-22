const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config/db.jsx'); 
require('dotenv').config(); 
const teamRoutes = require('./routes/teamRoutes.jsx');
const playerRoutes = require('./routes/playerRoutes.jsx');
const matchRoutes = require('./routes/matchRoutes.jsx');
const cors = require('cors');

 
const app = express();
app.use(cors());
app.use(express.json());
connectDB();

app.use(bodyParser.json());
app.get('/', (req, res) => res.send('Fantasy Cricket API'));
app.use('/api',teamRoutes );
app.use('/api', playerRoutes);
app.use('/api', matchRoutes);

 
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
