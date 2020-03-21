const express = require('express');
const {
  getUsers,
  getUser,
  createUser,
  updateUser
} = require('../controllers/users');

const User = require('../models/user');

const router = express.Router({ mergeParams: true});

const advancedResults = require('../middle/advancedResults');
//const { protect, authorize } = require('../middleware/auth');

router.use(protect);
//router.use(authorize('admin'))
