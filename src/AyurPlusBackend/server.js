import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5017;
const JWT_SECRET = process.env.JWT_SECRET || 'default_secret';

// Middleware
app.use(cors({ origin: '*' })); // Restrict origins
app.use(bodyParser.json());

// 🔗 MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/ayurplus', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch(err => console.error("❌ MongoDB Error:", err));

// 📦 Schemas
const User = mongoose.model('User', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true }
}));

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  email: { type: String, required: true },
  doctor: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  symptoms: { type: String, required: true }
}));

const Contact = mongoose.model('Contact', new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true }
}));

const doctorSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  speciality: String,
  degree: String,
  experience: Number,
  fees: Number,
  address: String
});

const Doctor = mongoose.model("Doctor", doctorSchema);

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: false },
  gender: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
});

const Patient = mongoose.model('Patient', patientSchema);

// Default Route
app.get('/', (req, res) => {
  res.send('Welcome to the Ayurplus Backend API!');
});

// ✅ Register Doctor
app.post('/register-doctor', async (req, res) => {
  console.log('Request received:', req.body);

  const {
    name, email, password, speciality,
    degree, experience, fees, address
  } = req.body;

  if (!name || !email || !password || !speciality || !degree || !experience || !fees || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const hash = await bcrypt.hash(password, 10);
    const doctor = await Doctor.create({
      name, email, password: hash, speciality, degree,
      experience, fees, address
    });
    console.log('Doctor created:', doctor);
    res.status(201).json({ message: 'Doctor registered' });
  } catch (e) {
    console.error(e); 
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ Register User
app.post('/register-patient', async (req, res) => {
  const { name, email, password } = req.body;

  // Validate input
  if (!name || !email || !password) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: 'Email is already registered' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = await User.create({ name, email, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error(error); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🔑 Login
app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Wrong password' });

    const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ message: 'Login success', token });
  } catch (e) {
    console.error(e); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 📅 Book Appointment
app.post('/appointments', async (req, res) => {
  const { email, doctor, date, time, symptoms } = req.body;

  if (!email || !doctor || !date || !time || !symptoms) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await Appointment.create({ email, doctor, date, time, symptoms });
    res.status(201).json({ message: 'Appointment booked' });
  } catch (e) {
    console.error(e); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 📋 Get User Appointments
app.get('/appointments/:email', async (req, res) => {
  try {
    const appointments = await Appointment.find({ email: req.params.email });
    res.json(appointments);
  } catch (e) {
    console.error(e); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 📬 Contact Form
app.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await Contact.create({ name, email, message });
    res.status(201).json({ message: 'Message sent' });
  } catch (e) {
    console.error(e); // Log the error
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});