import jwt from 'jsonwebtoken'
import config from "../config/auth.config.js"
import bcrypt from 'bcryptjs'
import asyncHandler from 'express-async-handler'
import Card from '../models/card.model.js'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
// @desc    create a new card
// @route   POST /api/cards/add
// @access  Public
export const createCard = asyncHandler(async (req, res) => {
  delete req.body._id;
  const card = req.body
  console.log(card)
  if (!card.eyebrow || !card.title || !card.cta || !card.body || !card.order) {
    res.status(400)
    throw new Error('Please submit all fields')
  } 
  const cardResponse = await Card.create(card)

  if (cardResponse) {
    res.status(201).json({
      _id: cardResponse.id,     
      eyebrow: cardResponse.eyebrow,
      title: cardResponse.title,
      body: cardResponse.body,
      cta: cardResponse.cta,
      order: cardResponse.order,
    })
  } else {
    res.status(400)
    throw new Error('Invalid card data')
  }
})

// @desc    update a card
// @route   POST /api/cards/update
// @access  Public
export const updateCard = asyncHandler(async (req, res) =>  {
  console.log('updateCard') //debugging
  console.log('req: ' + JSON.stringify(req.body)) //make sure your request from postman is what you are sending over
 const cardResponse = await Card.findOneAndUpdate({ _id:req.body._id }, req.body, { new: true})
   if (cardResponse) {
    res.status(201).json({
      'success':true,
      'message':'Card updated successfully',
      'card': cardResponse
    })
  } else {
    res.status(400).json({
      'success':false,
      'message':'update method failed, card not found with _id: ' + req.body._id,
      'card': cardResponse
    })
  }
})

// @desc    delete a card
// @route   POST /api/cards/delete
// @access  Public
export const removeCard = asyncHandler(async (req, res) =>  {
  console.log('remove') //debugging
  console.log('req: ' + JSON.stringify(req.body)) //make sure your request from postman is what you are sending over
 const cardResponse = await Card.findOneAndDelete({ _id:req.body._id }, req.body, { new: true})
   if (cardResponse) {
    res.status(201).json({
      'success':true,
      'message':'Card removed successfully',
      'user': cardResponse
    })
  } else {
    res.status(400).json({
      'success':false,
      'message':'remove method failed, card not found with _id: ' + req.body._id,
      'user': cardResponse
    })
  }
})

// @desc    Get all cards
// @route   GET /api/cards/getAll
// @access  Private
export const getAllCards = asyncHandler(async (req, res) => {
  const cards = await Card.find();
  if (cards) {
    res.status(201).json({
      'success':true,
      'message':'cards retrieved successfully',
      'cards': cards
    })
  } else {
    res.status(400).json({
      'success':false,
      'message':'cannot find cards',
      'cards': cards
    })
  }
})

export default {createCard, updateCard, removeCard, getAllCards}
