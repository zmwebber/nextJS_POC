import express from 'express'
import {
    createCard,
    updateCard,
    removeCard,
    getAllCards
    }  from '../controllers/card.controller.js'
const router = express.Router()

router.route('/cards/add').post(createCard);
router.route('/cards/update/:id').post(updateCard);
router.route('/cards/remove/:id').post(removeCard);
router.route('/cards/getAll').get(getAllCards);
export default router;