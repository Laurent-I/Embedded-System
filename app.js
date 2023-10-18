const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./utils/database');
const pageNotFoundRoute = require('./routes/404Route');
const PatientData = require('./models/PatientDataModel');

const patientDataRoutes = require('./routes/PatientDataRoute');

const app = express();

app.set('view engine', 'ejs');
// app.set('views', 'views');

app.use(bodyParser.json());


// Set up routes
app.get('/chart', async (req, res) => {
  const patientData = await PatientData.findAll();
  res.render('chart', { patientData });
});
app.use('/api', patientDataRoutes);


// Use the 404 route for invalid routes
app.use('*', pageNotFoundRoute);

sequelize.sync().then(() => {
  console.log('Database & tables created!');
  app.listen(3000);
}).catch((error) => {console.log(error)});