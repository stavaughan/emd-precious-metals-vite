import express from 'express'
import requestControllers from '../controllers/requestControllers.js'

const settingsRouter = express.Router();

/**
 * @desc Get Items
 * @route GET /api/:endpoint
 * @access Private
 */
settingsRouter.route('/').get(requestControllers.getItems)

export default settingsRouter
