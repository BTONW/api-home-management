import { Router } from 'express'
import Controller from '@hm-controllers/master.controller'

const router = Router()
const ctrl = new Controller()

router.get('/months', ctrl.getMonths)

export default router