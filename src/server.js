const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('your_mongodb_connection_string', { useNewUrlParser: true, useUnifiedTopology: true });

const SubmissionSchema = new mongoose.Schema({
  name: String,
  guld: String,
  sølv: String,
  bronze: String,
  guesses: Object,
});

const Submission = mongoose.model('Submission', SubmissionSchema);

// POST endpoint to save submission data
app.post('/save', async (req, res) => {
  const submission = new Submission(req.body);
  try {
    await submission.save();
    res.send({ message: 'Data saved successfully!' });
  } catch (error) {
    res.status(500).send({ error: 'Error saving data' });
  }
});

// GET endpoint to fetch submission data (optional, for reference)
app.get('/data', async (req, res) => {
  try {
    const data = await Submission.find();
    res.send(data);
  } catch (error) {
    res.status(500).send({ error: 'Error fetching data' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
