import express from 'express'
import { getRacks, postRack, updateRack, deleteRack, getRack } from '../controller/racks.js'

const router = express.Router()
router.get('/', getRacks)
router.get('/:id', getRack)
router.post('/', postRack)
router.patch('/:id', updateRack)
router.delete('/:id', deleteRack)
export default router
