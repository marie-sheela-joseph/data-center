import RackPostModal from '../models/rackPost.js'

export const getRacks = async (req, res) => {
    try {
        const result = await RackPostModal.find()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const getRack = async (req, res) => {
    try {
        const result = await RackPostModal.findById(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json(err)
    }
}
export const postRack = async (req, res) => {
    const newRack = new RackPostModal(req.body.rack)
    try {
        const result = await newRack.save()
        res.status(201).json(result)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}
export const updateRack = async (req, res) => {
    try {
        const result = await RackPostModal.findByIdAndUpdate(req.params.id, { $set: req.body.rack }, { new: true })
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}
export const deleteRack = async (req, res) => {
    try {
        const result = await RackPostModal.findByIdAndDelete(req.params.id)
        res.status(200).json(result)
    } catch (err) {
        res.status(500).json(err)
    }
}