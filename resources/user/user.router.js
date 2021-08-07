import { Router } from 'express'
import { person, updatePerson } from './user.controllers.js'

const router = Router()

router.get('/', person)
router.put('/', updatePerson)

export default router