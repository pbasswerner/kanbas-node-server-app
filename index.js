//const express = require('express');// equivalent to import
import express from 'express';// import express from 'express'
import Hello from './Hello.js';
import Lab5 from './Lab5/index.js';
import cors from 'cors';

const app = express(); // create new express instance
app.use(cors());
app.use(express.json());
Hello(app)
Lab5(app)
app.listen(process.env.PORT || 4000)// listen to http://localhost:4