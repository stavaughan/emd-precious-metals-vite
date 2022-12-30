import asyncHandler from 'express-async-handler'
import Settings from '../models/settingsModel.js'
import messages from '../utils/messages.js'

const requestControllers = {

    getItems: asyncHandler(async (req, res) => {
        const collectionResults = await Settings.find();
        try {
            if (collectionResults) {
                res.status(200).json(collectionResults)
            } else {
                res.status(204).json({ message: messages.noContent })
            }
        } catch (err) {
            res.status(401).send({ message: err?._message || err })
        }
    })
}

export default requestControllers
